import { IBridgeInterface } from '@ubt/bridge-js';
import NativeBridge from './NativeBridge';
export declare class UnityBridge extends NativeBridge {
    constructor(sendCommunicator: IBridgeInterface);
    initBridgeFrameworkInterface(): void;
}
