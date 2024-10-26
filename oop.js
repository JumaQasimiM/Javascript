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
		console.log('Mr./Mis.' + this.name +' is '+ age +'Years old!');
	}
}


// Inheritance
class Student extends Person{
	constructor(name, dateOfBirth, adress, gerad){
		this.gerad = gerad
	}

}
