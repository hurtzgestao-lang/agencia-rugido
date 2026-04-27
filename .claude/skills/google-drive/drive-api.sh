#!/bin/bash
# Helper para Google Drive API v3 usando credenciais do .env
# Uso: source drive-api.sh && drive_call GET "files?q=..."

ENV_FILE="$(git rev-parse --show-toplevel 2>/dev/null || pwd)/.env"
DRIVE_API="https://www.googleapis.com/drive/v3"
DRIVE_UPLOAD="https://www.googleapis.com/upload/drive/v3"

env_get() {
    local line value
    line=$(grep "^$1=" "$ENV_FILE" 2>/dev/null | head -n1)
    value="${line#*=}"
    value="${value%\"}"
    value="${value#\"}"
    value="${value%\'}"
    value="${value#\'}"
    printf '%s' "$value"
}

get_access_token() {
    local refresh_token=$(env_get "GOOGLE_REFRESH_TOKEN")
    local client_id=$(env_get "GOOGLE_CLIENT_ID")
    local client_secret=$(env_get "GOOGLE_CLIENT_SECRET")

    if [ -n "$refresh_token" ] && [ -n "$client_id" ] && [ -n "$client_secret" ]; then
        curl -s -X POST "https://oauth2.googleapis.com/token" \
            -d "client_id=$client_id" \
            -d "client_secret=$client_secret" \
            -d "refresh_token=$refresh_token" \
            -d "grant_type=refresh_token" | jq -r '.access_token'
        return
    fi

    local service_account=$(env_get "GOOGLE_CREDENTIALS")
    if [ -n "$service_account" ]; then
        local header=$(echo -n '{"alg":"RS256","typ":"JWT"}' | base64 -w0 | tr -d '=' | tr '/+' '_-' | tr -d '\n')
        local now=$(date +%s)
        local exp=$((now + 3600))
        local claimset=$(echo -n "{\"iss\":\"$(echo "$service_account" | jq -r '.client_email')\",\"scope\":\"https://www.googleapis.com/auth/drive\",\"aud\":\"https://oauth2.googleapis.com/token\",\"exp\":$exp,\"iat\":$now}" | base64 -w0 | tr -d '=' | tr '/+' '_-' | tr -d '\n')
        local signing_input="${header}.${claimset}"
        local signature=$(echo -n "$signing_input" | openssl dgst -sha256 -sign <(echo "$service_account" | jq -r '.private_key' | sed 's/\\n/\n/g') | base64 -w0 | tr -d '=' | tr '/+' '_-' | tr -d '\n')
        local jwt="${signing_input}.${signature}"
        curl -s -X POST "https://oauth2.googleapis.com/token" \
            -H "Content-Type: application/x-www-form-urlencoded" \
            -d "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=$jwt" | jq -r '.access_token'
        return
    fi

    echo "ERROR: No credentials found in .env" >&2
    return 1
}

# drive_call METHOD PATH [DATA_JSON]
# Ex: drive_call GET "files?pageSize=10"
drive_call() {
    local method=$1
    local path=$2
    local data=$3
    local token=$(get_access_token)
    [ -z "$token" ] || [ "$token" = "null" ] && { echo "ERROR: failed to get access token" >&2; return 1; }

    if [ -n "$data" ]; then
        curl -s -X "$method" "$DRIVE_API/$path" \
            -H "Authorization: Bearer $token" \
            -H "Content-Type: application/json" \
            -d "$data"
    else
        curl -s -X "$method" "$DRIVE_API/$path" \
            -H "Authorization: Bearer $token"
    fi
}

# drive_list "QUERY" [FIELDS] [PAGE_SIZE]
# Ex: drive_list "mimeType='application/vnd.google-apps.folder'"
drive_list() {
    local q=$1
    local fields=${2:-"files(id,name,mimeType,modifiedTime,parents,webViewLink)"}
    local page_size=${3:-50}
    local q_enc=$(printf '%s' "$q" | jq -sRr @uri)
    local fields_enc=$(printf '%s' "$fields" | jq -sRr @uri)
    drive_call GET "files?q=${q_enc}&fields=${fields_enc}&pageSize=${page_size}&supportsAllDrives=true&includeItemsFromAllDrives=true"
}

# drive_get FILE_ID [FIELDS]
drive_get() {
    local file_id=$1
    local fields=${2:-"id,name,mimeType,size,modifiedTime,parents,webViewLink,webContentLink,owners"}
    local fields_enc=$(printf '%s' "$fields" | jq -sRr @uri)
    drive_call GET "files/${file_id}?fields=${fields_enc}&supportsAllDrives=true"
}

# drive_download FILE_ID OUTPUT_PATH
drive_download() {
    local file_id=$1
    local output=$2
    local token=$(get_access_token)
    curl -s -L -o "$output" -H "Authorization: Bearer $token" \
        "$DRIVE_API/files/${file_id}?alt=media&supportsAllDrives=true"
}

