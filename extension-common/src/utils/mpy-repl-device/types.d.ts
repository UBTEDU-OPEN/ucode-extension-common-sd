/// <reference types="node" />
export declare type promiseResolve = (value: string | PromiseLike<string>) => void;
export declare type promiseReject = (reason: any) => void;
export declare enum ReplMode {
    TERMINAL = "TERMINAL",
    SCRIPT_RAW_MODE = "SCRIPT_RAW_MODE",
    GETVER_WAITING_RESPONSE = "GETVER_WAITING_RESPONSE",
    PUTFILE_WAITING_FIRST_RESPONSE = "PUTFILE_WAITING_FIRST_RESPONSE",
    PUTFILE_WAITING_FINAL_RESPONSE = "PUTFILE_WAITING_FINAL_RESPONSE"
}
export declare enum RawReplState {
    WAITING_FOR_SCRIPT = "WAITING_FOR_SCRIPT",
    SCRIPT_SENT = "SCRIPT_SENT",
    SCRIPT_RECEIVING_RESPONSE = "SCRIPT_RECEIVING_RESPONSE",
    SCRIPT_EXECUTED = "SCRIPT_EXECUTED"
}
export declare enum RawReplReceivingResponseSubState {
    SCRIPT_RECEIVING_OUTPUT = "SCRIPT_RECEIVING_OUTPUT",
    SCRIPT_RECEIVING_ERROR = "SCRIPT_RECEIVING_ERROR",
    SCRIPT_WAITING_FOR_END = "SCRIPT_WAITING_FOR_END"
}
/**
 * 工具内部状态
 */
export interface DeviceState {
    ws: WebSocket | null;
    replMode: ReplMode;
    replPromise: Promise<string> | null;
    replPromiseResolve: promiseResolve | null;
    replPromiseReject: promiseReject | null;
    rawReplState: RawReplState;
    lastCommand: string;
    inputBuffer: string;
    errorBuffer: string;
    broadcastCommandOutputAsTerminalData: boolean;
    dataRawBuffer: Buffer;
    isReadingUntil: boolean;
    readUntilData: Buffer;
    readUntilBuffer: Buffer;
    readUntilTimeout: any;
    readUntilPromise: Promise<string> | null;
    readUntilPromiseResolve: promiseResolve | null;
    readUntilPromiseReject: promiseReject | null;
    lastRunScriptTimeNeeded: number;
    receivingResponseSubState: RawReplReceivingResponseSubState;
    putFileSize: number;
    putFileData: Uint8Array;
    putFileName: string;
    putFileDest: string;
}
/**
 * 文件列表对象属性
 */
export interface FileListEntry {
    filename: string;
    isDir: boolean;
    size: number;
    mTime: number;
    sha256?: string;
}
/**
 * 运行脚本--选项
 */
export interface RunScriptOptions {
    /** Whether unnecessary indentation should be kept in the script (default: `false`) */
    disableDedent?: boolean;
    /** Whether to stay in RAW repl mode after execution. Useful for large scripts that need to get executed piece by piece (uploading files, etc.) (default: `false`) */
    stayInRawRepl?: boolean;
    /** Whether to broadcast the received data to the {@linkCode MicroPythonDevice.onTerminalData} callback while receiving (default: `false`) */
    broadcastOutputAsTerminalData?: boolean;
    /** Whether to resolve the promise before waiting for the result (default: `false`) */
    resolveBeforeResult?: boolean;
    /** 是否在执行代码前先触发GC垃圾回收 */
    runGcCollectBeforeCommand?: boolean;
    /** 开启队列后，当前脚本是否为最高优先级指令。如停止指令，不进入队列，直接发送并清空队列 */
    isTopPriority?: boolean;
}
/**
 * 通信类型
 */
export declare enum DeviceType {
    serialport = "serialport",
    websocket = "websocket"
}
/**
 * 上传文件--选项
 */
export interface PutFileOptions {
    checkIfSimilarBeforeUpload?: boolean;
}
/**
 * 设备信息
 */
export interface BoardInfo {
    sysname: string;
    nodename: string;
    release: string;
    version: string;
    machine: string;
    uniqueId: string;
    memFree: number;
    fsBlockSize: number;
    fsBlocksTotal: number;
    fsBlocksFree: number;
}
/**
 * 设备重置--选项
 */
export interface ResetOptions {
    softReset?: boolean;
    broadcastOutputAsTerminalData?: boolean;
}
