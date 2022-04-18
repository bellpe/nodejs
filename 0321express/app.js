const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require("./router/router.js")



app.use(bodyparser.urlencoded({extended:false}));



app.use(router);
app.listen(3000);