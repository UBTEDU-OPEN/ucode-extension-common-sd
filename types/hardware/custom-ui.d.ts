export declare namespace UCodeCustomUI {
  export enum ModalSize {
    XS = 'xs',
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
    FS = 'fs',
  }

  type FinalCssStyleType = {
    width: string | number;
    height: string | number;
    minHeight?: string | number;
  };

  type ModalSizeCssStyleType =
    | {
        type: 'custom'; // 宽高都自定义
        width: string | number;
        height: string | number;
        minHeight?: number | string;
      }
    | {
        type: 'height'; // 只定义高度，宽度用内置的
        width: ModalSize;
        height: string | number;
        minHeight?: number | string;
      };

  export type ModalSizeType = ModalSize | ModalSizeCssStyleType;
}
