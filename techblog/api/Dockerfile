# 1. Image nền Node.js 18 alpine (nhẹ)
FROM node:18-alpine

# 2. Thư mục làm việc trong container
WORKDIR /app

# 3. Copy khai báo phụ thuộc TRƯỚC để tận dụng Docker cache
COPY package*.json ./
RUN npm install --omit=dev

# 4. Copy mã nguồn còn lại
COPY . .

# 5. Cổng & lệnh khởi động
EXPOSE 3000
CMD ["npm", "start"]
