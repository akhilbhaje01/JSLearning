function maleMarriageEligibility(gender,age,boyName){
    if(gender=="male" && age>=21) {
        console.log(`Hey "${boyName}" You are Eligible for Marriage`);
    }
    else{
        console.log(`Unfortunately "${boyName}" you are Not Eligible for Marriage` );
    
    }
    }maleMarriageEligibility("male",57,"Billgates");
    maleMarriageEligibility("male",17,"StewJobs");
    
    console.log("-----------------------------------------step-2------------------------------------------");
    
    
    
    
    function femaleMarriageEligibility(gender,age,girlName){
        if(gender=="female" && age>=18) {
            console.log(`Hey "${girlName}" You are Eligible for Marriage`);
        }
        else{
            console.log(`Unfortunately "${girlName}" you are Not Eligible for Marriage` );
        
        }
        }femaleMarriageEligibility("female",17,"Jenifer");
        femaleMarriageEligibility("female",21,"Malinda");
        
    
         
    