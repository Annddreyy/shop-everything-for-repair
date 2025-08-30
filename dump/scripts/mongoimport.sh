#!/bin/bash
set -e

echo '⏳ Ожидание старта MongoDB...'
until mongosh --host mongo --eval "db.adminCommand('ping')" >/dev/null 2>&1; do
  sleep 2
done

IMPORT_DIR=/dump

echo '📥 Импорт файлов в MongoDB...'
shopt -s nullglob
for file in ${IMPORT_DIR}/*.json; do
  collection=$(basename "$file" .json)
  collection=${collection//-/_}
  echo "📥 Импортирование $file в коллекцию $collection..."
  mongoimport --host mongo --db shop-everything-for-repair \
    --collection "$collection" \
    --file "$file" \
    --jsonArray || true
done
echo '✅ Импорт завершен.'
