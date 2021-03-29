# A infinity progress bar for terminal

![cli-infinity-progress](https://user-images.githubusercontent.com/1549069/112765222-6a7f9a00-9021-11eb-811a-76abcaee1139.gif)

# Install

```bash
npm install cli-infinity-progress
```

# Usage

```js
const CLIInfinityProgress = require('cli-infinity-progress');

const progress = new CLIInfinityProgress();
progress.start();
```

## Methods:

| Name                               | Return | Desc                                      |
| ---------------------------------- | ------ | ----------------------------------------- |
| progress.setBarChar('🚕')          | void   | Set bar char                              |
| progress.setBackgroundChar('-')    | void   | Set background char                       |
| progress.setDirectionRightToLeft() | void   | Progress start from right default is left |
| progress.setDirectionLeftToRight() | void   | Progress start from left                  |
| progress.setSize(60)               | void   | Set progress size default is 60           |
| progress.setBarSize(20)            | void   | Set bar size default is 20                |
| progress.setRefreshRate(1000 / 25) | void   | Set refresh rate default is 1000 / 25     |
| progress.start()                   | void   | Start progress                            |
| progress.remove()                  | void   | Remove progress from terminal             |
| progress.stop()                    | void   | Stop progress on terminal                 |
|                                    |        |                                           |

## Road map:

- add prefix and postfix on progress
- set prefix and postfix color
- set bar color
- add an event when indicator arrived to end
- set bar and background char
- chaining methods
- prevent change some values at running
