export function initRpcClient(adapter: any, options: any): RpcClient;
/**
 * ucodeLink 初始化
 * @param options 初始化参数
 */
export function initUCodeLink(options: any): any;
export function getLinkRpc(timeout?: number): Promise<any>;
export function getLinkRpcSync(): any;
export function injectRpcClient(): void;
import { RpcClient } from "@ubt/ucode-link-adapter/dist/client/client";
