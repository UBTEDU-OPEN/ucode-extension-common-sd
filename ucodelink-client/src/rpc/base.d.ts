/// <reference types="node" />
import { EventEmitter } from 'events';
import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { UCodeLinkAPIError } from '../utils/error';
export declare abstract class BaseRPCAdapter extends EventEmitter {
    private static _getRpcClient;
    static set getRpcClient(getRpcClient: () => Promise<RpcClient>);
    static get getRpcClient(): () => Promise<RpcClient>;
    private subDomain;
    private rpc?;
    private subcribeEvents;
    private onRpcClose;
    /**
     * @param {Client} rpcClient 如果不走全局 rpc 必须设置一个 RPC 对象
     */
    constructor(subDomain: string, rpcClient?: RpcClient);
    initRpc(): Promise<RpcClient>;
    baseDestroy(): void;
    static createError(code: number, msg: string): UCodeLinkAPIError;
    checkSocketReady(reject?: (err: Error) => void): void;
    protected get rpcReady(): Promise<boolean>;
    private _rpcCall;
    protected rpcCall(method: string, params?: any[], timeout?: number): Promise<any>;
    private _rpcSubcribe;
    protected rpcSubcribe(eventName: string): Promise<void>;
    private _rpcUnsubcribe;
    protected rpcUnsubcribe(eventName: string): Promise<void>;
    private _rpcListen;
    protected rpcListen(eventName: string, listener: (...args: any[]) => void): Promise<void>;
    protected abstract rpcCloseHandler(): void;
    destroy(): void;
}
