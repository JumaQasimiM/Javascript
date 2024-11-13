// import { Circel } from "./circelEs6.js";
// when use export default {} not require
// import  Circel,{A,B}  from "./circelEs6.js";


const showinhtml = document.getElementById('test');

import  Circel  from "./circelEs6.js";
const c1 = new Circel(3);

showinhtml.innerHTML = c1.drow();
