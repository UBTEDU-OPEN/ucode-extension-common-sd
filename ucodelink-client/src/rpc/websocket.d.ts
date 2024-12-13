/// <reference types="node" />
import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from './base';
declare enum SOCKETTYPE {
    WEBSOCKET = 0,
    RPC = 1
}
declare type WriteCallback = (error: Error | null | undefined, bytesWritten?: number) => void;
declare type WriteData = string | ArrayBuffer | Blob | ArrayBufferView | Buffer;
export declare class WebsocketRPCAdapter extends BaseRPCAdapter {
    _ws: WebSocket;
    _socketType: SOCKETTYPE;
    _url: string;
    constructor(rpcClient?: RpcClient);
    open(url: string): void | Promise<void>;
    close(): Promise<void>;
    send(data: WriteData, callback?: WriteCallback): void;
    private _createSocketByWeb;
    private _createWebsocketByRpc;
    private _createWebsocket;
    _subcribe(url: string): void;
    onOpen(): void;
    onMessage(event: {
        data: any;
    }): void;
    onError(error: any): void;
    onClose(): void;
    private _checkAvailable;
    private _rpcListenFn;
    rpcCloseHandler(): void;
}
export {};
