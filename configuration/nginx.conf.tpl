server {
    listen 80;
    server_name repair.localhost.com repair.lo;

    proxy_set_header Host $$host;
    proxy_set_header X-Real-IP $$remote_addr;
    proxy_set_header X-Scheme $$scheme;

    location / {
        proxy_pass http://localhost:${FRONTEND_PUBLIC_PORT};
    }

    location /api/v1/ {
        proxy_pass http://localhost:${BACKEND_PUBLIC_PORT};
    }

    location /api/auth/ {
        proxy_pass http://localhost:${AUTH_API_PUBLIC_PORT};
    }

    location /images {
        root ${PATH_TO_PROJECT}/state
    }
}
