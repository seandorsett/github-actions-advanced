const pkg = require('./index.js');

console.log('Testing package...');

// Test greet function
const greeting = pkg.greet('GitHub');
console.log(`  ✓ greet(): ${greeting}`);

// Test calculate function
const result = pkg.calculate(10, 5);
console.log(`  ✓ calculate(): sum=${result.sum}, product=${result.product}`);

console.log('All package tests passed!');
