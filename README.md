# Магазин «Всё для ремонта»

Интернет-магазин для продажи товаров для ремонта: строительные материалы, инструменты, сантехника и т.д.

---

## 📦 Стек технологий

- **Frontend:** Vite + Vue
- **Backend:** Node.js / Express
- **DevOps:** Nginx, Docker

---

### ⚙️ Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/yourname/remont-shop.git
```

2. Установите зависимости:

```bash
cd ../frontend && npm install
cd ../backend && npm install
```

4. Сгенерируйте `nginx.conf`:

```bash
set -a && source .env && envsubst < nginx/nginx.conf.template > nginx/nginx.conf && set +a
```

5. Запустите проект:

```bash
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

### Проверка Nginx

```bash
sudo nginx -t
```
