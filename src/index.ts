const colors = require('colors');
const cliCursor = require('cli-cursor');
interface CLIInfinityProgress {
  size: number;
  barSize: number;
  refreshRate: number;
  currentIndex: number;
  intervalId: null | ReturnType<typeof setTimeout>;
  setSize(size: number): void;
  setBarSize(size: number): void;
  setRefreshRate(rate: number): void;
  start(): void;
  remove(): void;
  stop(): void;
}

const write = (content: string): void => void process.stdout.write(content);

class CLIInfinityProgress implements CLIInfinityProgress {
  #size = 60;
  #barSize = 20;
  #refreshRate = 1000 / 25;
  #currentIndex = 0;
  #intervalId;

  setSize(size = 60) {
    if (size < 1) {
      throw 'setSize: size must be greater than 0';
    }
    this.#size = size;
  }

  setBarSize(size = 20) {
    if (size < 1) {
      throw 'setBarSize: size must be greater than 0';
    }
    this.#barSize = size;
  }

  setRefreshRate(rate = 1000 / 25) {
    if (rate < 1000 / 60) {
      throw `setRefreshRate: rate must be greater than ${1000 / 60}`;
    }
    this.#refreshRate = rate;
  }

  start() {
    cliCursor.hide();
    this.#currentIndex = 0;
    clearInterval(this.#intervalId);
    this.#intervalId = setInterval(this.render.bind(this), this.#refreshRate);
  }

  remove() {
    const clean = true;
    this.reset(clean);
  }

  stop() {
    this.reset();
  }

  private reset(clean: boolean = false) {
    clearInterval(this.#intervalId);
    write(clean ? '\r \n' : '\n');
    cliCursor.show();
  }

  private render() {
    let leftSize = this.#currentIndex - this.#barSize;
    let left = '';
    if (leftSize > 0) {
      left = '🀆'.repeat(leftSize);
    } else {
      leftSize = 0;
    }

    let rightSize = this.#size - this.#currentIndex;
    let right = '';
    if (rightSize > 0) {
      right = '🀆'.repeat(rightSize);
    } else {
      rightSize = 0;
    }

    const dots = '🀫'.repeat(this.#size - (leftSize + rightSize));

    this.#currentIndex++;
    if (this.#currentIndex > this.#size + this.#barSize) {
      this.#currentIndex = 0;
    }

    write(colors.green(`\r${colors.gray(left)}${dots}${colors.gray(right)}`));
  }
}

export = CLIInfinityProgress;
