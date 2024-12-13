export default class Service {
    constructor(device: any, uuid: any, isPrimary: any, rpc: any);
    characteristics: any[];
    device: any;
    uuid: any;
    isPrimary: any;
    _rpc: any;
    getCharacteristic(characteristicUUID: any): Promise<any>;
    _filterCharacteristicWithUUID(characteristicUUID: any): any;
    getCharacteristics(characteristicUUID: any): Promise<any>;
}
