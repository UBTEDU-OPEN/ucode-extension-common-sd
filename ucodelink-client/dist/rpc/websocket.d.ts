export class WebsocketRPCAdapter extends BaseRPCAdapter {
    constructor(rpcClient: any);
    _socketType: number;
    onOpen(): void;
    onMessage(event: any): void;
    onError(error: any): void;
    onClose(): void;
    open(url: any): void | Promise<any>;
    close(): Promise<any>;
    send(data: any, callback: any): void;
    _createSocketByWeb(url: any): void;
    _createWebsocketByRpc(url: any): Promise<any>;
    _createWebsocket(url: any): void;
    _ws: WebSocket | undefined;
    _subcribe(url: any): void;
    _url: any;
    _checkAvailable(url: any): boolean;
    _rpcListenFn(eventType: any, ...args: any[]): void;
}
import { BaseRPCAdapter } from "./base";
