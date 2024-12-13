/// <reference types="node" />
import { EventEmitter } from 'events';
export declare enum replModel {
    NO_DISPLAY = 1,
    DISPLAY = 2,
    CANCEL = 3,
    RESTART = 4,
    PASTE = 5,
    ENTER = 13
}
declare type onDataResponse = (data: string) => void;
declare type sendMsg = (data: string) => void;
export declare class ReplModelHandler extends EventEmitter {
    protected send: sendMsg;
    onData: onDataResponse;
    constructor(send: sendMsg);
    /**
     * 发送并等待, 适合一问一答的协议类型
     * @param {string} data 发送的数据
     * @param {number} timeout
     * @returns {Promise<string>}
     */
    sendAndWaitRepl(data: string, timeout?: number): Promise<unknown>;
    /**
     * 切换repl模式，发送响应的指令。
     * @param {replModel} model 指令字节数据，不填默认为 0x0d，等同 replModel.ENTER。
     * @returns {Promise<void>}
     */
    enterReplMode(model?: replModel): Promise<void>;
    /**
     * 设置为Ready状态
     * @returns {Promise<boolean>}
     */
    setReady(): Promise<boolean>;
    /**
     * 是否Ready状态
     * @returns {Promise<boolean>}
     */
    isReady(): Promise<boolean>;
    /**
     * 错误处理
     * @param {string} respData 回应的数据
     */
    handleReplError(respData: string): void;
}
export {};
