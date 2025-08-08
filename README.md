# Магазин «Всё для ремонта»

Интернет-магазин для продажи товаров для ремонта: строительные материалы, инструменты, сантехника и т.д.

---

## 📦 Стек технологий

- **Frontend:** Vite + Vue (port: `5173`)
- **Backend:** Node.js / Express (port: `8080`)
- **Auth API:** Отдельный сервис авторизации (port: `8081`)
- **Nginx:** Обратный прокси

---

### ⚙️ Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/yourname/remont-shop.git
cd remont-shop
```

2. Установите зависимости:

```bash
cd frontend && npm install
cd ../backend && npm install
cd ../auth-api && npm install
```

3. Создайте `.env` в корне:

```env
FRONTEND_PUBLIC_PORT=5173
BACKEND_PUBLIC_PORT=8080
AUTH_API_PUBLIC_PORT=8081
```

4. Сгенерируйте `nginx.conf`:

```bash
set -a && source .env && envsubst < nginx/nginx.conf.template > nginx/nginx.conf && set +a
```

5. Запустите проект:

```bash
npm run dev          # в каждой части поотдельно
# или
docker-compose up --build
```

---

### 🚀 Доступ

| Компонент   | URL                                                      |
| ----------- | -------------------------------------------------------- |
| Frontend    | [http://localhost:5173](http://localhost:5173)           |
| Backend API | [http://localhost:8080/api](http://localhost:8080/api)   |
| Auth API    | [http://localhost:8081/auth](http://localhost:8081/auth) |

---

### 🔪 Проверка Nginx

```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

### 📌 TODO

-

---

### 🧑‍💻 Автор

Разработано командой **«Всё для ремонта»** 📽️🔨\
Контакт: [remontshop@example.com](mailto\:remontshop@example.com)

с

