import type * as UCodeLinkAPI from '../../../ucodelink-client/src/index';
import { UCodeCustomError } from '../error/index';
export declare function uCodeLinkNotReady(): UCodeCustomError;
export declare function downloadUCodeLink(): void;
export declare function startUCodeLink(): void;
export declare function initUCodeLink(timeout?: number): Promise<UCodeLinkAPI.RpcClient>;
export declare function uCodeLinkIsReady(): boolean;
export declare function waitUCodeLinkReady(timeoutDuration?: number): Promise<void>;
export declare function handleUCodeLinkError(errorAction: string): Promise<boolean>;
