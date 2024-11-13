const show_result = document.querySelector('#test');
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

















