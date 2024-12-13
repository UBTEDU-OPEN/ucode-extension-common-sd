export declare const RESERVED_WORDS: string[];
/**
 * Order of operation ENUMs.
 * http://docs.python.org/reference/expressions.html#summary
 */
export declare const ORDERS: {
    ORDER_ATOMIC: number;
    ORDER_COLLECTION: number;
    ORDER_STRING_CONVERSION: number;
    ORDER_MEMBER: number;
    ORDER_FUNCTION_CALL: number;
    ORDER_EXPONENTIATION: number;
    ORDER_UNARY_SIGN: number;
    ORDER_BITWISE_NOT: number;
    ORDER_MULTIPLICATIVE: number;
    ORDER_ADDITIVE: number;
    ORDER_BITWISE_SHIFT: number;
    ORDER_BITWISE_AND: number;
    ORDER_BITWISE_XOR: number;
    ORDER_BITWISE_OR: number;
    ORDER_RELATIONAL: number;
    ORDER_LOGICAL_NOT: number;
    ORDER_LOGICAL_AND: number;
    ORDER_LOGICAL_OR: number;
    ORDER_CONDITIONAL: number;
    ORDER_LAMBDA: number;
    ORDER_NONE: number;
};
export declare const ORDER_OVERRIDES: [number, number][];
