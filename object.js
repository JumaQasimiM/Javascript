const show_result = document.querySelector('#test');

const Person ={
	// getter --> access property
	/* add get or set key word befor function name */ 
	// setter -- change or set value
	name:'Juma',
	lastName:'qasimi',
	get fullName(){
		return `${Person.name} ${Person.lastName}`;
	},
	set fullName(name){
		const parts = name.split(' ');
		 this.name = parts[0];
		this.lastName = parts[1];

	}

};

Person.fullName = 'Ahmad Ahmadi';
// show_result.innerHTML  = Person.fullName;
// show_result.innerHTML  = Person;



// Create  Video Object

const video ={

	title:'Soprt',
	tags:['football','volyball'],
	showTags(){
		const self = this;
		this.tags.forEach((tag)=>{ // Arow Function
			console.log (this.title, tag);
		});
	},
}

video.showTags()