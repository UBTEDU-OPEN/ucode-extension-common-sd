/**
 * Gets a canonical UUID from a partial UUID in string or hex format
 * @param uuid The partial UUID
 * @returns canonical UUID
 */
export function getCanonicalUUID(uuid: any): string;
/**
 * Gets a canonical service UUID from a known service name or partial UUID in string or hex format
 * @param service The known service name
 * @returns canonical UUID
 */
export function getServiceUUID(service: any): string;
/**
 * Gets a canonical characteristic UUID from a known characteristic name or partial UUID in string or hex format
 * @param characteristic The known characteristic name
 * @returns canonical UUID
 */
export function getCharacteristicUUID(characteristic: any): string;
/**
 * Gets a canonical descriptor UUID from a known descriptor name or partial UUID in string or hex format
 * @param descriptor The known descriptor name
 * @returns canonical UUID
 */
export function getDescriptorUUID(descriptor: any): string;
/**
 * Known services enum
 */
export var bluetoothServices: any;
/**
 * Known characteristics enum
 */
export var bluetoothCharacteristics: any;
/**
 * Known descriptors enum
 */
export var bluetoothDescriptors: any;
