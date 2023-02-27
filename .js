function expression(gradeScore,hscScore,sscScore,candidateName){
    if(gradeScore>=70 || hscScore>=80 || sscScore>=90){
        console.log(`Congrates "${candidateName}" you are eligible for TCS interview`);
    }
    else{
        console.log(`Sorry "${candidateName}" Unfortunately you are not eligible for TCS interview`);

    }
}expression(80,86,90,"Akhil");
expression(70,65,55,"Himalay");
expression(60,79,88,"Abhishek");