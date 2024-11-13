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
// p1.age;
// static method

const p2 = Person.printInfo();

// class Experation
// expressions to create anonymous classes
const Teacher = class{
    constructor(){}
}

const p3 = new Teacher();
// Abstraction or to make private property and method
// 1. to make property as private  use symbol()
// symbol() ervry time return a unique Symbol(value)
// symbol() === symbol() // false


const _grade = Symbol(); // property
const _gradePrint = Symbol(); // method 
class Student{
    constructor(name,lastName, grade){
        this.name = name;
        this.lastName = lastName;
        this[_grade] = grade; // this private 
    }
    [_gradePrint](){
        console.log('this private method!');
    }
}
const s1 = new Student('juma','qasimi','A');
// s1._gradePrint();


// 2.useing weakmap
// weakmap() is a dictionary {key,value}
// key is an object
// weakmap use in madul
const _password = new WeakMap();
const _confirmPassword = new WeakMap(); // private method
class User{
    constructor(password){
        // set() is WeakMap method
        _password.set(this,password);
        _confirmPassword.set(this,()=>{
            console.log('confirm password method!',this);
        });
    }
    confirm(){
        _confirmPassword.get(this)(); // () is class arow function form constructor
        const pass = _password.get(this);
        // body ...
    }

}
const u1 = new User('123456');