export var BodyType: any;
export var ResponseBodyType: any;
export class HttpRPCAdapter extends BaseRPCAdapter {
    constructor(rpcClient: any);
    http(reqUrl: any, request: any): Promise<any>;
    readStreamByRpc(): Promise<any>;
    _subcribe(url: any, listener: any): void;
    _url: any;
    _useRPC(): boolean;
    abortStream(): Promise<any> | undefined;
    httpStream(reqUrl: any, request: any): Promise<any>;
    read: (() => Promise<any>) | undefined;
    controller: AbortController | undefined;
    reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
    _resolveData(responseType: any, response: any): Promise<any>;
    /**
     * 为了保持和rpc-http一致。上层传递的是json对象，不含FormData等对象，需要再次封装。
     */
    _convertRequest(request: any): any;
    _byHttp(reqUrl: any, request: any): Promise<any>;
    /**
     * 走rpc，会序列化数据，不能被序列化的数据，需要转换
     * @param reqUrl 请求地址
     * @param request json对象
     */
    _byRpc(reqUrl: any, request: any): Promise<any>;
}
import { BaseRPCAdapter } from "./base";
