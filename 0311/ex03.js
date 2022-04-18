const http = require("http");
const url = require("url");

http.createServer(function(request, response){

    
    let query = url.parse(request.url, true).query;
   

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    // 사용자가 입력한 num1만큼 td태그를 반복하여 출력하시오(for)
    response.write("<table border = '1'>");
    response.write("<tr>");

    for (let i = 1; i <= (Number(query.num1)); i++) {
        response.write("<td>"+i+"</td>")
    }
    
    response.write("</tr>");
    response.write("</table>");
    response.write("</body>");
    response.write("</html>");

    response.end();

}).listen(3000);