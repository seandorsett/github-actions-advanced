// Simple test file for matrix build demo
console.log('Running tests...');
console.log(`Node version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);

// Simulate some test execution
const testCases = [
  { name: 'Test 1: Basic functionality', expected: true, actual: true },
  { name: 'Test 2: Edge cases', expected: 42, actual: 42 },
  { name: 'Test 3: Error handling', expected: 'success', actual: 'success' }
];

let passed = 0;
let failed = 0;

testCases.forEach((test, index) => {
  const result = test.expected === test.actual ? '✓ PASS' : '✗ FAIL';
  console.log(`  ${result} - ${test.name}`);
  
  if (test.expected === test.actual) {
    passed++;
  } else {
    failed++;
  }
});

console.log(`\nResults: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}

console.log('All tests passed! ✓');
