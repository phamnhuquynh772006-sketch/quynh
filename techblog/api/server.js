const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

// Biến môi trường do docker-compose.yml truyền vào
const DB_HOST = process.env.DB_HOST || "db";
const DB_NAME = process.env.DB_NAME || "techblog";
const CACHE_HOST = process.env.CACHE_HOST || "cache";

app.get("/", (req, res) => {
  res.send(`API ok. DB=${DB_HOST}/${DB_NAME}, CACHE=${CACHE_HOST}`);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", host: os.hostname() });
});

app.listen(PORT, () => console.log(`API chạy tại cổng ${PORT}`));
