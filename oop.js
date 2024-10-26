// OOP in javaScript


class Person{
	// Parent class
	constructor(name, dateOfBirth){
		this.name = name
		this.dateOfBirth = dateOfBirth
	}

	PrintInfo(){
		const currentDate = new Date();
		const age = currentDate.getFullYear() - this.dateOfBirth;

		console.log('Mr./Mis.' + this.name +' is '+ age +'Years old!')
	}

}