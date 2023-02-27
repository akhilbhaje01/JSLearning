console.log("------------------------------------step-1-------------------------------------------");
function evenOdd(num1){
   if(num1%2==0){
    console.log(`The given value: "${num1}" is "Odd"`);
   }
   else{
    console.log(`The given value:"${num1}" is "Even"`);
   }

}evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

console.log("-----------------------------------------step-2------------------------------------------");

function eligibility(age){
    if(age>=18){
        console.log(`age of ${age} is "Eligible for Vote"`);
    }
    else{
        console.log(`Age of ${age} is "Not eligible for Vote"`);
    }
}eligibility(18);
eligibility(20);
eligibility(17);
eligibility(40);

console.log("-----------------------------------------step-3------------------------------------------");

function containchar(){
    var str1 = "Javascript - ES6";
    var str2 = +str1.length;
    //console.log(`${str2}`);
    if(str2>=10){
        console.log(`The Given String "${str1}" is "contain more than 10 characters"`);
    }
    else{
        console.log(`The Given String "${str1}" is " Not contain more than 10 characters"`);
    }

}containchar();


console.log("-----------------------------------------step-4------------------------------------------");

function containsword(){
    var str1 = "JavaScript Language";
    var str2 = str1.startsWith("Java");
    if( str2){
        console.log(`"Yes" Given String "${str1}" is "Start With Java"`);
    }
}containsword();



 