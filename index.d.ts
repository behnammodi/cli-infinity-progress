interface CLIInfinityProgress {
    currentIndex: number;
    intervalId: null | ReturnType<typeof setTimeout>;
    render(): void;
    start(): void;
    stop(): void;
}
declare class CLIInfinityProgress implements CLIInfinityProgress {
    currentIndex: number;
    constructor();
}
export = CLIInfinityProgress;
