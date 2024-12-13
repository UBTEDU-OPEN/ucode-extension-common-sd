/// <reference types="node" />
import type { QueueConstructorType } from '@ubt/ucode-utils/dist/queue';
import { Disposable } from '@ubt/typedevent';
import { DeviceState, DeviceType, RunScriptOptions, FileListEntry, PutFileOptions, ResetOptions, BoardInfo } from './types';
export * from './python-scripts';
export * from './utils';
export * from './errors';
export * from './types';
export interface CommonConfig {
    send: (msg: string | Buffer) => void;
    queueConfig?: QueueConstructorType;
}
export interface SerialportDeviceConfig extends CommonConfig {
    type: DeviceType.serialport;
    onData?: (listener: (data: string | Buffer) => void) => Disposable;
}
export interface WebsocketDeviceConfig extends CommonConfig {
    type: DeviceType.websocket;
    ws: WebSocket;
}
/**
 * MicroPython repl工具。依赖设备通信对象。支持运行脚本、文件操作、信息获取、设备重置、触发GC垃圾回收等
 */
export declare class MicroPythonReplDevice {
    private _device;
    private _replHandler?;
    private state;
    /**
     * Callback to receive terminal (REPL) data
     *
     * ```typescript
     * microPythonReplFs.onTerminalData = (data) => process.stdout.write(data)
     * ```
     */
    onTerminalData?: (data: string) => void;
    /**
     * 使用队列
     */
    private _queue?;
    private _dataListenerDisposer?;
    constructor(_device: SerialportDeviceConfig | WebsocketDeviceConfig);
    private get defaultState();
    /**
     * 清空缓存、队列，停止任务
     */
    reset(): void;
    private _startQueue;
    private _stopQueue;
    /**
     * 内部发送函数，使用队列，或直接发送。
     * @param data 数据
     * @param isTopPriority 是否为最高优先级指令。如停止指令，不进入队列，直接发送并清空队列
     */
    private _send;
    onConnected(): void;
    onDisconnected(): void;
    onWebSocketError: (err: Event) => void;
    onWebSocketClose: () => void;
    isTerminalMode(): boolean;
    /**
     * Get the state object. Mostly used for debugging purposes.
     */
    getState(): DeviceState;
    private _sendData;
    private _dataListener;
    /**
     * Handle incoming data
     */
    private _handleProtocolData;
    /**
     * Handle special WebREPL only commands data
     *
     * getver, putfile, getfile
     */
    private _handleProtocolSpecialCommandsOutput;
    handleWebsocketMessage: (event: MessageEvent) => void;
    private _readUntil;
    private _clearBuffer;
    private _enterRawRepl;
    private _exitRawRepl;
    private _createReplPromise;
    /**
     * 运行 micropython 脚本
     */
    runScript(script: string, options?: RunScriptOptions): Promise<string>;
    /**
     * GET_VER webrepl command. Returns the micropython version.
     * Only works with network connections, not with serial.
     */
    getVerForWebRepl(): Promise<string>;
    /**
     * 扫描指定路径
     */
    listFiles(directory?: string, options?: {
        recursive: boolean;
        includeSha256: boolean;
    }): Promise<FileListEntry[]>;
    /**
     * 获取文件内容
     *
     * @returns {Buffer} contents of the file in a Buffer
     * @param filename filename of file to download
     * @throws {ScriptExecutionError} if not found: "`OSError: [Errno 2] ENOENT`"
     */
    getFile(filename: string): Promise<Buffer>;
    /**
     * 获取文件内容的 SHA256 值
     *
     * @param filename filename of target file
     * @returns sha256 hash, hexlified
     * @throws {ScriptExecutionError} if not found: "`OSError: [Errno 2] ENOENT`"
     */
    getFileHash(filename: string): Promise<string>;
    /**
     * 获取文件/目录信息
     * @param path
     * @returns
     */
    stat(path: string): Promise<{
        exists: boolean;
        isDir: boolean;
        size: number;
    }>;
    /**
     * 创建目录
     * @param dirname
     * @throws {ScriptExecutionError}
     */
    mkdir(dirname: string): Promise<boolean>;
    /**
     * 检查文件是否相同，包括内容
     * Does not work in browser.
     *
     * - If filesize is different, then file is different
     * - If filesize equal then compare sha256 hash
     *
     * This is a helper for bulk uploading directories, but only if they have changed.
     *
     * @throws {ScriptExecutionError} if not found: "OSError: [Errno 2] ENOENT"
     */
    isFileTheSame(filename: string, data: Buffer): Promise<boolean>;
    /**
     * 将数据传到设备，另存为文件
     *
     * We break the buffer into multiple chunks, and execute a raw repl command for each of them
     * in order to not fill up the device RAM.
     *
     * See also:
     * - https://github.com/dhylands/rshell/blob/master/rshell/main.py#L1079
     * - https://github.com/scientifichackers/ampy/blob/master/ampy/files.py#L209
     *
     * @param targetFilename
     * @param data
     */
    putFile(targetFilename: string, data: Buffer, options?: PutFileOptions): Promise<boolean>;
    /**
     * 移除文件、目录。可选参数 recursive，递归每一个文件/目录
     *
     * @param path
     * @param recursive default: false
     *
     * @throws {ScriptExecutionError} if not found: "OSError: [Errno 2] ENOENT"
     * @throws {ScriptExecutionError} if directory not empty: "OSError: 39"
     */
    remove(path: string, recursive?: boolean): Promise<void>;
    /**
     * 重命名文件、目录
     *
     * @throws {ScriptExecutionError} if not found: "OSError: [Errno 2] ENOENT"
     * @throws {ScriptExecutionError} if directory not empty: "OSError: 39"
     */
    rename(oldPath: string, newPath: string): Promise<void>;
    /**
     * 重置设备
     */
    resetDevice(options?: ResetOptions, timeout?: number): Promise<void>;
    /**
     * 获取设备信息
     *
     * ```typescript
     * {
     *   sysname: 'esp32',
     *   nodename: 'esp32',
     *   release: '1.13.0',
     *   version: 'v1.13 on 2020-09-02',
     *   machine: 'ESP32 module with ESP32',
     *   uniqueId: 'c44f3312f529',
     *   memFree: 108736,
     *   fsBlockSize: 4096,
     *   fsBlocksTotal: 512,
     *   fsBlocksFree: 438
     * }
     * ```
     */
    getBoardInfo(): Promise<BoardInfo>;
    /**
     * 触发gc垃圾回收
     */
    gcCollect(): Promise<void>;
}
