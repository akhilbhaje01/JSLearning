

var reverseString = function(str){
     var reverse = "";
     for (let index = str.length-1; index >= 0; index--){
     var charAt = str.charAt(index);
      reverse = reverse + charAt;
}
return reverse;
}
var result = reverseString("Do it anyhow");
console.log(`Reverse String is : ${result}`);


var reverseStr = function(str){
     var reverse = "";
     for (let index = str.length-1; index >=0; index--) {
           var charAt = str.charAt(index);
           reverse = reverse + charAt;
     }
     return reverse;

}

var result = reverseStr("I am akhil");
console.log(`${result}`);









// str.length-1    >= 0; tr = --)
// var charAt = str.charAt(index)fnction(str){ // str = "Do it anyhow"
//     var reverse = ""; // wohyna
//     for (let index = str.length-1 ; index >= 0; index--) {
//        var char = str.charAt(index);// o
//        if(char == " "){
//             break;
//        }
//        reverse = reverse + char; // "w"+"o" ==> "wo"
//     }
//     return reverse;
// }
// var result = reverseStr("Do it anyhow"); 
// console.log(`Reverse last word : ${result}`);

//  str="i am angular champ"
// for (let index = 0; index <str.length; index++) {
//      console.log(index);
    
// }