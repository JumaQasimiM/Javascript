// html document

let testEle = document.querySelector('#test');


// combien
const num1 = [1,2,34,5];
const num2 = [12,24,34,55];
const sliec = [...num1,...num2];

// split

const title = 'this is test file!';

const parts = title.split(' ');
// slag => www.codepython.com/artical/this_is_test_file!
const slag = parts.join('_');


// evry array funtion  
// false -- when at lest one negative value found
const numbers = [40,55,60,90];
const atlestONeNegative = numbers.every(function (numbers) {
	return numbers >=60;
});
// show in html page
testEle.innerHTML = atlestONeNegative;


