const express = require("express");
const router = express.Router();

router.get("/ex01view", function(request, response){

    let num1 = request.query.num1

    response.render("ex01",{
        num1_router : num1
    });
    // ejs 파일을 생성
    // ejs는 꼭 response통해서 생성시켜줘야함(HTML X)
});

router.get("/ex02grade", function(request, response){

    let name = request.query.name;
    let java = request.query.java;
    let web = request.query.web;
    let iot = request.query.iot;
    let android = request.query.android;


    response.render("ex02",{
        name : name,
        java : java,
        web : web,
        iot : iot,
        android : android
    });

});

router.get("/evenodd", function(request, response){

    let num1 = request.query.num1;
    let num2 = request.query.num2;

    response.render("ex03",{
        num1_router : num1,
        num2_router : num2

    });
    // ejs 파일을 생성
    // ejs는 꼭 response통해서 생성시켜줘야함(HTML X)
});


module.exports = router;