

 function factorialOfNum(num){
    var factorial = 1;

    if(num == 0 || num == null || num == undefined ){
        return `Please enter valid value`
    }


    for (let index = num; index >=1; index--) {
         var number =(index) ;
        factorial = factorial * number;  
    }
    
    return factorial;

    
    
 }
 var result = factorialOfNum(5);
 console.log(`The Factorial Of "5" is :${result}`);
 var result = factorialOfNum(3);
 console.log(`The Factorial Of "3" is :${result}`);
 var result = factorialOfNum(null);
 console.log(`The Factorial Of "null" is :${result}`);
 var result = factorialOfNum(8);
 console.log(`The Factorial Of "8" is :${result}`);
 var result = factorialOfNum(undefined);
 console.log(`The Factorial Of "undefined" is :${result}`);
 var result = factorialOfNum(9);
 console.log(`The Factorial Of "9" is :${result}`);
 var result = factorialOfNum(0);
 console.log(`The Factorial Of "0" is :${result}`);

