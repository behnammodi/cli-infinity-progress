const CLIInfinityProgress = require('./index');
const { delay } = require('tlence');

(async () => {
  console.log('Test start and stop after 4s\n');
  const progress = new CLIInfinityProgress();
  progress.start();
  await delay(4000);
  progress.stop();

  console.log('\nTest start with specific config and remove after 1s\n');
  progress.setSize(20);
  progress.setBarSize(5);
  progress.setRefreshRate(50);
  progress.start();
  await delay(1000);
  progress.remove();

  console.log('\nTest width minimum size and stop after 3s\n');
  progress.setSize(1);
  progress.setBarSize(1);
  progress.setRefreshRate(100);
  progress.start();
  await delay(3000);
  progress.stop();

  console.log('\nTest width custom char\n');
  progress
    .setBarChar('🚕')
    .setBackgroundChar('_')
    .setDirectionRightToLeft()
    .setSize(30)
    .setBarSize(1)
    .setRefreshRate(100)
    .start();

  await delay(3000);
  progress.stop();

  console.log('\n');

  console.log('\nTest with header and footer and stop after 2s\n');
  const progressWithHeaderAndFooter = new CLIInfinityProgress();
  progressWithHeaderAndFooter
    .setHeader('Loading ...')
    .setFooter('Please be patient.')
    .start();
  await delay(2000);
  progressWithHeaderAndFooter.stop();
})();
