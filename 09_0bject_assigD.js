let professor = {
    firstName: "Gajanan",
    lastName: "Kharat",
    age: 35,
    class: "CodeMined",
    id: 12345,
    experience: "Angular Developer",

    degrees: {
    engineering: 'CSC',
    PHD:'Adv Computing',
    language1:'AngularDeveloper',
    language2:'JAva',
    language3:'SQL'
    },
    totalExperience : '14 years',

 certificats: ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],
 //certificats : 'Oracle certified', 
  degreeReturn: function(){

    return `Teachers degrees are: engineering ${this.degrees.engineering}, PHD ${this.degrees.PHD}, language1 ${this.degrees.language1},language2 ${this.degrees.language2},language3 ${this.degrees.language3}`
  }
    

};
console.log("step-1- Add Minimum 5 Properties:");
console.log(professor);

console.log("------------------------------------------------------------------------------------------------------------------");
console.log("step-2- Include Nested Object For Degrees:");
console.log(professor.degrees);

console.log("------------------------------------------------------------------------------------------------------------------");
console.log("step-3- Add Array For Certificate:");
console.log(professor.certificats);

console.log("------------------------------------------------------------------------------------------------------------------");
console.log("step-4- Function For Concat All Degrees:");
let result = professor.degreeReturn();
console.log(result);

console.log("---------------------------------------------------------------------------------------------------------------------------");
console.log("step-5- New Property Total Experience:");
totalExperience = "14 years";
console.log(`total Experience :${professor.totalExperience}`);

console.log("---------------------------------------------------------------------------------------------------------------------------");
console.log("step-6- Modify Existing Property:");
professor.degrees.language3 = "Adv JAVA";
console.log(professor.degrees);

console.log("------------------------------------------------------------------------------------------------------------------------------");
console.log("step-7- Adding One Certificates:");
professor.certificats.push("Oracle certified");
console.log(professor.certificats);

console.log("----------------------------------------------------------------------------------------------------------------------------");
console.log("step-8- Log Last Element Of array:");
console.log(professor.certificats[professor.certificats.length-1]);