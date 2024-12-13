import type JSZip from 'jszip';
import type { SerializeVariable, SerializedComment, SerializedBlock, SerializeMonitor } from '@ubt/ucode-vm';
import { UBT } from './common';

export declare namespace UcdType {
  /**
   * uCode 自定义的 Target 数据
   */
  type UCodeCustomTargetData<T extends string, D = any> = {
    type: T;
    data: D;
  };

  type CustomAssetType<T extends keyof AssetDataType = keyof AssetDataType> = {
    name: string; // 类型名称
    ext: string; // 后缀名
    dataType: T;
    standalone?: boolean; // 是否要独立保存为文件，默认是 true
  };

  /**
   * 通用的 Target 数据（Scratch 和 uCode 共用的）
   */
  type CommonSerializeTargetJson = {
    name: string;
    layerOrder?: number;
    blocks: UBT.KeyValueOf<SerializedBlock>;
    variables: SerializeVariable['variables'];
    lists: SerializeVariable['lists'];
    broadcasts: SerializeVariable['broadcasts'];
    comments: UBT.KeyValueOf<SerializedComment>;
    lastEdit?: boolean;
  };

  /**
   * 最终每种Target需要提供的序列化数据
   */
  type ToSerializeTargetJson<T extends string, D = any> = CommonSerializeTargetJson & {
    ucode?: UCodeCustomTargetData<T, D>;
  };

  /**
   * Target Asset 基本类型
   */
  type BaseTargetAsset<T extends keyof AssetDataType = keyof AssetDataType> = {
    assetId: string;
    name: string;
    md5ext: string;
    dataFormat: string;
  };

  /**
   * JSZip 解压时需要用到的类型
   * json 是自定义的 特殊数据，解压和压缩需要先转
   */

  interface JSZipFileDataType {
    base64: string;
    string: string;
    uint8array: Uint8Array;
    // text: string;
    // binarystring: string;
    // array: number[];
    // arraybuffer: ArrayBuffer;
    // blob: Blob;
    // stream: NodeJS.ReadableStream;
  }

  type JSZipFileDataTypeConent = UBT.ValueOf<JSZipFileDataType>;

  interface AssetDataType extends JSZipFileDataType {
    json: any;
  }

  /**
   * 重新定义的 Target Asset 运行时的
   */
  type TargetAsset<T extends keyof AssetDataType = keyof AssetDataType> = BaseTargetAsset<T> &
    Partial<UCodeCustomAssetData> & {
      data: AssetDataType[T];
    };

  /**
   * 还没解压的类型
   */
  type ToDeserializeTargetAsset = BaseTargetAsset & {
    data: JSZip.JSZipObject;
  };

  type SerializeTargetData<T extends string = any, D = any> = {
    json: ToSerializeTargetJson<T, D>;
    assets: UBT.KeyValueOf<TargetAsset>;
  };

  type DeserializeTargetData<T extends string = any, D = any> = {
    json: SerializeTargetData<T, D>;
    assets: ToDeserializeTargetAsset[];
  };

  type TargetAssetStore = Map<string, UcdType.UCodeCustomTargetAsset>;

  /**
   * 第一层是 TargetID, 第二层是 AssetID
   */
  type UCodeAssetStore = Map<string, TargetAssetStore>;

  type UCodeCustomAssetData = {
    assetType: CustomAssetType;
    extraData?: UBT.KeyValueOf;
  };

  type UCodeCustomTargetAsset<T extends keyof AssetDataType = keyof AssetDataType> = BaseTargetAsset<T> &
    UCodeCustomAssetData & {
      data: AssetDataType[T];
    };

  type SerializeTargets = {
    targets: SerializedTargetJson<any, any>[];
    assets: UBT.KeyValueOf<TargetAsset> | UBT.KeyValueOf<UCodeCustomTargetAsset>;
    monitors: SerializeMonitor[];
    extensions: string[];
  };

  type ProjectJson = Omit<SerializeTargets, 'assets'> & {
    version: string;
    ucdVersion: string;
  };

  type SaveRequiredData = SerializeTargets & {
    version: string;
    ucdVersion: string;
  };

  type SerializedUCodeCustomTargetAsset<T extends keyof AssetDataType = keyof AssetDataType> = BaseTargetAsset<T> &
    UCodeCustomAssetData & {
      data?: AssetDataType[T];
    };

  /**
   * 不包含 数据的 asset 列表
   */
  type SerializedTargetAssetList = UBT.KeyValueOf<SerializedUCodeCustomTargetAsset>;

  /**
   * 最终经过序列化的Target数据（额外加上了 assets 的基本信息，如果不是 standalone 的 asset 则不带 data）
   */
  type SerializedTargetJson<T extends string, D = any> = CommonSerializeTargetJson & {
    ucode: UCodeCustomTargetData<T, D> & {
      assets?: SerializedTargetAssetList;
    };
  };
}
