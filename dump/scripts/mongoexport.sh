#!/bin/bash
set -e

echo '⏳ Ожидание старта работы MongoDB...';
sleep 5;

echo '📤 Экспорт карточек товаров...';
mongoexport --host mongo --db shop-everything-for-repair --collection product --out /dump/exported/product.json --jsonArray;

echo '📤 Экспорт карточек акций...';
mongoexport --host mongo --db shop-everything-for-repair --collection promotion --out /dump/exported/promotion.json --jsonArray;

echo '📤 Экспорт карточек новостей...';
mongoexport --host mongo --db shop-everything-for-repair --collection news --out /dump/exported/news.json --jsonArray;

echo '📤 Экспорт отзывов...';
mongoexport --host mongo --db shop-everything-for-repair --collection reviews --out /dump/exported/reviews.json --jsonArray;

echo '📤 Экспорт пользователей...';
mongoexport --host mongo --db shop-everything-for-repair --collection users --out /dump/exported/users.json --jsonArray;

echo '📤 Сжатие экспортированных файлов в архив export.tar.gz...';
tar -czf /dump/export.tar.gz -C /dump exported
echo '✅ Экспорт завершен.';

if ! command -v curl &> /dev/null; then
  apt-get update && apt-get install -y curl
fi

/dump/scripts/tg.sh;

echo '\n';

echo '✅ Отправка в ТГ завершена!';
