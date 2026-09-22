# TechBlog — Ứng dụng blog đa dịch vụ

Hệ thống blog công nghệ gồm 4 dịch vụ chạy bằng Docker Compose:

| Dịch vụ  | Vai trò                                            |
|----------|----------------------------------------------------|
| nginx    | Reverse proxy — cửa ngõ duy nhất (cổng 80)          |
| api      | API Node.js (Express) xử lý logic                   |
| db       | PostgreSQL 16 — lưu bài viết (dữ liệu bền vững)     |
| cache    | Redis 7 — cache tăng tốc                            |

**Luồng request:** Ngườà dùng → nginx:80 → api:3000 → db:5432 / cache:6379

## Yêu cầu

- Docker (bản 20.10 trở lên)
- Docker Compose plugin v2 (`docker compose version`)

## Cách chạy (đúng 3 bước)

```bash
# 1. Sao chép cấu hình mẫu
cp .env.example .env

# 2. Khởi động toàn bộ hệ thống
docker compose up -d --build

# 3. Mở trình duyệt
#    http://localhost
```

## Kiểm tra nhanh

```bash
docker compose ps                    # xem 4 dịch vụ đã Up chưa
curl http://localhost                # phải trả về: API ok. DB=db, CACHE=cache
docker compose logs -f api           # xem log api
```

## Dừng hệ thống

```bash
docker compose down        # dừng & xóa container, GIỮ dữ liệu database
docker compose down -v     # xóa cả volume (TOÀN BỘ dữ liệu db bị mất)
```

## Cấu trúc thư mục

```
techblog/
├── docker-compose.yml
├── .env.example          # mẫu biến môi trường (không chứa mật khẩu thật)
├── README.md
├── Makefile              # lệnh tắt: make up / make down / make logs
├── nginx/
│   └── default.conf      # reverse proxy → api:3000
└── api/
    ├── Dockerfile
    ├── .dockerignore
    ├── package.json
    └── server.js
```

## Biến môi trường

Xem `.env.example`. Mật khẩu database chỉ là giá trị mặc định cho môi trường
phát triển — **hãy đổi khi deploy thật**.

## Lệnh tắt (Makefile)

```bash
make up      # build + chạy toàn bộ stack
make down    # dừng, giữ dữ liệu
make clean   # dừng + xóa cả dữ liệu
make logs    # xem log api theo thờigian thực
make ps      # trạng thái các dịch vụ
```
