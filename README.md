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

| Name                       | Return | Desc                                      |
| -------------------------- | ------ | ----------------------------------------- |
| .setBarChar('🚕')          | this   | Set bar char                              |
| .setBackgroundChar('-')    | this   | Set background char                       |
| .setDirectionRightToLeft() | this   | Progress start from right default is left |
| .setDirectionLeftToRight() | this   | Progress start from left                  |
| .setSize(60)               | this   | Set progress size default is 60           |
| .setBarSize(20)            | this   | Set bar size default is 20                |
| .setRefreshRate(1000 / 25) | this   | Set refresh rate default is 1000 / 25     |
| .start()                   | this   | Start progress                            |
| .remove()                  | this   | Remove progress from terminal             |
| .stop()                    | this   | Stop progress on terminal                 |



You can call all methods as chaining ex:

```js
progress
  .setBarChar('🚕')
  .setBackgroundChar('_')
  .setDirectionRightToLeft()
  .setSize(30)
  .setBarSize(1)
  .setRefreshRate(100)
  .start();
```
Result:

![cli-infinity-progress-2](https://user-images.githubusercontent.com/1549069/112776419-db8c7500-9054-11eb-9459-c765db51746c.gif)

## Road map:

- add prefix and postfix on progress
- set prefix and postfix color
- set bar color
- add an event when indicator arrived to end
- prevent change some values at running
