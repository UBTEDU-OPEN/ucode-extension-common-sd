import { Bridge, IBridgeInterface } from '@ubt/bridge-js';
import Features from './Features';
export default class NativeBridge extends Bridge {
    private _receiveCommunicator;
    beforeRequestFeature: ((feature: Features) => Promise<void>) | undefined;
    constructor(sendCommunicator: IBridgeInterface);
}
