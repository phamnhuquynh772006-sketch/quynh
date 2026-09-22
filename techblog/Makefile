# Lệnh tắt cho TechBlog stack
# Dùng: make up | make down | make clean | make logs | make ps

up:        ## Build + chạy toàn bộ stack
	docker compose up -d --build

down:      ## Dừng stack, GIỮ dữ liệu
	docker compose down

clean:     ## Dừng + xóa cả dữ liệu (volume)
	docker compose down -v

logs:      ## Xem log api theo thờigian thực
	docker compose logs -f api

ps:        ## Xem trạng thái các dịch vụ
	docker compose ps

help:      ## Hiện danh sách lệnh
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}'
