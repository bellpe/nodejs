const express = require("express");
const router = express.Router();

const conn = require("../config/DB.js")

router.get("/main", function(request, response){
    
    response.render("message", {
        user : request.session.user
    }) // 로그인X : null / 로그인O : 사용자정보
})

router.post("/Join", function(request, response){

    let email = request.body.email;
    let pw = request.body.pw;
    let tel = request.body.tel;
    let address = request.body.address;


    let sql = "insert into message_member values(?, ?, ?, ?, now())";

    conn.query(sql, [email, pw, tel, address] ,function(err, rows){
        if(rows){
            response.redirect("http://127.0.0.1:3000/main");
        }else{
            console.log(err);
        }
    })

    
})

router.post("/Login", function(request, response){

    let email = request.body.email;
    let pw = request.body.pw;

    let sql = "select * from message_member where email = ? and pw = ?";

        conn.query(sql,[email, pw],function(err, rows){
           console.log(rows.length);
           if(rows.length>0){
    
            request.session.user = {
                "email" : rows[0].email,
                "tel" : rows[0].tel,
                "address" : rows[0].address
            }
    
            response.redirect("http://127.0.0.1:3000/main");
    
           }else{
                response.redirect("http://127.0.0.1:5500/0330Message/public/LoginF.html")
           }
        })
    
})

router.get("/logout", function(request, response){

    delete request.session.user;
    
    response.redirect("http://127.0.0.1:3000/main");

})

router.get("/update", function(request, response){

    response.render("update",{
        user : request.session.user
    })
    
    response.redirect("http://127.0.0.1:3000/main");

})

router.post("/update_exe", function(request, response){
    
    let email = request.session.user.email;
    let pw = request.body.pw;
    let tel = request.body.tel;
    let address = request.body.address;

    let sql = "update message_member set pw = ?, tel = ?, address = ? where email = ?";
    
    

    conn.query(sql, [pw, tel, address, email],function(err, rows){
       if(rows){
           
            request.session.user = {
                "email" : email,
                "tel" : tel,
                "address" : address
           }

            response.redirect("http://127.0.0.1:3000/main");
       }else{
            console.log(err);
        }
    })
        
})

router.get("/selectMember", function(request, response){

       let sql = "select * from message_member";

    conn.query(sql,function(err, rows){
        if(rows){
            console.log(rows);
            response.render("selectMember",{
                rows : rows
            })
        }else{
            console.log(err);
        }
    })
})

// router.post("/login", function(request, response){
//     // 사용자가 입력한 ID가 'smart'이고
//     //                PW가 '123' 일때
//     //                성공했으면 'LoginS.html'로 이동하고
//     //                실패했으면 'LoginF.html'로 이동하시오. 
//     let id = request.body.id;
//     let pw = request.body.pw;

//     let sql = "select * from nodejs_member where id = ? and pw = ?";

//     conn.query(sql,[id, pw],function(err, rows){
//        console.log(rows.length);
//        if(rows.length>0){

//         request.session.user = {
//             "id" : rows[0].id,
//             "nick" : rows[0].nick
//         }

//         response.render("LoginS",{
//             id : rows[0].id
//         })

//        }else{
//         response.redirect("http://127.0.0.1:5500/0322expressDB/public/LoginF.html")
//        }
//     })
//    // if(id == 'smart'&& pw=="123"){
//    //     response.redirect("http://127.0.0.1:5500/0322express/public/LoginS.html");
//    // }else{
//    //     response.redirect("http://127.0.0.1:5500/0322express/public/LoginF.html")
//    // }

// });


// router.post("/join", function(request, response){
    
//     let id = request.body.id;
//     let pw = request.body.pw;
//     let nick = request.body.nick;

//     let sql = "insert into nodejs_member values(?, ?, ?)";

//     conn.query(sql, [id, pw, nick] ,function(err, rows){
//         if(rows){
//             response.redirect("http://127.0.0.1:3000/Main");
//         }else{
//             console.log(err);
//         }
//     })

// });

// router.post("/delete", function(request, response){
    
//     let id = request.body.id;
    
//     let sql = "delete from nodejs_member where id = ?";

