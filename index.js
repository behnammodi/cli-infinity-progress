"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _size, _barSize, _refreshRate, _currentIndex, _intervalId;
const colors = require('colors');
const cliCursor = require('cli-cursor');
const write = (content) => void process.stdout.write(content);
class CLIInfinityProgress {
    constructor() {
        _size.set(this, 60);
        _barSize.set(this, 20);
        _refreshRate.set(this, 1000 / 25);
        _currentIndex.set(this, 0);
        _intervalId.set(this, void 0);
    }
    setSize(size = 60) {
        __classPrivateFieldSet(this, _size, size);
    }
    setBarSize(size = 20) {
        __classPrivateFieldSet(this, _barSize, size);
    }
    setRefreshRate(rate = 1000 / 25) {
        __classPrivateFieldSet(this, _refreshRate, rate);
    }
    start() {
        cliCursor.hide();
        __classPrivateFieldSet(this, _currentIndex, 0);
        clearInterval(__classPrivateFieldGet(this, _intervalId));
        __classPrivateFieldSet(this, _intervalId, setInterval(this.render.bind(this), __classPrivateFieldGet(this, _refreshRate)));
    }
    remove() {
        const clean = true;
        this.reset(clean);
    }
    stop() {
        this.reset();
    }
    reset(clean = false) {
        clearInterval(__classPrivateFieldGet(this, _intervalId));
        write(clean ? '\r' : '\n');
        cliCursor.show();
    }
    render() {
        let leftSize = __classPrivateFieldGet(this, _currentIndex) - __classPrivateFieldGet(this, _barSize);
        let left = '';
        if (leftSize > 0) {
            left = '🀆'.repeat(leftSize);
        }
        else {
            leftSize = 0;
        }
        let rightSize = __classPrivateFieldGet(this, _size) - __classPrivateFieldGet(this, _currentIndex);
        let right = '';
        if (rightSize > 0) {
            right = '🀆'.repeat(rightSize);
        }
        else {
            rightSize = 0;
        }
        const dots = '🀫'.repeat(__classPrivateFieldGet(this, _size) - (leftSize + rightSize));
        __classPrivateFieldSet(this, _currentIndex, +__classPrivateFieldGet(this, _currentIndex) + 1);
        if (__classPrivateFieldGet(this, _currentIndex) > __classPrivateFieldGet(this, _size) + __classPrivateFieldGet(this, _barSize)) {
            __classPrivateFieldSet(this, _currentIndex, 0);
        }
        write(colors.green(`\r${colors.gray(left)}${dots}${colors.gray(right)}`));
    }
}
_size = new WeakMap(), _barSize = new WeakMap(), _refreshRate = new WeakMap(), _currentIndex = new WeakMap(), _intervalId = new WeakMap();
module.exports = CLIInfinityProgress;
