const show_result = document.querySelector('#test');

// Function Decleration 
function hayHello(){
	show_result.innerHTML = 'hello world!'
}
// hayHello()

// function Experation

let odd_even = function(number){
	let result ='';
	if (number == 0){
		result = 'Zero';
	}
	else if(number%2==0){
		result = 'Even;'
	}
	else{
		result = 'Odd';
	}
	return show_result.innerHTML = result;
}

// odd_even(89)

// arow functtion
const add = (a,b)=>{
	return a+b;
}

const Person = function(name){
	//  Closures
	let gender; 
	const newperson ={
		// setter
		setName(new_name){
			name = new_name;
		},
		// getter
		getName(){
			return name;
		},
		// getter 
		getGender(){
			return gender;
		},
		// setter
		setGender(new_gender){
			if (new_gender ==='string' && new_gender.toLowerCase() ==='male' || new_gender.toLowerCase()== 'female'){
				gender = new_gender;
			}
		},
	};
	return newperson;
};

const person1 = Person('juma');

person1.setGender('Female')
show_result.innerHTML = person1.getGender()



const apicode = (function(){
	const api = 'kdhfw3459';
	return function(){
		return api;
	}
})();

















