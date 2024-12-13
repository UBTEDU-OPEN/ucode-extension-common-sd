import { UcdBlock } from '../../../types/ucd';
import { BaseLanguage } from '../base';
export declare class PythonLanguage extends BaseLanguage {
    DEFAULT_ORDER: number;
    SCALAR_VARIABLE_TYPE?: string | undefined;
    functionNames_: {
        [key: string]: string;
    };
    name: string;
    INDENT: string;
    STATEMENT_PREFIX?: string | undefined;
    RESERVED_WORDS_: string[];
    ORDER_OVERRIDES: [number, number][];
    protected shebang_: {
        [key: string]: string;
    };
    COMMENT_WRAP: number;
    private variableDB;
    private listDB;
    /**
     * Empty loops or conditionals are not allowed in Python.
     */
    readonly PASS: string;
    protected beforeToCode(): void;
    afterToCode(code: string): string;
    scrubNakedValue(line: string): string;
    private getCommentCode;
    protected scrub_(block: UcdBlock.SerializedBlockDataWithId, code: string, nextBlock?: boolean): string;
    quote_(str: string): string;
    protected variableToCode(variableName: string, variableId: string): [string, number];
    protected listToCode(listName: string, listId: string): [string, number];
}
