import { RpcClient } from '@ubt/ucode-link-adapter/dist/client';
import { BaseRPCAdapter } from './base';
export declare enum BodyType {
    FormData = "FormData",
    Blob = "Blob",
    BufferSource = "BufferSource",
    URLSearchParams = "URLSearchParams",
    ReadableStream = "ReadableStream"
}
export declare enum ResponseBodyType {
    json = "json",
    text = "text",
    arrayBuffer = "arrayBuffer",
    formData = "formData",
    blob = "blob"
}
export interface RequestType extends RequestInit {
    body?: any;
    bodyType?: BodyType;
    responseBodyType?: ResponseBodyType;
    isHttps?: boolean;
}
export interface ResponseType extends Response {
    data?: any;
}
export declare class HttpRPCAdapter extends BaseRPCAdapter {
    _url: string;
    controller: AbortController | undefined;
    reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
    read: (() => Promise<any>) | undefined;
    constructor(rpcClient?: RpcClient);
    _subcribe(url: string, listener: (...args: any[]) => void): void;
    private _useRPC;
    rpcCloseHandler(): void;
    abortStream(): Promise<any> | undefined;
    readStreamByRpc(): Promise<unknown>;
    httpStream(reqUrl: string, request?: RequestType): Promise<ResponseType>;
    http(reqUrl: string, request?: RequestType): Promise<ResponseType>;
    private _resolveData;
    /**
     * 为了保持和rpc-http一致。上层传递的是json对象，不含FormData等对象，需要再次封装。
     */
    private _convertRequest;
    private _byHttp;
    /**
     * 走rpc，会序列化数据，不能被序列化的数据，需要转换
     * @param reqUrl 请求地址
     * @param request json对象
     */
    private _byRpc;
}
