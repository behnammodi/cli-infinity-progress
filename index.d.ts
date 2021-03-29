interface CLIInfinityProgress {
  size: number;
  barSize: number;
  refreshRate: number;
  currentIndex: number;
  intervalId: null | ReturnType<typeof setTimeout>;
  barChar: string;
  backgroundChar: string;
  direction: Direction;
  setBarChar(char: string): void;
  setBackgroundChar(char: string): void;
  setDirectionRightToLeft(): void;
  setDirectionLeftToRight(): void;
  setSize(size: number): void;
  setBarSize(size: number): void;
  setRefreshRate(rate: number): void;
  start(): void;
  remove(): void;
  stop(): void;
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
