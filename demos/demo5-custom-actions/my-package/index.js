/**
 * Sample package for GitHub Packages demo
 */

function greet(name) {
  return `Hello, ${name}! This is from a GitHub Package.`;
}

function calculate(a, b) {
  return {
    sum: a + b,
    product: a * b,
    difference: a - b
  };
}

module.exports = {
  greet,
  calculate
};
