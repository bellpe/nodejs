const express = require("express");
const router = express.Router();

router.get("/review", function(request, response){
    
    response.write("사용자가 보낸 색상 : "+request.query.color);
    let bgcolor = request.query.color
    
    //위에 사용자가 보내준 색상값으로 응답하는 페이지에 배경색을 변경하시오.
    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    
    response.write("<html>");
    response.write(`<body bgcolor= ${bgcolor}+>`);

    response.write("</body>");
    response.write("</html>");

    response.end();
});

router.post("/post", function(request, response){
    // HTML을 메소드 포스트 해두고 라우터에 
    // .post가 아닌 .get으로 하면 cannot post/post가 뜸
    console.log("post라우터 호출성공");

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});

    response.write("<html>");
    response.write("<body>");

    response.write(`사용자가 보낸 ID : ${request.body.id}<br>`);
    response.write(`사용자가 보낸 PASSWORD : ${request.body.pw}<br>`);
    response.write(`사용자가 보낸 NAME : ${request.body.name}<br>`);
    response.write(`사용자가 보낸 EMAIL : ${request.body.email}<br>`);
    response.write(`사용자가 보낸 TEL : ${request.body.tel}<br>`);
    response.write(`사용자가 보낸 HOBBY : ${request.body.hobby}<br>`);
    response.write(`사용자가 보낸 GENDER : ${request.body.gender}<br>`);
    response.write(`사용자가 보낸 BIRTH : ${request.body.birth}<br>`);
    response.write(`사용자가 보낸 COLOR : ${request.body.color}<br>`);
    response.write(`사용자가 보낸 COUNTRY : ${request.body.country}<br>`);
    response.write(`사용자가 보낸 TALK : ${request.body.talk}<br>`);

    response.write("</body>");
    response.write("</html>");

    
    response.end();
});

router.post("/move", function(request, response){
    // HTML을 메소드 포스트 해두고 라우터에 
    // .post가 아닌 .get으로 하면 cannot post/post가 뜸
    console.log("post라우터 호출성공");
    let siteselect = request.body.site

   // response.redirect("http://www.naver.com");
   // 외부페이지로 이동
   // response.redirect("http://127.0.0.1:5500/0321express/public/ex01.html");
   // 내부페이지로 이동
   if(siteselect=="네이버") {
    response.redirect("http://www.naver.com");
   }else if(siteselect=="구글"){
    response.redirect("http://www.google.com");
   }else if(siteselect=="다음"){
    response.redirect("http://www.daum.net");
   }
   
    response.end();
});

module.exports = router;
// 외부에서 router정보를 사용할 수 있게 해주는 코드