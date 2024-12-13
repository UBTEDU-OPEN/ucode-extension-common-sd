import { UcdBlock } from '../../types/ucd';
import { GeneratorDefinition } from '../../types/register';
export declare abstract class BaseLanguage {
    protected blocks: {
        [key: string]: UcdBlock.SerializedBlockDataWithId;
    };
    protected variables: {
        [key: string]: UcdBlock.SerializedVariableType;
    };
    protected lists: {
        [key: string]: UcdBlock.SerializedListType;
    };
    protected comments?: {
        [key: string]: UcdBlock.CommentType;
    };
    protected definitions_: {
        [key: string]: string;
    };
    private _generators;
    protected getGenerator(key: string): GeneratorDefinition.BlockGenerator | undefined;
    protected abstract name: string;
    protected abstract functionNames_: {
        [key: string]: string;
    };
    protected abstract INDENT: string;
    protected abstract RESERVED_WORDS_: string[];
    protected abstract ORDER_OVERRIDES: [number, number][];
    protected abstract DEFAULT_ORDER: number;
    protected abstract COMMENT_WRAP: number;
    protected abstract scrubNakedValue(line: string): string;
    protected abstract scrub_(block: UcdBlock.SerializedBlockDataWithId, code: string, nextBlock?: boolean): string;
    protected abstract STATEMENT_PREFIX?: string;
    protected abstract SCALAR_VARIABLE_TYPE?: string;
    protected abstract variableToCode(variableName: string, variableId: string): [string, number];
    protected abstract listToCode(listName: string, listId: string): [string, number];
    protected abstract beforeToCode(): void;
    protected abstract afterToCode(code: string): string;
    protected getBlock(blockId: UcdBlock.OptionalString): UcdBlock.SerializedBlockDataWithId | undefined;
    protected getNextBlock(block: UcdBlock.SerializedBlockDataWithId): UcdBlock.SerializedBlockDataWithId | undefined;
    protected getGeneratorConstants(): GeneratorDefinition.GeneratorConstants;
    /**
     * blockToCode (similar to Blockly.Generator.blockToCode)
     * @param block blockDataWithId
     * @returns
     */
    protected blockToCode(block?: UcdBlock.SerializedBlockDataWithId): string | [string, number];
    private _generatorToCode;
    /**
     * get Top Blocks, you could overwrite if you want to skip some blocks
     * @param blocks 积木块
     * @returns
     */
    protected getTopBlocks(blocks: {
        [key: string]: UcdBlock.SerializedBlockData;
    }): UcdBlock.SerializedBlockDataWithId[];
    protected getInput(block: UcdBlock.SerializedBlockDataWithId, name: string): UcdBlock.SerializedInput;
    protected inputToCode(input: UcdBlock.SerializedInput, outerOrder: number): string;
    protected getComment(commentId: string): UcdBlock.CommentType | undefined;
    protected getCommentText(block: UcdBlock.SerializedBlockDataWithId): string;
    protected isChildBlock(blockId: string, filters?: number[]): boolean;
    protected getChildren(block: UcdBlock.SerializedBlockDataWithId, filters?: number[], blocks?: UcdBlock.SerializedBlockDataWithId[]): UcdBlock.SerializedBlockDataWithId[];
    protected allNestedComments(block: UcdBlock.SerializedBlockDataWithId): string;
    protected provideFunction_(desiredName: string, code: string): string;
    private setData;
    private clearData;
    /**
     * The Generators would be clear after toCode()
     * @param generators CodeGenerators
     */
    injectGenerators(generators: {
        [key: string]: GeneratorDefinition.BlockGenerator;
    }): void;
    /**
     *
     * @param serializedData Serialized Blocks Data, would be clear after clear
     * @returns
     */
    toCode(serializedData: UcdBlock.SerializedData): string;
    protected topBlocksToCode(blocks: UcdBlock.SerializedBlockDataWithId[]): string;
}
