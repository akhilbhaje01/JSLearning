console.log("------------------------------step-1------------------------");
function stringHandsOn(){
    var str = " Hey you are doing good, keep it up";
    console.log(str);

    console.log("--------------------------step-2----------------------------");
    
    console.log("length of string is:",str.length);

     
    console.log("--------------------------step-3----------------------------");
    

    var myNameafterTrim = str.trim();
    
    console.log(myNameafterTrim);

    console.log("Removing the leading and trailing extra spaces is:",myNameafterTrim.length);

    console.log("--------------------------step-4----------------------------");

     var count = str.length - myNameafterTrim.length;
     console.log("Total removed spaces are:",count);

     console.log("--------------------------step-5----------------------------");

     var firstchar = myNameafterTrim.charAt(0);
     var lastchar = myNameafterTrim.charAt(myNameafterTrim.length-1);
     console.log("First character after trim:",firstchar); 
     console.log("Last character after trim:",lastchar);

     console.log("--------------------------step-6----------------------------");

     var totalWords = myNameafterTrim.split(" ");

     console.log("total word count after removing extra spaces:",totalWords.length);

     console.log("--------------------------step-7----------------------------");

     console.log("Index of word good:",myNameafterTrim.indexOf("good"));

     var  myNameAfter = " Hey you are doing good, keep it up";

     console.log("--------------------------step-8----------------------------");

     var a = myNameAfter.substring(22);
     console.log("substring starting from 22 using substring:",a);

     var b = myNameAfter.slice(22);
     console.log("substring starting from 22 using slice:",b);


     console.log("--------------------------step-9----------------------------");

     var c = myNameafterTrim.endsWith("up");
     console.log("string ends with word up:",c);

     console.log("--------------------------step-10---------------------------");

     var d = myNameafterTrim.startsWith("Hey");

     console.log("string starts with word Hey:",d);





}
stringHandsOn();




 