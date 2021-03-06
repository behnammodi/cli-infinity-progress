declare type Color = (content: string) => string;
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
declare enum Direction {
  LeftToRight = 0,
  RightToLeft = 1,
}
declare class CLIInfinityProgress implements CLIInfinityProgress {
  #private;
  private startAnimate;
  private stopAnimate;
  private render;
}
export = CLIInfinityProgress;
