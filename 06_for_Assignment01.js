console.log("1 : Print Numbers from 5 to 15");
for (let index = 5; index <= 15; index++) {
    console.log(index);

}
console.log("2 : Print Numbers from 50 to 40 by decrementing");
for (let index = 50; index >= 40; index--) {
    console.log(index);

}
console.log("3 : Print First 15 Odd Numbers");
for (let index = 0; index <= 15; index++) {
    if (index % 2 != 0) {
        console.log(index);
    }
}
console.log("4 : Print First 10 Even Numbers");
for (let index = 0; index <=10 ; index++) {
     if(index%2==0){
        console.log(index);
     }

    
}
console.log("5 : Print Table of 5");
for (let index = 5; index  <=50; index=index+5) {
    console.log(index);
      
    
}console.log("6 : Print Table of 10");
for (let index = 10; index  <=100; index=index+10) {
     console.log(index);
    
}
console.log("7 : Print Table of 10 in Reverse Direction");
for (let index = 100; index  >=10; index=index-10) {
      console.log(index);
    
}