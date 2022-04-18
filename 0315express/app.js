// express 프레임워크를 활용한 서버

const express = require("express");
// express기능을 가져오는 코드
const app = express();
// express기능을 실행하는 코드
const router = express.Router();
// express기능 중에서 router기능을 가져오는 코드

router.get("/plus", function(request, response){

    let num1 = request.query.num1;
    let num2 = request.query.num2;
    let opr = request.query.opr;
    // express를 사용하게 되면 request에 내부적으로 
    // url을 분석해주기 때문에 request가 갖고 있는 query기능을 바로 사용 가능

    console.log("사용자가 입력한 num1값 : "+ num1);
    console.log("사용자가 입력한 num2값 : "+ num2);
    console.log("num1과 num2의 합 : " + (Number(num1)+Number(num2)));


    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    
    response.write("<html>");
    response.write("<body>");
    
    if(opr == "+"){
        response.write("num1과 num2의 값 : " + (Number(num1)+Number(num2)));
    }else if(opr == "-"){
        response.write("num1과 num2의 값 : " + (Number(num1)-Number(num2)));
    }else if(opr == "*"){
        response.write("num1과 num2의 값 : " + (Number(num1)*Number(num2)));
    }else if(opr == "/"){
        response.write("num1과 num2의 값 : " + (Number(num1)/Number(num2)));
}
    response.write("</body>");
    response.write("</html>");

    response.end();
}); // /plus 라우터 생성

router.get("/td", function(request, response){
    
   let num1 = request.query.num1

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    // 사용자가 입력한 num1만큼 td태그를 반복하여 출력하시오(for)
    response.write("<table border = '1'>");
    response.write("<tr>");

    for (let i = 1; i <= (Number(num1)); i++) {
        response.write("<td>"+i+"</td>")
    }
    
    response.write("</tr>");
    response.write("</table>");
    response.write("</body>");
    response.write("</html>");

    response.end();
});

app.use(router); // 미들웨어 : 서버가 동작하는데 있어서 필요한 기능을 정의
// 현재 서버에서 사용할 수 있게 app에 router등록

app.listen(3000);
// prot번호 설정
