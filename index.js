var parent_div = document.createElement("div");
parent_div.className="main"

var input_date = document.createElement("input");
input_date.setAttribute("type","date");
input_date.setAttribute("id","dob");

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Click me";
button.addEventListener("click",display_date);
parent_div.append(input_date,button);
document.body.append(parent_div);

function display_date(){
    
    var input =document.getElementById("dob").value;
    var inputdate = new Date(input);
    var currentdate = new Date();
    console.log(`Input date :${inputdate},Current date :${currentdate}`);
    var millisecdiff = parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
    console.log(millisecdiff);
    var seconddiff = Math.floor(millisecdiff/1000);
    console.log(seconddiff);
    var mindiff = Math.floor(seconddiff/60);
    console.log(mindiff);
    var hourdiff = Math.floor(mindiff/60);
    console.log(hourdiff);
    var daydiff = Math.floor(hourdiff/24);
    console.log(daydiff);
    var yeardiff = currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);
    var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
   
    let data0 =document.createElement("div");
    data0.className="main1";
    data0.innerHTML=`Given date${inputdate} current date ${currentdate}`;
    document.body.append(data0);
   
   
   
   
    let data =document.createElement("div");
    data.className="main1";
    data.innerHTML=`${"year:"+yeardiff}`;
    document.body.append(data);
    let data1 =document.createElement("div");
    data1.className="main1";
    data1.innerHTML=`${"month:"+monthdiff}`;
    document.body.append(data1);
    let data2 =document.createElement("div");
    data2.className="main1";
    data2.innerHTML=`${"day:"+daydiff}`;
    document.body.append(data2);
    let data3 =document.createElement("div");
    data3.className="main1";
    data3.innerHTML=`${"hour:"+hourdiff}`;
    document.body.append(data3);
    let data4 =document.createElement("div");
    data4.className="main1";
    data4.innerHTML=`${"min:"+mindiff}`;
    document.body.append(data4);
    let data5 =document.createElement("div");
    data5.className="main1";
    data5.innerHTML=`${"sec:"+seconddiff}`;
    document.body.append(data5);
    let data6 =document.createElement("div");
    data6.className="main1";
    data6.innerHTML=`${"millisec:"+millisecdiff}`;
    document.body.append(data6);
     



}