const express = require("express");
const app = express();
const router = require("./router/router.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");

app.set("view engine","ejs");
// express 내부적으로 engine이 설정되어있기 때문에 set기능사용
app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);
