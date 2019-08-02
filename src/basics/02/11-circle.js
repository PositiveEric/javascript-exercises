function Circle(radius) {
  this.radius = radius;
  this.area = function() {};
  this.perimeter = function() {};
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected result: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected result: Perimeter = 18.85
