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
declare enum Direction {
  LeftToRight = 0,
  RightToLeft = 1,
}
declare class CLIInfinityProgress implements CLIInfinityProgress {
  #private;
  private reset;
  private render;
}
export = CLIInfinityProgress;
