const CLIInfinityProgress = require('./index');

(async () => {
  console.log('This is just a demo of CLIInfinityProgress');
  const progress = new CLIInfinityProgress();

  console.log('\nLoading ...');
  progress
    .setSize(30)
    .setBarSize(10)
    .setRefreshRate(1000 / 25)
    .start();
})();
