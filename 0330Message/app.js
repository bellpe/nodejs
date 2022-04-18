const express = require("express");
const app = express();
const router = require("./router/router.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const session=require("express-session");
// session기능 사용하기 위한 모듈
const session_mysql_save = require("express-mysql-session")
// session기능을 저장하기 위한 모듈(mysql)

let DB_info = {
    host : '127.0.0.1',
    user : 'root',
    password : '1234',
    port : '3306',
    database : 'nodejs'
}

let s_m_s = new session_mysql_save(DB_info);

app.use(express.static("./public"));
// 현재 프로젝트에 정적 파일 폴더 지정
// Template 가져올 때 변환순서
// 1. index.html -> 확장자 .ejs로 변경
// 2. express 프로젝트에 views폴더로 이동
// 3. 해당 css/javascript/images파일들을 public폴더로 이동
// 4. app.js에서 app.use(express.static) 
app.set("view engine","ejs");
// express 내부적으로 engine이 설정되어있기 때문에 set기능사용
app.use(session({
    secret : "smart",
    resave : false,
    saveUninitialized : true,
    store : s_m_s
}))
app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);