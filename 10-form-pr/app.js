const express = require("express");
const app = express();
const PORT = 8000;

//ejt 사용 설정
app.set("view engine","ejs");
app.set("views", "./views");

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.get("/practice1", (req, res) => {
    res.render("practice1");
  });
  
  app.get("/practice2", (req, res) => {
    res.render("practice2");
  });
  
  app.get("/result1", (req, res) => {
    console.log(req.query);
    res.render("result2", { userInfo: req.query });
  });
  
  app.post("/result2", (req, res) => {
    console.log(req.body);
    res.render("result2", { userInfo: req.body });
  });
  
  app.listen(PORT, () => {
    console.log(`${PORT} is opening!`);
  });