 // http 모듈로 웹 서버 생성
//const { checkPrimeSync } = require("crypto");
const http = require("http");

//fs 모듈 용
const fs = require("fs");
const { error } = require("console");
const server = http.createServer(function (req, res) {
  //req = request 객체 -클라이언트에서 서버로 요청
  //res = respose 객체 (서버에서 클라이언트 응답
  //응답 head 본문 end를 지정
 // res.writeHead(200); //응답헤드
  //res.write("<h1>Hello, Node.js!</h1>"); //응답본문
  //res.end("<p>My first node server</p>"); //응답종료
  //localhost:8000 접속 시 일어남

  //예외 처리!! ->try-catch
  try{
    const data = fs.readFileSync("./index.html")
    res.writeHead(200,{"content-type": "text/html; charset-UTF-8"})
    res.write(data);
    res.end();
  } catch (error){
    // 실습: 404.html 파일 만들어서 해당 html 파일 응답으로 보내기!
  }

});
const PORT = 8000;

//request 이벤트 : 클라이언트 요청
server.on('request', function(req, res){
  console.log("reqeste 이벤트 발생!", req.url);
});

//connerction 이벤트 : 클라이언트가 접속했을 때 발생
server.on('connerction', function(req, res){
  console.log("connection 이벤트 발생!")
})

server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});

//setTimeout(function(){
 // console.log("5초")
 // server.close()
//},5000)

