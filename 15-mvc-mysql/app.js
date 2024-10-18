const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//js파일을 쓰기 위해 동적으로 고정할 폴더 만듬. static
app.use("/static", express.static(__dirname + "/static"));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
