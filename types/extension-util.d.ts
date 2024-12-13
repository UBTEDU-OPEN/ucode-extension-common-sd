import type { BlockUtility } from '@ubt/ucode-vm';
import { UCode, DeviceConnectionInterface, UCodeUploadMode } from './common';
import type { UcdType } from './ucd';

export declare namespace UCodeExtensionUtil {
  export interface CreateSvgElement {
    (name: string, attrs: { [key: string]: string | number }, parent?: Element): SVGGElement;
  }

  export interface SettingMenuUtil<P extends DeviceConnectionInterface = DeviceConnectionInterface, U extends UCodeUploadMode.UploaderInterface<P> = UCodeUploadMode.UploaderInterface<P>> extends BaseExtensionUtil {
    getDevice: GetDevice<P>;
    getUploader: GetUploader<P, U>;
    getWorkingMode: () => UCode.WorkingModeType;
  }

  export type BaseExtensionUtil = {
    storage: StorageUtil;
    addStopDispose: AddStopDispose;
    getServiceName: () => string;
    serviceOnRunning: () => boolean;
    getCurrentTargetId: () => string;
    getPlatformType: () => UCode.PlatformType;
    getHostType: () => UCode.HostType;
  };

  export interface StorageUtil {
    load<T extends keyof UcdType.AssetDataType>(targetId: string, assetId: string): UcdType.UCodeCustomTargetAsset<T> | undefined;
    store<T extends UcdType.CustomAssetType>(targetId: string, assetType: T, data: UcdType.AssetDataType[T['dataType']], name?: string, extraData?: any): string;
    delete: (targetId: string, assetId: string) => void;
    list<T extends keyof UcdType.AssetDataType>(targetId: string, assetType: UcdType.CustomAssetType): UcdType.UCodeCustomTargetAsset<T>[];
  }

  export interface AddStopDispose {
    (targetId: string, dispose: () => void): void;
  }

  export type ExtraBlockUtility = {
    addStopDispose: (dispose: () => void) => void;
    getServiceName: () => string;
    serviceOnRunning: () => boolean;
    storage: StorageUtil;
  };

  export type BaseBlockUtility = BlockUtility & ExtraBlockUtility;

  export interface InjectBlockUtil {
    (util: BlockUtility): BaseBlockUtility;
  }

  export type BaseCustomFieldUtil<E extends BaseExtensionUtil> = E & {
    createSvgElement: CreateSvgElement;
  };
}
