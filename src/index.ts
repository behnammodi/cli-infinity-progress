const colors = require('colors/safe');
const logUpdate = require('log-update');

// TODO: we can use color own type
type Color = (content: string) => string;

interface CLIInfinityProgress {
  barColor: Color;
  backgroundColor: Color;
  size: number;
  barSize: number;
  refreshRate: number;
  currentIndex: number;
  intervalId: null | ReturnType<typeof setTimeout>;
  barChar: string;
  backgroundChar: string;
  direction: Direction;
  header: string;
  footer: string;
  setBarColor(color: Color): CLIInfinityProgress;
  setBackgroundColor(color: Color): CLIInfinityProgress;
  setHeader(content: string): CLIInfinityProgress;
  setFooter(content: string): CLIInfinityProgress;
  setBarChar(char: string): CLIInfinityProgress;
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
  pause(): CLIInfinityProgress;
  resume(): CLIInfinityProgress;
}

enum Direction {
  LeftToRight,
  RightToLeft,
}

const log = logUpdate.create(process.stdout, { showCursor: false });

const NEW_LINE = '\n';

class CLIInfinityProgress implements CLIInfinityProgress {
  #barColor = colors.green;
  #backgroundColor = colors.gray;
  #size = 60;
  #barSize = 20;
  #refreshRate = 1000 / 25;
  #currentIndex = 0;
  #intervalId;
  #barChar = '🀫';
  #backgroundChar = '🀆';
  #direction = Direction.LeftToRight;
  #header;
  #footer;

  setBarColor(color = colors.green) {
    this.#barColor = color;
    return this;
  }

  setBackgroundColor(color = colors.gray) {
    this.#backgroundColor = color;
    return this;
  }

  setHeader(content) {
    this.#header = content;
    return this;
  }

  setFooter(content) {
    this.#footer = content;
    return this;
  }

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
    this.stopAnimate();
    this.startAnimate();
    return this;
  }

  remove() {
    this.stopAnimate();
    log.clear();
    return this;
  }

  stop() {
    this.stopAnimate();
    log.done();
    return this;
  }

  pause() {
    this.stopAnimate();
    return this;
  }

  resume() {
    this.startAnimate();
    return this;
  }

  private startAnimate() {
    this.#intervalId = setInterval(this.render.bind(this), this.#refreshRate);
  }

  private stopAnimate() {
    clearInterval(this.#intervalId);
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

    let content = '';

    if (this.#header) {
      content += this.#header + NEW_LINE;
    }

    content += `${this.#backgroundColor(left)}${this.#barColor(
      dots
    )}${this.#backgroundColor(right)}`;

    if (this.#footer) {
      content += NEW_LINE + this.#footer;
    }

    log(content);
  }
}

export = CLIInfinityProgress;
