// function Person(name){
//     this.name = name;
//     this.printInfo(){
//         console.log('name:',this.name)
//     }
// }




// class decleration
class Person{
    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.age = function(){
            const date = new Date();
            const year = date.getFullYear();
            const age = year - this.dateOfBirth;
            console.log(age);
        };
    }

    salary(){
        console.log(this.name);
    }
}
const p1 = new Person('juma', '1999');
p1.age;


// class Experation
