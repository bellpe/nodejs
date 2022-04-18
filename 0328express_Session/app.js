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
