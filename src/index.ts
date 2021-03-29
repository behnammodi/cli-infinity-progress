const colors = require('colors/safe');
const logUpdate = require('log-update');
interface CLIInfinityProgress {
  size: number;
  barSize: number;
  refreshRate: number;
  currentIndex: number;
  intervalId: null | ReturnType<typeof setTimeout>;
  barChar: string;
  backgroundChar: string;
  direction: Direction;
  setBarChar(char: string): CLIInfinityProgress;
  setBackgroundChar(char: string): CLIInfinityProgress;
  setDirectionRightToLeft(): CLIInfinityProgress;
  setDirectionLeftToRight(): CLIInfinityProgress;
  setSize(size: number): CLIInfinityProgress;
  setBarSize(size: number): CLIInfinityProgress;
  setRefreshRate(rate: number): CLIInfinityProgress;
  start(): CLIInfinityProgress;
  remove(): CLIInfinityProgress;
  stop(): CLIInfinityProgress;
}

enum Direction {
  LeftToRight,
  RightToLeft,
}

const log = logUpdate.create(process.stdout, { showCursor: false });

class CLIInfinityProgress implements CLIInfinityProgress {
  #size = 60;
  #barSize = 20;
  #refreshRate = 1000 / 25;
  #currentIndex = 0;
  #intervalId;
  #barChar = '🀫';
  #backgroundChar = '🀆';
  #direction = Direction.LeftToRight;

  setBarChar(char = this.#barChar) {
    this.#barChar = char;
    return this;
  }

  setBackgroundChar(char = this.#backgroundChar) {
    this.#backgroundChar = char;
    return this;
  }

  setDirectionRightToLeft() {
    this.#direction = Direction.RightToLeft;
    return this;
  }

  setDirectionLeftToRight() {
    this.#direction = Direction.LeftToRight;
    return this;
  }

  setSize(size = 60) {
    if (size < 1) {
      throw 'setSize: size must be greater than 0';
    }
    this.#size = size;
    return this;
  }

  setBarSize(size = 20) {
    if (size < 1) {
      throw 'setBarSize: size must be greater than 0';
    }
    this.#barSize = size;
    return this;
  }

  setRefreshRate(rate = 1000 / 25) {
    if (rate < 1000 / 60) {
      throw `setRefreshRate: rate must be greater than ${1000 / 60}`;
    }
    this.#refreshRate = rate;
    return this;
  }

  start() {
    this.#currentIndex = 0;
    clearInterval(this.#intervalId);
    this.#intervalId = setInterval(this.render.bind(this), this.#refreshRate);
    return this;
  }

  remove() {
    const clean = true;
    this.reset(clean);
    return this;
  }

  stop() {
    this.reset();
    return this;
  }

  private reset(clean: boolean = false) {
    clearInterval(this.#intervalId);
    if (clean) {
      log.clear();
    } else {
      log.done();
    }
  }

  private render() {
    let leftSize =
      this.#direction === Direction.LeftToRight
        ? this.#currentIndex - this.#barSize
        : this.#size - this.#currentIndex;

    let left = '';
    if (leftSize > 0) {
      left = this.#backgroundChar.repeat(leftSize);
    } else {
      leftSize = 0;
    }

    let rightSize =
      this.#direction === Direction.LeftToRight
        ? this.#size - this.#currentIndex
        : this.#currentIndex - this.#barSize;

    let right = '';
    if (rightSize > 0) {
      right = this.#backgroundChar.repeat(rightSize);
    } else {
      rightSize = 0;
    }

    const dots = this.#barChar.repeat(this.#size - (leftSize + rightSize));

    this.#currentIndex++;
    if (this.#currentIndex > this.#size + this.#barSize) {
      this.#currentIndex = 0;
    }

    log(`\r${colors.gray(left)}${colors.green(dots)}${colors.gray(right)}`);
  }
}

export = CLIInfinityProgress;
