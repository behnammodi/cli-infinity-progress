interface CLIInfinityProgress {
    size: number;
    barSize: number;
    refreshRate: number;
    currentIndex: number;
    intervalId: null | ReturnType<typeof setTimeout>;
    setSize(size: number): void;
    setBarSize(size: number): void;
    setRefreshRate(rate: number): void;
    start(): void;
    remove(): void;
    stop(): void;
}
declare class CLIInfinityProgress implements CLIInfinityProgress {
    #private;
    private reset;
    private render;
}
export = CLIInfinityProgress;
