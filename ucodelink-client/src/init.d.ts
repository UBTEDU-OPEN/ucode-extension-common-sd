import { RpcClient, RpCClientConstructorOptions } from '@ubt/ucode-link-adapter/dist/client';
import { ClientAdapterInterface } from '@ubt/ucode-link-adapter/dist/interfaces';
export declare function initRpcClient(adapter: ClientAdapterInterface, options?: RpCClientConstructorOptions): RpcClient;
export declare type InitUCodeLinkOptions = {
    type: 'chromeos';
    extensionID: string;
} | {
    type: 'web';
    address: string;
} | {
    type: 'mobile';
} | {
    type: 'electron';
} | {
    type: 'electron-worker';
} | {
    type: 'electron-iframe';
};
/**
 * ucodeLink 初始化
 * @param options 初始化参数
 */
export declare function initUCodeLink(options?: InitUCodeLinkOptions): RpcClient;
export declare function getLinkRpc(timeout?: number): Promise<RpcClient>;
export declare function getLinkRpcSync(): RpcClient | undefined;
export declare function injectRpcClient(): void;
