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

odd_even(089)