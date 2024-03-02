console.time("test")
console.warn("This is just Warning");
console.warn("This is just Warning");
console.warn("This is just Warning");
console.warn("This is just Warning");
console.warn("This is just Warning");
console.warn("This is just Warning");
console.timeEnd("test")
//console.clear();
var age = 24;
if (age >= 23 || age <= 21){
    console.log("yes you are eligibe")
}
var a= 20 
console.log(!a>=13)
var x= 100;
if(x==100){
    console.log("x is same");
}else{
    console.log("x is not same")
}
var name = "Khalid Bajeer"
var gender= "Male"
if(gender=="Male"){
    console.log("Hello Mr."+ name);
}else{
    console.log("Hello Miss."+ name)
}
var a= 100;
var b;
b= "value is" + (  a>444 ? "true" :  "false");
console.log(b);


var day= 4;
switch(day) {
    case 0: 
    console.log("Today is Monday");
break; 
case 1 : 
console.log("Today is Tuesday");
break;
case 2 :
    console.log("Today is Wednsday");
break;
case 3:
    console.log("Today is Thursday");
break;
case 4:
    console.log("Today is Friday");
break;
case 5:
    console.log("Today is Saturday");
break;
case 6:
    console.log("Today is Sunday");
break; 
default: console.log("Enter the valid week day");
}

var age = 78;
switch(true) {
    case (age >= 15 && age <= 20) :
    console.log("You are Eligible")
break
case(age >= 21 && age <= 30 ):
console.log("You are not Eligible")
break
default:
     console.log ("Enter the valid Age")
}
var a= 10
var b= 20
if(a>b){
    alert("Value of A : " +a)
}else{
    alert("Value of B: " +b)
}
var a= confirm("Do you like our website?");
if(a){
    alert("Thank you");
}else
{
    alert("Sorry");
}



