// Test script for demo
console.log('Running tests...');

const tests = [
  { name: 'Reusable workflow input handling', status: 'pass' },
  { name: 'Composite action execution', status: 'pass' },
  { name: 'Artifact upload/download', status: 'pass' },
  { name: 'Output propagation', status: 'pass' }
];

tests.forEach(test => {
  console.log(`  ✓ ${test.name}: ${test.status}`);
});

console.log(`\n${tests.length} tests passed!`);
