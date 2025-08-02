
// 1. Functional Programming Concepts
function multiply(a, b) {
  return a * b;
}
const numbers = [2, 4];
const updatedNumbers = [...numbers, 6];
console.log("Original:", numbers);        // [2, 4]
console.log("Updated:", updatedNumbers);  // [2, 4, 6]

// 2. Event Loop and Asynchronous JavaScript
console.log('First');
setTimeout(() => {
  console.log('Third - setTimeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Second - Promise');
});
console.log('Last');

// 3. JavaScript Data Types & Type Coercion
console.log(typeof false);        // boolean
console.log(typeof undefined);    // undefined
console.log(0 == '0');            // true
console.log(0 === '0');           // false
console.log(Boolean(""));         // false
console.log(Boolean("hello"));    // true

// 4. Error Handling (try/catch/finally)
try {
  let result = riskyOperation();
} catch (error) {
  console.log("Caught Error:", error.message);
} finally {
  console.log("Cleanup done");
}
function riskyOperation() {
  throw new Error("Something broke!");
}

// 5. Object Property Shorthand & Computed Property Names
const brand = "Nike", price = 999;
const product = { brand, price };
console.log(product); // { brand: "Nike", price: 999 }

const keyName = "discount";
const saleItem = {
  [keyName]: "10%"
};
console.log(saleItem); // { discount: "10%" }

// 6. Spread and Rest Operators in Depth
const food1 = ["Pizza", "Burger"];
const food2 = ["Pasta", "Fries"];
const menu = [...food1, ...food2];
console.log(menu); // ["Pizza", "Burger", "Pasta", "Fries"]

function multiplyAll(multiplier, ...nums) {
  return nums.map(n => n * multiplier);
}
console.log(multiplyAll(2, 1, 2, 3)); // [2, 4, 6]

// 7. Template Literals & Tagged Templates
const name = "Supraja";
const greeting = `Hi ${name},\\nWelcome to JavaScript!`;
console.log(greeting);

function emphasize(strings, ...values) {
  return strings.reduce((acc, str, i) =>
    acc + str + (values[i] ? `**${values[i].toUpperCase()}**` : ''), '');
}
const result = emphasize`Learning ${'javascript'} is really ${'fun'}`;
console.log(result); // Learning **JAVASCRIPT** is really **FUN**
