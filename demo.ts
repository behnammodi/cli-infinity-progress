const CLIInfinityProgress = require('./index');
const colors = require('./colors');

const version = process.argv.find((value) => value.length === 1) || '1';

if (version === '1') {
  (async () => {
    console.log('This is just a demo of CLIInfinityProgress');
    const progress = new CLIInfinityProgress();

    progress
      .setHeader('\nLoading ...')
      .setFooter('Please be patient.')
      .setSize(30)
      .setBarSize(10)
      .setRefreshRate(1000 / 25)
      .start();

    setTimeout(() => {
      progress.setFooter('We trying to load content.');
    }, 3000);
  })();
} else if (version === '2') {
  (async () => {
    console.log('This is just a demo of CLIInfinityProgress');
    const progress = new CLIInfinityProgress();

    console.log('\n');

    progress
      .setBackgroundColor(colors.yellow)
      .setHeader('Loading ...')
      .setFooter('\nPlease be patient.')
      .setBarChar('🚕')
      .setBackgroundChar('_')
      .setDirectionRightToLeft()
      .setSize(32)
      .setBarSize(1)
      .setRefreshRate(100)
      .start();

    setTimeout(() => progress.setFooter('\nWoo, Cab is coming.'), 3000);
  })();
} else {
  console.log(`We can not find version ${version} of demo`);
}
