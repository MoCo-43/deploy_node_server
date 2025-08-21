require("dotenv").config({ path: "./database/dbConfig.env" });
const express = require("express");
const app = express();
const port = 3000;

console.log(process.env.DB_NAME);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});

app.get("/hello", (req, res) => {
  console.log(req.url);
  res.send("Hello World!");
});

app.get("/api/board", (req, res) => {
  res.send({ title: "노드 api 서버 update!!!!" });
});

// vue.js build작업 이후
const path = require("path");
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// SPA기반은 실제페이지가 저장되지 않는다. 주의요망
// 이 코드 아래기반에는 죽은 코드가 됨
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public", "index.html"));
});
