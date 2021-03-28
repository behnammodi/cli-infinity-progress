const CLIInfinityProgress = require('./index');
const { delay } = require('tlence');

(async () => {
  console.log('Test start and stop after 5s')
  const progress1 = new CLIInfinityProgress();
  progress1.start();

  await delay(5000);

  progress1.stop();
})();