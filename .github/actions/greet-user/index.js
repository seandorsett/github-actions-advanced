const core = require('@actions/core');

try {
  // Get inputs
  const nameToGreet = core.getInput('who-to-greet');
  const greetingStyle = core.getInput('greeting-style');
  
  // Generate greeting based on style
  let greeting;
  switch(greetingStyle) {
    case 'formal':
      greeting = `Good day, ${nameToGreet}. It is a pleasure to meet you.`;
      break;
    case 'enthusiastic':
      greeting = `Hello ${nameToGreet}! 🎉 So excited to see you here!`;
      break;
    case 'casual':
    default:
      greeting = `Hey ${nameToGreet}, what's up?`;
      break;
  }
  
  console.log(greeting);
  
  // Get current time
  const time = new Date().toTimeString();
  
  // Set outputs
  core.setOutput('greeting', greeting);
  core.setOutput('time', time);
  
  // Log info
  core.info(`Generated greeting for ${nameToGreet} at ${time}`);
  
} catch (error) {
  core.setFailed(error.message);
}
