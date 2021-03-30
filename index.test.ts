const CLIInfinityProgress = require('./index');
const colors = require('./colors');
const { delay } = require('tlence');

(async () => {
  const progress = new CLIInfinityProgress();

  console.log('Test start and stop after 4s\n');
  progress.start();
  await delay(4000);
  progress.stop();

  console.log('\nTest start with specific config and remove after 1s\n');
  progress
    .setBarColor(colors.green)
    .setBackgroundColor(colors.yellow)
    .setSize(20)
    .setBarSize(5)
    .setRefreshRate(50)
    .start();
  await delay(1000);
  progress.remove();

  console.log('\nTest width minimum size and stop after 3s\n');
  progress
    .setBarColor(/* reset color */)
    .setBackgroundColor(/* reset color */)
    .setSize(1)
    .setBarSize(1)
    .setRefreshRate(100)
    .start();
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

  console.log('\nTest with header and footer and stop after 2s\n');
  const progressWithHeaderAndFooter = new CLIInfinityProgress();
  progressWithHeaderAndFooter
    .setHeader('Loading ...')
    .setFooter('Please be patient.')
    .start();
  await delay(2000);
  progressWithHeaderAndFooter.stop();

  console.log(
    '\nTest start and pause after 2s and resume after 2s and then stop after 2s'
  );
  const pauseableProcess = new CLIInfinityProgress();
  pauseableProcess.start();
  await delay(2000);
  pauseableProcess.pause();
  await delay(2000);
  pauseableProcess.resume();
  await delay(2000);
  pauseableProcess.stop();
})();
