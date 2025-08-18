const ctx = document.getElementById("lineChart").getContext("2d");

const coins = ["bitcoin", "ethereum", "binancecoin", "ripple", "cardano"];
const colors = ["red", "blue", "green", "orange", "purple"];
let chart;

async function loadMultiLine() {
  try {
    const datasets = [];

    for (let i = 0; i < coins.length; i++) {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coins[i]}/market_chart?vs_currency=usd&days=30`
      );
      const data = await res.json();

      // تاریخ‌ها
      const labels = data.prices.map(p => new Date(p[0]).toLocaleDateString());

      // قیمت‌ها
      const prices = data.prices.map(p => p[1]);

      datasets.push({
        label: coins[i].toUpperCase(),
        data: prices,
        borderColor: colors[i],
        borderWidth: 2,
        fill: false,
        tension: 0.3
      });

      // فقط یک بار labels رو ذخیره می‌کنیم (برای بیت‌کوین)
      if (i === 0) {
        window.chartLabels = labels;
      }
    }

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: window.chartLabels,
        datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          }
        },
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// اجرا
loadMultiLine();## free photos link
 1. https://undraw.co/illustrations
 2. https://storyset.com/

## Object-Oriented Programming
Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.

## There are 4 main principles in OOP, and they are:
### 1.Abstraction
	JavaScript abstraction refers to the concept of hiding complex implementation details 
	and showing only the essential features or functionalities of an object or module to the user 
	also it is the fundamental concept in object-oriented programming.
### 2.Encapsulation
### 3.Inheritance
### 4.Polymorphism

javascript and react js:
 > react component
> 1. Class component
> 2. Fanctional component
## In this Project only use I Javascript



OOP was developed to make code more flexible and easier to maintain.

### class have not Hoisting 

## Function
Functions are one of the fundamental building blocks in JavaScript.
## Function declarations
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

	The name of the function.
	A list of parameters to the function, enclosed in parentheses and separated by commas.
	The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.







	
## JavaScript
JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.
> github readme.md link: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
##  JavaScript Page
1. Products
   > get data from api useing fetch api
   
   > for styling use only css
3. 
   
## Live Demo

[Live Demo](https://jumaqasimim.github.io/Javascript/)





