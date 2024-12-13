import { UCode } from './common';

export declare namespace UCodeScratchDefinition {
  export type ExtensionMenuItem = {
    acceptReporters?: boolean;
    items:
      | string[]
      | {
          text: string;
          value: string | number;
        }[]
      | (() => [string, string][]);
  };

  export type ExtensionTargetType = 'sprite' | 'stage';

  export type BlockArgumentInfo = {
    type: UCode.ArgumentUnionType;
    menu?: string;
    name?: string;
    defaultValue?: string | number | boolean | string[];
    onValidate?: blockOnValidate;
    customFieldOptions?: { [key: string]: any };
  } & (
    | {
        type: Omit<UCode.ArgumentUnionType, 'number' | 'number_pad' | 'number_input' | 'string' | 'field_input' | 'matrix' | 'custom_matrix'>;
      }
    | {
        type: 'number' | 'number_pad' | 'number_input';
        options?: {
          type: 'number';
          min?: number | string;
          max?: number | string;
          precision?: number | string;
          regExp?: string;
        };
      }
    | {
        type: 'string' | 'field_input';
        options?: {
          type: 'text';
          regExp?: string;
        };
      }
    | {
        type: 'matrix';
        options?: {
          type: 'matrix';
          col?: number | string;
          row?: number | string;
        };
      }
    | {
        type: 'custom_matrix';
        // customFieldOptions?: {
        //   col?: 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
        //   row?: 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
        //   recommendList?: Array<string>;
        //   title?: string;
        // };
      }
  );

  export type BlockType = {
    opcode: string;
    text: string;
    blockType: 'Boolean' | 'command' | 'conditional' | 'event' | 'hat' | 'loop' | 'reporter' | UCode.BlockUnionType;
    arguments?: { [key: string]: BlockArgumentInfo };
    filter?: ExtensionTargetType[];
    hideFromPalette?: boolean;
    disableMonitor?: boolean;
    isEdgeActivated?: boolean;
    branchCount?: number;
    func?: string;
    hasPreviousStatement?: boolean;
    hasNextStatement?: boolean;
    isTerminal?: boolean;
  };

  export type ButtonType = {
    func: 'MAKE_A_LIST' | 'MAKE_A_PROCEDURE' | 'MAKE_A_VARIABLE';
    blockType: 'button';
    text: string;
  };

  export type DelimiterType = '---'; // 兼容 scratch extension 分割线, 会转换为 UCodeToolboxType.Delimiter

  export type BlockInfo = BlockType | ButtonType | DelimiterType;

  export interface GetInfoInterface<T extends BlockInfo = BlockInfo> {
    id?: string;
    name: string;
    menuIconURI?: string;
    iconURI?: string;
    blockIconURI?: string;
    blocks: T[];
    color1?: string;
    color2?: string;
    color3?: string;
    showStatusButton?: boolean;
    menus?: { [key: string]: ExtensionMenuItem };
  }
}
