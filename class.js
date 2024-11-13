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
    // Instance method
    // this depend on class object
    salary(){
        console.log(this.name);
    }
    // static method
    static printInfo(){
        console.log('from static method!');
    }

}
const p1 = new Person('juma', '1999');
p1.age;
// static method

const p2 = Person.printInfo();

// class Experation
