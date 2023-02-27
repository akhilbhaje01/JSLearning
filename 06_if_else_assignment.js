        console.log("---------------------------------------step-1--------------------------------------------");

    function voteEligibility(age){
        if(age>=18 && age<=100 ){
        console.log(` "You are age is:${age} Your eligible for voting"`);
        }
        else{
        console.log(` "You are age is: ${age} not eligible for voting"`);
        }

         if(age>120 || age==0 || age==-10){
            console.log(`Your age is: ${age} please provide valid data`);
         
        }

    }voteEligibility(45);
    voteEligibility(17);
    voteEligibility(8);
    voteEligibility(20);
    voteEligibility(-10);
    voteEligibility(200);
    voteEligibility(0);
    voteEligibility(undefined);
    voteEligibility(null);

    console.log("-------------------------------------------step-2----------------------------------------");

    function gradeCalculation(marks){
        if(marks>=90){
            console.log(`Funtastic marks : ${marks}, Your grade is A+`);
        }
        if(marks>=75 && marks<90){
            console.log(`Excelent marks : ${marks} Your grade is A`);
        }
        if(marks>=50 && marks<75){
            console.log(`Good marks : ${marks} Your grade is B`);
        }
        if(marks>=35 &&marks<50)
        {
            console.log(`Marks is : ${marks},Your grade is C, Need improvement`);
        }
        if(marks==0 || marks<0 ||marks>=100 ||marks=="56" || marks=="Seventy")
        {
            console.log(`Please Provide The valid marks`);
        }


    }gradeCalculation(98);
    gradeCalculation(80);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Eighty");
    