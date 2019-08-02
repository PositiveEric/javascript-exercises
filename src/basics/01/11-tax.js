/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 20% of the price of the product
 */

// You are allowed to change only this function
function calculateSalesTax() {
  return price * 0.2;
}

const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product); // 'Product: You don't know JS'
console.log("Price: £" + price); // 'Price: £19.99'
console.log("Sales tax: £" + salesTax); // 'Sales tax: £3.9979999999999998'
console.log("Total: £" + (price + salesTax)); // 'Total: £23.988'
