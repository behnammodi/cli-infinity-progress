"use strict";
const colors = require("colors");
const cliCursor = require("cli-cursor");
const WIDTH = 60;
const FRAME = 1000 / 25;
const INDICATOR_SIZE = 20;
class CLIInfinityProgress {
    constructor() {
        this.currentIndex = 0;
    }
    render() {
        let leftSize = this.currentIndex - INDICATOR_SIZE;
        let left = "";
        if (leftSize > 0) {
            left = "🀆".repeat(leftSize);
        }
        else {
            leftSize = 0;
        }
        let rightSize = WIDTH - this.currentIndex;
        let right = "";
        if (rightSize > 0) {
            right = "🀆".repeat(rightSize);
        }
        else {
            rightSize = 0;
        }
        const dots = "🀫".repeat(WIDTH - (leftSize + rightSize));
        this.currentIndex++;
        if (this.currentIndex > WIDTH + INDICATOR_SIZE) {
            this.currentIndex = 0;
        }
        process.stdout.write(colors.green(`\r${colors.gray(left)}${dots}${colors.gray(right)}`));
    }
    start() {
        cliCursor.hide();
        process.stdout.write("\n");
        this.intervalId = setInterval(this.render.bind(this), FRAME);
    }
    stop() {
        clearInterval(this.intervalId);
        cliCursor.show();
    }
}
module.exports = CLIInfinityProgress;
