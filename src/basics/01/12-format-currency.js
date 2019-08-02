/**
 * Currency Formatting
 *
 * The business has informed you that prices must have 2 decimal places
 * They must also start with the currency symbol
 * Write a function that transforms numbers into the format £0.00
 */

// You are allowed to change only this function
function formatCurrency(n) {
  return "$" + n.toFixed(2);
}

function calculateSalesTax(price) {
  return price * 0.2;
}

const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product); // 'Product: You don't know JS'
console.log("Price: " + formatCurrency(price)); // 'Price: 19.99'
console.log("Sales tax: " + formatCurrency(salesTax)); // 'Sales tax: 4.00'
console.log("Total: " + formatCurrency(price + salesTax)); // 'Total: 23.99'
