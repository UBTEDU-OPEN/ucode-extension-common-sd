import { UcdBlock } from '../../../types/ucd';
import { BaseLanguage } from '../base';
export declare class ArduinoLanguage extends BaseLanguage {
    protected name: string;
    protected functionNames_: {
        [key: string]: string;
    };
    protected INDENT: string;
    protected RESERVED_WORDS_: string[];
    protected ORDER_OVERRIDES: [number, number][];
    protected DEFAULT_ORDER: number;
    protected COMMENT_WRAP: number;
    private variableDB;
    private listDB;
    private getCommentCode;
    /**
     * 重写获取子类积木块的逻辑(不处理)
     * @overwrite
     * @param block
     * @returns
     */
    protected allNestedComments(block: UcdBlock.SerializedBlockDataWithId): string;
    protected scrubNakedValue(line: string): string;
    protected scrub_(block: UcdBlock.SerializedBlockDataWithId, code: string, nextBlock?: boolean): string;
    protected STATEMENT_PREFIX?: string | undefined;
    protected SCALAR_VARIABLE_TYPE?: string | undefined;
    protected listToCode(listName: string, listId: string): [string, number];
    protected beforeToCode(): void;
    protected variableToCode(variableName: string, variableId: string): [string, number];
    protected afterToCode(code: string): string;
    quote_(str: string): string;
    /**
     * @overwrite 重写父类的 获取 topBlocks, 过滤掉非帽子块的积木块
     * @param blocks 积木块 key-value
     * @returns
     */
    protected getTopBlocks(blocks: {
        [key: string]: UcdBlock.SerializedBlockData;
    }): UcdBlock.SerializedBlockDataWithId[];
}
