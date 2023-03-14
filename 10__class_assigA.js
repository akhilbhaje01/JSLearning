console.log("-----------------------------------------------------step-1-----------------------------------------------------");
class Vehicle{
    carName
    carColor
    carcarMileage
    carengine
    carPrice

    constructor(carName, carColor, carcarMileage, carengine, carPrice){
        this.carName = carName;
        this.carColor = carColor;
        this.carcarMileage = carcarMileage;
        this.carengine = carengine;
        this.carPrice = carPrice;   
    }
}

const tata = new Vehicle("harrier","white","15","diesel",1800000);
console.log(tata);
const maruti = new Vehicle("Breza","blue","24","diesel",1500000);
 console.log(maruti);
const kia = new Vehicle("Seltos","Black","20","Petrol",1000000);
console.log(kia);
const honda = new Vehicle("Hondacity","white","17","Petrol",1500000);
console.log(honda);
const mahindra= new Vehicle("Scorpio","white","15","diesel",1700000);
console.log(mahindra);
console.log("--------------------------------------------------------------------------------------------------");
 

const arrayOfVehicle = [tata,maruti,kia,honda,mahindra];
for (let index = 0; index < arrayOfVehicle.length; index++) {
    const result = arrayOfVehicle[index]; 
   
   console.log(`Vehicle-Details: ${result.carName}, ${result.carColor}, ${result.carcarMileage}, ${result.carengine}, ${result.carPrice}`); 

}
 

console.log("-----------------------------------------------------step-2----------------------------------------------------");
class College{
Name
city
id
course

constructor(Name, city, id, course){
    this.Name = Name;
    this.city = city;
    this.id = id;
    this. course = course;
}
}

const engineering = new College("GHRAET","NAGPUR",1234,"BE");
console.log(engineering);
const medical = new College("LMH","NAGPUR",8769,"DR.");
console.log(medical);
const architect = new College("PC","NAGPUR",5643,"ARCHITECT");
console.log(architect);
const law = new College("GHRAL","NAGPUR",9087,"LAWYER");
console.log(law);

 console.log("----------------------------------------------------step-3---------------------------------------------------");



 function traverseObject(CollegeDetails){
     //console.log(College);
    
     for (const key in CollegeDetails) {
    
        if (Object.hasOwnProperty.call(CollegeDetails, key)) {
            const element = CollegeDetails[key];
            console.log(`College-${key}: ${element}`);
        
            
        }
         
        }

    
}
traverseObject(engineering);
console.log("--------------------------------------------------------------------------------------------------");
traverseObject(medical);
console.log("--------------------------------------------------------------------------------------------------");
traverseObject(architect);
console.log("--------------------------------------------------------------------------------------------------");
traverseObject(law);


console.log("------------------------------------------------------step-4----------------------------------------------------");
const number =11;
console.log(`The Given Number Is:${number}`);
if(number%2==0){
    console.log(`${number}`);
console.log(`The given Number Is Not Prime`);
}else
{
console.log(`The Given Number Is Prime`);
}



