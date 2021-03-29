## A infinity progress bar for terminal

![cli-infinity-progress](https://user-images.githubusercontent.com/1549069/112765222-6a7f9a00-9021-11eb-811a-76abcaee1139.gif)

## Also customizable

You can add header, footer and change every time
![cli-infinity-progress-3](https://user-images.githubusercontent.com/1549069/112822071-b15ea580-909c-11eb-8b7e-cd4e2a2fbbeb.gif)

## Install

```bash
npm install cli-infinity-progress
```

## Usage

```js
const CLIInfinityProgress = require('cli-infinity-progress');

const progress = new CLIInfinityProgress();
progress.start();
```

## Methods:

setHeader(content: string): CLIInfinityProgress;
setFooter(content: string): CLIInfinityProgress;

| Name                       | Return | Desc                                                        |
| -------------------------- | ------ | ----------------------------------------------------------- |
| .setHeader('Header')       | this   | Set header on top of progress. you can update every time    |
| .setFooter('Footer')       | this   | Set footer on bottom of progress. you can update every time |
| .setBarChar('🚕')          | this   | Set bar char                                                |
| .setBackgroundChar('-')    | this   | Set background char                                         |
| .setDirectionRightToLeft() | this   | Progress start from right default is left                   |
| .setDirectionLeftToRight() | this   | Progress start from left                                    |
| .setSize(30)               | this   | Set progress size default is 60                             |
| .setBarSize(5)             | this   | Set bar size default is 20                                  |
| .setRefreshRate(80)        | this   | Set refresh rate default is (1000 / 25)ms                   |
| .start()                   | this   | Start progress                                              |
| .remove()                  | this   | Remove progress from terminal                               |
| .stop()                    | this   | Stop progress on terminal                                   |

You can call all methods as chaining ex:

```js
progress
  .setHeader('Loading ...')
  .setFooter('\nPlease be patient, Cab is coming.')
  .setBarChar('🚕')
  .setBackgroundChar('_')
  .setDirectionRightToLeft()
  .setSize(32)
  .setBarSize(1)
  .setRefreshRate(100)
  .start();
```

Result:

![cli-infinity-progress-4](https://user-images.githubusercontent.com/1549069/112822095-b885b380-909c-11eb-82d0-3e169eb4b554.gif)

## Road map:

- add prefix and postfix on progress
- set prefix and postfix color
- set bar color
- set background color
- add an event when indicator arrived to end
- prevent change some values at running
- decrease size
- add pause and resume methods
- add specific loop count
- add color for footer and header
