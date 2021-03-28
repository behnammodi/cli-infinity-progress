const colors = require('colors');
const cliCursor = require('cli-cursor');

const WIDTH: number = 60;
const FRAME: number = 1000 / 25;
const INDICATOR_SIZE = 20;

interface CLIInfinityProgress {
  currentIndex: number;
  intervalId: null | ReturnType<typeof setTimeout>;
  render(): void;
  start(): void;
  stop(): void;
}

class CLIInfinityProgress implements CLIInfinityProgress {
  currentIndex = 0;

  constructor() {}

  render() {
    let leftSize = this.currentIndex - INDICATOR_SIZE;
    let left = '';
    if (leftSize > 0) {
      left = '🀆'.repeat(leftSize);
    } else {
      leftSize = 0;
    }

    let rightSize = WIDTH - this.currentIndex;
    let right = '';
    if (rightSize > 0) {
      right = '🀆'.repeat(rightSize);
    } else {
      rightSize = 0;
    }

    const dots = '🀫'.repeat(WIDTH - (leftSize + rightSize));

    this.currentIndex++;
    if (this.currentIndex > WIDTH + INDICATOR_SIZE) {
      this.currentIndex = 0;
    }

    // @ts-ignore
    process.stdout.write(
      colors.green(`\r${colors.gray(left)}${dots}${colors.gray(right)}`)
    );
  }

  start() {
    cliCursor.hide();
    process.stdout.write('\n');
    this.intervalId = setInterval(this.render.bind(this), FRAME);
  }

  stop() {
    clearInterval(this.intervalId);
    cliCursor.show();
  }
}

export = CLIInfinityProgress;
