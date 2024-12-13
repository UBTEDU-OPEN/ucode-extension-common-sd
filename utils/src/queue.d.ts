export declare type QueueConstructorType = {
    enable: boolean;
    length?: number;
    interval?: number;
};
export declare class DataQueue<T> {
    private dataQueue;
    private sendInterval?;
    private _options;
    private _dataEvent;
    /**
     * 最大队列长度
     */
    static get MAX_QUEUE_LENGTH(): number;
    /**
     * 队列定时器间隔时长
     */
    static get QUEUE_INTERVAL(): number;
    /**
     * 数据出队事件
     */
    /**
     *
     * @param {Object} options length: 队列长度，interval：发送间隔时长
     */
    constructor(options: QueueConstructorType);
    /**
     * 初始化定时器和队列
     */
    start(): void;
    /**
     * 定时器，定时将数据出队列
     */
    private _stepQueue;
    /**
     * 入队
     * @param {*} msg 数据
     */
    enqueue(msg: T): void;
    /**
     * 停止队列计时器
     */
    stop(): void;
    clean(): void;
    onDataShift(listener: (data: T) => void): import("@ubt/typedevent").Disposable;
    isStarted(): boolean;
}
export default DataQueue;
