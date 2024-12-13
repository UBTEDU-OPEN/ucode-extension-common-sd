export declare const RESERVED_WORDS: string[];
/**
 * Order of operation ENUMs.
 *
 */
export declare const ORDERS: {
    ORDER_ATOMIC: number;
    ORDER_UNARY_POSTFIX: number;
    ORDER_UNARY_PREFIX: number;
    ORDER_MULTIPLICATIVE: number;
    ORDER_ADDITIVE: number;
    ORDER_SHIFT: number;
    ORDER_RELATIONAL: number;
    ORDER_EQUALITY: number;
    ORDER_BITWISE_AND: number;
    ORDER_BITWISE_XOR: number;
    ORDER_BITWISE_OR: number;
    ORDER_LOGICAL_AND: number;
    ORDER_LOGICAL_OR: number;
    ORDER_CONDITIONAL: number;
    ORDER_ASSIGNMENT: number;
    ORDER_NONE: number;
};
export declare const ORDER_OVERRIDES: [number, number][];
export declare const LIST_SUFFIX = "_list";
export declare const GetLetterFunc = "\nchar getLetter(String s, int index) {\n  const char *str = s.c_str();\n  return str[index];\n}\n";
