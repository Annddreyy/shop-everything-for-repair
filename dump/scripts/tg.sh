set -a
source .env.local
set +a

echo $FILE_PATH

curl -F chat_id="$USER_ID" -F document=@"$FILE_PATH" "https://api.telegram.org/bot$TG_BOT_TOKEN/sendDocument"
