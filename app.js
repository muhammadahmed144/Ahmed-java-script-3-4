// CHAPTER NO 3 
// QUESTION NO 1
let age = 14
alert("I am a 14 years old")
// QUESTION NO 2
let visit = localStorage.getItem("visitCount")
if(visit === null) {
    visit = 1;
}else{
    visit = Number(visit) +     1 
}
localStorage.setItem( "visitCount",visit)
alert("you have viisited this site " + visit + "times")
// QUESTION NO 3
let birthYear = 28
document.writeln("My birth year is ", birthYear, "<br> Data type of declared variable is number ")
// QUESTION NO 4
let visitorname = "Jhon Doe"
let producttitle = "T-Shirt"
let  Quantity = 5
document.writeln(visitorname ,"<br>ordered",Quantity , producttitle,"<br>(s) on XYZ Clothing store")
// CHAPTER NO 4
// QUESTION NO 1
let x , y , z
// Legal
let myVar;
let $price;
let _name;
let user1;
let totalAmount;

// Illegal x 
// var 1user;
// var my-var;
// var var;
// var user name;
// var @total;
document.writeln("<h2>Rules for naming JS variables</h2>")
document.writeln("Variable names can only contain, $ and _ . For example : $my _ 1stVariable<br> Variable must must begin with a letter, $ or _ . For example : $name, _name  or name<br> Variables names are case sensetive<br>Variables names should not be JS keywords")