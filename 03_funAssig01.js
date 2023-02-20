function fullName(){
    console.log("My Full Name is:AKHIL BHAJE");
}
fullName();

function myDream(){
    console.log("I Want To Become  Angular Developer");
}
myDream();
console.log("---------------------------------------------------------------------------------------------------------");


function personalDetails(firstName, lastName, collegeName){
    console.log("FirstName: ",firstName,"LastName: ",lastName,"CollegeName: ",collegeName);
}
personalDetails("AKHIL,","BHAJE,","GHRAET");
console.log("-------------------------------------------------------------------------------------------------------");



 

var num1 = "Virat";
var num2 = "Anushka";

var str1 = '1000';
var str2 = '2000';

function swapValuesDude(value1, value2){
    console.log("Before Swap:",value1, value2);
    var temp = value1;
    value1=value2;
    value2 =temp;
    console.log("After Swap:", value1,value2);


}
swapValuesDude(num1, num2);

swapValuesDude(str1,str2);
console.log("-----------------------------------------------------------------------------------------------");


function addThreeValues(num1, num2, num3){
    var sum = num1 +num2 +num3;
    return sum;

}
var sumResult = addThreeValues(10.23, 600,40);
console.log("sum is:",sumResult);

var sumResult = addThreeValues("Hello", "Good", "Morning");
console.log(sumResult);