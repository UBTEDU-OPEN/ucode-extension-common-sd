/**
 * UBT 全局可以用类型
 */
export declare namespace UBT {
  /**
   * 生成一个 KeyValue 的类型
   */
  export type KeyValueOf<T = any> = { [key: string]: T };
  /**
   * 返回 所有值的类型
   */
  export type ValueOf<T> = T[keyof T];
  /**
   * 构造函数类型
   */
  export interface IType<T> {
    new (...args: any[]): T;
  }
  /**
   * 基础的数据类型
   */
  export type BasicType = {
    id: string;
    name?: string;
    description?: string;
  };

  type IntlMessage = {
    id: string;
    defaultMessage: string;
    description?: string;
  };
}

/**
 * uCode 全局类型
 */
export declare namespace UCode {
  /**
   * 连接状态 枚举类型
   */
  type DeviceConnectStatusType = {
    Connected: 0;
    Disconnected: 1;
    Connecting: 2;
    Disconnecting: 3;
    ConnectFail: 4;
    DisconnectFail: 5;
  };
  /**
   * 连接状态 所有值，联合类型
   */
  type DeviceConnectStatusUnionType = UBT.ValueOf<DeviceConnectStatusType>;
  /**
   * 角色类型
   */
  type TargetType = 'stage' | 'device' | 'all';
  /**
   * 数据编码
   */
  type DataEncoding = 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'binary' | 'hex';

  /**
   * 积木块参数类型 枚举类型
   */
  type ArgumentTypeDef = {
    /**
     * Numeric value with angle picker
     */
    ANGLE: 'angle';

    /**
     * Boolean value with hexagonal placeholder
     */
    BOOLEAN: 'Boolean';

    /**
     * Numeric value with color picker
     */
    COLOR: 'color';

    RGB_COLOR: 'rgb_color';

    /**
     * Numeric value with text field
     */
    NUMBER: 'number';

    NUMBER_PAD: 'number_pad';

    NUMBER_INPUT: 'number_input';

    DROPDOWN_MENU: 'field_dropdown_menu';

    DIALOG_MENU: 'dialog_menu';

    /**
     * String value with text field
     */
    STRING: 'string';

    /**
     * String value with matrix field
     */
    MATRIX: 'matrix';

    /**
     * MIDI note number with note picker (piano) field
     */
    NOTE: 'note';

    /**
     * Inline image on block (as part of the label)
     */
    IMAGE: 'image';

    CUSTOM: 'custom';

    VARIABLE: 'variable';

    FIELD_INPUT: 'field_input';

    UCODE_CUSTOM_MATRIX: 'custom_matrix';
  };

  /**
   * 积木块类型 枚举类型
   */
  type BlockTypeDef = {
    BOOLEAN: 'Boolean';
    COMMAND: 'command';
    CONDITIONAL: 'conditional';
    EVENT: 'event';
    HAT: 'hat';
    LOOP: 'loop';
    REPORTER: 'reporter';
    NUMBER: 'Number';
    LABEL: 'label';
  };

  /**
   * 积木块类型 所有值，联合类型
   */
  type BlockUnionType = UBT.ValueOf<BlockTypeDef>;
  /**
   * 积木块参数类型 所有值，联合类型
   */
  type ArgumentUnionType = UBT.ValueOf<ArgumentTypeDef>;

  /**
   * 系统环境
   */
  type PlatformType = 'windows' | 'macos' | 'linux' | 'ios' | 'android' | 'chromeos';

  /**
   * 宿主环境
   */
  type HostType = 'web' | 'electron' | 'webview' | 'flutter' | 'qt';

  type GeneratorLanguageDef = {
    Arduino: 'Arduino';
    Python: 'Python';
    Lua: 'Lua';
  };
  type GeneratorLanguageType = UBT.ValueOf<GeneratorLanguageDef>;

  type WorkingModeDef = {
    Online: 'online';
    Upload: 'upload';
  };

  type WorkingModeType = UBT.ValueOf<WorkingModeDef>;

  type SwitchModeDataType =
    | {
        mode: 'upload';
        language: UCode.GeneratorLanguageType;
      }
    | 'online';

  type BlockFilter = {
    type: 'blacklist' | 'whitelist';
    list: { [key: string]: boolean };
  };
}

export declare namespace UCodeErrorCode {
  type CommonErrorCode = RequestConnection | RequestRetry | TimeoutError;
  type RequestConnection = 1433;
  type RequestRetry = 1434;
  type TimeoutError = 1435;
}
