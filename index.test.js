const CLIInfinityProgress = require('./index');
const { delay } = require('tlence');

(async () => {
  console.log('Test start and stop after 5s');
  const progress = new CLIInfinityProgress();
  progress.start();

  await delay(5000);

  progress.stop();

  console.log('Test start with specific config and remove after 1s');
  progress.setSize(20);
  progress.setBarSize(5);
  progress.setRefreshRate(50);

  progress.start();

  await delay(1000);

  progress.remove();
})();
