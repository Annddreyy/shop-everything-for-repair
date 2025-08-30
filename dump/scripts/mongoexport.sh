#!/bin/bash
set -e

echo '⏳ Ожидание старта работы MongoDB...';
sleep 5;
echo '📤 Экспорт карточек товаров...';
mongoexport --host mongo --db shop-everything-for-repair --collection product_cards --out /dump/exported/product_cards.json --jsonArray;
echo '📤 Экспорт карточек акций...';
mongoexport --host mongo --db shop-everything-for-repair --collection promotion_cards --out /dump/exported/promotion_cards.json --jsonArray;
echo '📤 Экспорт карточек новостей...';
mongoexport --host mongo --db shop-everything-for-repair --collection news_cards --out /dump/exported/news_cards.json --jsonArray;
echo '📤 Экспорт отзывов...';
mongoexport --host mongo --db shop-everything-for-repair --collection reviews --out /dump/exported/reviews.json --jsonArray;
echo '📤 Экспорт пользователей...';
mongoexport --host mongo --db shop-everything-for-repair --collection users --out /dump/exported/users.json --jsonArray;
echo '📤 Сжатие экспортированных файлов в архив export.tar.gz...';
tar -czf /dump/exported/export.tar.gz -C /dump/exported $(ls /dump/exported | grep -v dump.tar.gz);
echo '✅ Экспорт завершен.';