//     conn.query(sql, [id],function(err, rows){
//         if(rows){
//             response.redirect("http://127.0.0.1:3000/Main");
//         }else{
//             console.log(err);
//         }
//     })

// });

// router.get("/btndelete", function(request, response){
    
//     console.log("btndelete호출");
    
//     let id = request.query.id;

//     console.log("삭제할 ID값 : "+ id);
    
//      let sql = "delete from nodejs_member where id = ?";

//      conn.query(sql, [id],function(err, rows){
//         if(rows){
//             response.redirect("http://127.0.0.1:3000/select");
//         }else{
//             console.log(err);
//         }
//     })

// });

// // update라우터를 생성하고, 입력한 ID의 PW를 수정하시오
// router.post("/update", function(request, response){
    
//     let id = request.body.id;
//     let select = request.body.select;
//     let data = request.body.data;

//     // select값이 pw면 pw가 변경되는 SQL을 실행하고
//     //            nick이면 nick 변경되는 SQl을 실행하시오.
//     let sql= "";
    

//     if(select=="pw"){
//          sql = "update nodejs_member set pw = ? where id = ?";
//     }else if(select=="nick"){
//          sql = "update nodejs_member set nick = ? where id = ?";
//     }
    

//     conn.query(sql, [data, id],function(err, rows){
//        if(rows){
//             response.redirect("http://127.0.0.1:3000/Main");
//        }else{
//             console.log(err);
//         }
//     })

// });

// router.get("/select", function(request, response){
//     // 링크를 통해서 서버 라우터를 호출할 때는 get방식으로 설정
    
//     let sql = "select * from nodejs_member";

//     conn.query(sql,function(err, rows){
//         if(rows){
//             console.log(rows);
//             response.render("select",{
//                 rows : rows
//             });

//             // response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
//             // response.write("<html>");
//             // response.write("<body>");
//             // response.write("<table border = '1'>");
//             // response.write("<tr>");
//             // response.write("<th>ID</th>");
//             // response.write("<th>PW</th>");
//             // response.write("<th>NICk</th>");
//             // response.write("</tr>");
//             // for(let i=0;i<rows.length; i++){
//             //     response.write("<tr>");
//             //     response.write("<td>"+rows[i].id+"</td>");
//             //     response.write("<td>"+rows[i].pw+"</td>");
//             //     response.write("<td>"+rows[i].nick+"</td>");
//             //     response.write("<td><a href='http://127.0.0.1:3000/btndelete?id="+rows[i].id+"'><button>삭제</button></a></td>");
//             //     response.write("</tr>");
//             // }
//             // response.write("</table>");
//             // response.write("</body>");
//             // response.write("</html>");
//             // response.end();
//         }else{
//             console.log(err);
//         }
//     })

// });

// router.post("/selectOne", function(request, response){
//     // 링크를 통해서 서버 라우터를 호출할 때는 get방식으로 설정
    
//     let id =request.body.id;
    
//     let sql = "select * from nodejs_member where id = ?";

//     conn.query(sql,[id],function(err, rows){
//         if(rows){
//             response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
//             response.write("<html>");
//             response.write("<body>");
//             response.write("<table border = '1'>");
//             response.write("<tr>");
//             response.write("<th>ID</th>");
//             response.write("<th>PW</th>");
//             response.write("<th>NICk</th>");
//             response.write("</tr>");
//             for(let i=0;i<rows.length; i++){
//                 response.write("<tr>");
//                 response.write("<td>"+rows[i].id+"</td>");
//                 response.write("<td>"+rows[i].pw+"</td>");
//                 response.write("<td>"+rows[i].nick+"</td>");
//                 response.write("</tr>");
//             }
//             response.write("</table>");
//             response.write("</body>");
//             response.write("</html>");
//             response.end();
//         }else{
//             console.log(err);
//         }
//     })

// });

// router.get("/Main", function(request, response){

//     response.render("Main",{
//         user : request.session.user
//     })
// })

// router.get("/logout", function(request, response){

//     delete request.session.user;
    
//     response.render("Main",{
//         user : request.session.user
//     })
// })

module.exports = router;