/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 20% of the price of the product
 */

// You are allowed to change only this function
function calculateSalesTax() {}

const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + price);
console.log("Sales tax: £" + salesTax);
console.log("Total: £" + (price + salesTax));
