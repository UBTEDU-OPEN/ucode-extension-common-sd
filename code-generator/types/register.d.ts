import { UcdBlock } from './ucd';

export declare namespace GeneratorDefinition {
  type CodeType = string | [string, number];
  type TocCodeResult =
    | CodeType
    | {
        definitions: { [key: string]: string };
        code: CodeType;
      };
  type GeneratorArgument = {
    outerOrder?: number;
    statement?:
      | {
          addLoopTrap?: boolean;
        }
      | boolean;
  };

  type GeneratorConstants = {
    INDENT: string;
  };
  /**
   * 帽子积木块转代码, 需要显式的声明 hat, 并且设为true
   * toCode 的时候, 会有 `branchCode` 也就是帽子块后面的积木块的代码作为 参数注入
   * ```javascript
   * toCode(inputs, constants, branchCode) {}
   * ```
   */

  type ToCodeOptions = {
    mutation?: UcdBlock.SerializedMutation;
  };

  export interface HatBlockGenerator {
    hat: true;
    arguments?: { [key: string]: GeneratorArgument };
    toCode(inputs: { [key: string]: string }, constants: GeneratorConstants, branchCode: string, options?: ToCodeOptions): TocCodeResult;
  }

  /**
   * 普通积木块转代码
   */
  export interface NormalBlockGenerator {
    hat?: false;
    arguments?: { [key: string]: GeneratorArgument };
    toCode(inputs: { [key: string]: string }, constants: GeneratorConstants, branchCode: string, options?: ToCodeOptions): TocCodeResult;
  }

  export type BlockGenerator = HatBlockGenerator | NormalBlockGenerator;
}
