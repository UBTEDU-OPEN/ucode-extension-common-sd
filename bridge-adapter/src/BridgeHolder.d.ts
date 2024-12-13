import NativeBridge from './NativeBridge';
declare class BridgeHolder {
    static getBridgeInstance(): NativeBridge;
}
export default BridgeHolder;
