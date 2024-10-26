// OOP in javaScript
class Person{
	// Parent class
	constructor(name, dateOfBirth,adress){
		this.name = name
		this.dateOfBirth = dateOfBirth
		this.adress = adress
	}
	// Adress
	Address(){
		console.log(this.adress)
	}
	PrintInfo(){
		const currentDate = new Date();
		const age = currentDate.getFullYear() - this.dateOfBirth;
		console.log('Mr./Mis. ' + this.name +' is '+ age +' years old!');
	}
}


// Inheritance
class Student extends Person{
	constructor(name, dateOfBirth, adress, gerad){
		super(name, dateOfBirth, adress)
		this.gerad = gerad
	}

}

const s =new Student('qasimi',1997,'ABC','12th class');
s.Address();
s.PrintInfo()