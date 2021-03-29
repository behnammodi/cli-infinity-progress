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
| progress.setBarChar('🚕')          | this   | Set bar char                              |
| progress.setBackgroundChar('-')    | this   | Set background char                       |
| progress.setDirectionRightToLeft() | this   | Progress start from right default is left |
| progress.setDirectionLeftToRight() | this   | Progress start from left                  |
| progress.setSize(60)               | this   | Set progress size default is 60           |
| progress.setBarSize(20)            | this   | Set bar size default is 20                |
| progress.setRefreshRate(1000 / 25) | this   | Set refresh rate default is 1000 / 25     |
| progress.start()                   | this   | Start progress                            |
| progress.remove()                  | this   | Remove progress from terminal             |
| progress.stop()                    | this   | Stop progress on terminal                 |
|                                    |        |                                           |

You can call all methods as chaining ex:

```js
progress
  .setBarChar('🚕')
  .setBackgroundChar('_')
  .setDirectionRightToLeft()
  .setSize(14)
  .setBarSize(1)
  .setRefreshRate(100)
  .start();
```

## Road map:

- add prefix and postfix on progress
- set prefix and postfix color
- set bar color
- add an event when indicator arrived to end
- prevent change some values at running
