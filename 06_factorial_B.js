function factorialofWordsCount(str) {

    if (str == 0 || str == null || str == "") {
        return `Please enter valid value`;
    }

    var stringLength = str.split(" ");
    console.log(`Total number of word available in given string is : ${stringLength.length}`);


    var factorial = 1;
    for (let index = stringLength.length; index >= 1; index--) {
        var stringLength = index;
        factorial = factorial * stringLength;


    }
    return factorial;





}
var result = factorialofWordsCount("Revision is the mother of Success");
console.log(`The factorial of 6 is: ${result}`);

var result = factorialofWordsCount("We never fail, We always learn");
console.log(`The factorial of 6 is: ${result}`);

var result = factorialofWordsCount("Akhil Bhaje");
console.log(`The factorial of 2 is:${result}`);

var result = factorialofWordsCount("");
console.log(`The factorial of "" is:${result}`);

var result = factorialofWordsCount(null);
console.log(`The factorial of null is: ${result}`);