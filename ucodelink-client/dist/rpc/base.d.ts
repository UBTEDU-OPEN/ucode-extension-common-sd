export class BaseRPCAdapter extends EventEmitter {
    static set getRpcClient(arg: any);
    static get getRpcClient(): any;
    static createError(code: any, msg: any): UCodeLinkAPIError;
    /**
     * @param {Client} rpcClient 如果不走全局 rpc 必须设置一个 RPC 对象
     */
    constructor(subDomain: any, rpcClient: Client);
    subcribeEvents: Set<any>;
    subDomain: any;
    onRpcClose: any;
    rpc: Client | undefined;
    initRpc(): any;
    baseDestroy(): void;
    checkSocketReady(reject: any): void;
    get rpcReady(): any;
    _rpcCall(rpc: any, method: any, params: any, timeout: any): any;
    rpcCall(method: any, params: any, timeout: any): any;
    _rpcSubcribe(rpc: any, eventName: any): any;
    rpcSubcribe(eventName: any): any;
    _rpcUnsubcribe(rpc: any, eventName: any): Promise<any>;
    rpcUnsubcribe(eventName: any): any;
    _rpcListen(rpc: any, eventName: any, listener: any): Promise<void>;
    rpcListen(eventName: any, listener: any): any;
    destroy(): void;
}
import { EventEmitter } from "events";
import { UCodeLinkAPIError } from "../utils/error";
