// html document

let testEle = document.getElementById('test');
testEle.style.backgroundColor ='lightgreen'

const num1 = [1,2,34,5];
const num2 = [12,24,34,55];

const sliec = [...num1,...num2];

testEle.innerHTML = sliec;

