class Animal{
    constructor(name){
        this.name = name;
    }
    move(){
        console.log('move form Animal');
    }
}
class Cat extends Animal{
    constructor(name, age){
        super(name); // form Parent
        this.age = age;
    }
    move(){
        // method overriding
        super.move(); // parent method
        console.log('cat move!');
    }
    print(){
        console.log(this.age,this.name);
    }

}
const tom = new Cat('Tom',3);
tom.move();// move , cat move 
