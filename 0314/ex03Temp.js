exports.template = function(query){
    console.log("template함수호출");


    let sum = "";
    
    for (let i = 1; i <= 9; i++) {
        sum += `<tr><td>${query.num1}*${i}=${(Number(query.num1))*i}</td></tr>`;
    }

    let res = "<html><body><table border = '1'>"+sum+"</table></body></html>"

    return res;

}

exports.template_grade = function(query){
    
    let avg = ((Number(query.java))+(Number(query.web))
                +(Number(query.iot))+(Number(query.android)))/4;
    let grade = " ";
    
    if(avg>=95){
        grade = "A+";
    }else if(avg>=90){
        grade = "A";
    }else if(avg>=85){
        grade = "B+";

    }else if(avg>=80){
        grade = "B";

    }else if(avg>=75){
        grade = "C";

    }else{grade = "F";}
    
    let res = `<html><body>
                 NAME : ${query.name}<br>
                 JAVA : ${query.java}<br>
                 WEB : ${query.web}<br>
                 IOT : ${query.iot}<br>
                 ANDROID : ${query.android}<br>
                 AVG : ${avg}<br>
                 GRADE : ${grade}</body></html>`;
    return res;

}