# drive_export FILE_ID MIME_TYPE OUTPUT_PATH
# MIME exemplos: text/markdown, application/pdf, text/csv, text/plain
drive_export() {
    local file_id=$1
    local mime=$2
    local output=$3
    local token=$(get_access_token)
    local mime_enc=$(printf '%s' "$mime" | jq -sRr @uri)
    curl -s -L -o "$output" -H "Authorization: Bearer $token" \
        "$DRIVE_API/files/${file_id}/export?mimeType=${mime_enc}"
}

# drive_create_folder NAME [PARENT_ID]
drive_create_folder() {
    local name=$1
    local parent=$2
    local body
    if [ -n "$parent" ]; then
        body=$(jq -nc --arg n "$name" --arg p "$parent" '{name:$n, mimeType:"application/vnd.google-apps.folder", parents:[$p]}')
    else
        body=$(jq -nc --arg n "$name" '{name:$n, mimeType:"application/vnd.google-apps.folder"}')
    fi
    drive_call POST "files?supportsAllDrives=true" "$body"
}

# drive_upload FILE_PATH [PARENT_ID] [NAME] [MIME_TYPE]
drive_upload() {
    local file=$1
    local parent=$2
    local name=${3:-$(basename "$file")}
    local mime=${4:-$(file --mime-type -b "$file")}
    local token=$(get_access_token)

    local meta
    if [ -n "$parent" ]; then
        meta=$(jq -nc --arg n "$name" --arg p "$parent" '{name:$n, parents:[$p]}')
    else
        meta=$(jq -nc --arg n "$name" '{name:$n}')
    fi

    curl -s -X POST "$DRIVE_UPLOAD/files?uploadType=multipart&supportsAllDrives=true" \
        -H "Authorization: Bearer $token" \
        -F "metadata=${meta};type=application/json;charset=UTF-8" \
        -F "file=@${file};type=${mime}"
}

# drive_update_metadata FILE_ID JSON_BODY
# Ex: drive_update_metadata 123 '{"name":"novo nome"}'
drive_update_metadata() {
    local file_id=$1
    local body=$2
    drive_call PATCH "files/${file_id}?supportsAllDrives=true" "$body"
}

# drive_move FILE_ID NEW_PARENT_ID [OLD_PARENT_ID]
drive_move() {
    local file_id=$1
    local new_parent=$2
    local old_parent=$3
    local token=$(get_access_token)
    local url="$DRIVE_API/files/${file_id}?addParents=${new_parent}&supportsAllDrives=true"
    [ -n "$old_parent" ] && url="${url}&removeParents=${old_parent}"
    curl -s -X PATCH "$url" -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d '{}'
}

# drive_copy FILE_ID [NEW_NAME] [PARENT_ID]
drive_copy() {
    local file_id=$1
    local name=$2
    local parent=$3
    local body="{}"
    if [ -n "$name" ] && [ -n "$parent" ]; then
        body=$(jq -nc --arg n "$name" --arg p "$parent" '{name:$n, parents:[$p]}')
    elif [ -n "$name" ]; then
        body=$(jq -nc --arg n "$name" '{name:$n}')
    elif [ -n "$parent" ]; then
        body=$(jq -nc --arg p "$parent" '{parents:[$p]}')
    fi
    drive_call POST "files/${file_id}/copy?supportsAllDrives=true" "$body"
}

# drive_delete FILE_ID
drive_delete() {
    local file_id=$1
    drive_call DELETE "files/${file_id}?supportsAllDrives=true"
}

# drive_trash FILE_ID
drive_trash() {
    local file_id=$1
    drive_update_metadata "$file_id" '{"trashed":true}'
}

# drive_share FILE_ID EMAIL [ROLE] [TYPE]
# ROLE: reader|commenter|writer|fileOrganizer|organizer|owner (default: reader)
# TYPE: user|group|domain|anyone (default: user)
drive_share() {
    local file_id=$1
    local email=$2
    local role=${3:-reader}
    local type=${4:-user}
    local body
    if [ "$type" = "anyone" ]; then
        body=$(jq -nc --arg r "$role" --arg t "$type" '{role:$r, type:$t}')
    else
        body=$(jq -nc --arg r "$role" --arg t "$type" --arg e "$email" '{role:$r, type:$t, emailAddress:$e}')
    fi
    drive_call POST "files/${file_id}/permissions?supportsAllDrives=true&sendNotificationEmail=false" "$body"
}

# drive_list_permissions FILE_ID
drive_list_permissions() {
    local file_id=$1
    drive_call GET "files/${file_id}/permissions?fields=permissions(id,type,role,emailAddress,displayName)&supportsAllDrives=true"
}

# drive_unshare FILE_ID PERMISSION_ID
drive_unshare() {
    local file_id=$1
    local perm_id=$2
    drive_call DELETE "files/${file_id}/permissions/${perm_id}?supportsAllDrives=true"
}

# drive_about
drive_about() {
    drive_call GET "about?fields=user,storageQuota"
}
