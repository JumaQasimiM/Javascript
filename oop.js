// Creating a constructor function

// for the abstract class Shape
function Shape() {
    this.shapeName = &quot;shapeName&quot;;
    throw new Error(`You cannot create an 
    instance of Abstract Class`);
}

Shape.prototype.display = function () {
    return &quot;Shape is: &quot; + this.shapeName;
};

// Creating a constructor function
// for the concrete class Triangle
function Triangle(shapeName) {
    this.shapeName = shapeName;
}

// Creating an object without 
// using the function constructor
Triangle.prototype = Object
    .create(Shape.prototype);

// Creating an instance of the Triangle class
let triangle = new Triangle(&quot;Equilateral&quot;);
console.log(triangle.display());