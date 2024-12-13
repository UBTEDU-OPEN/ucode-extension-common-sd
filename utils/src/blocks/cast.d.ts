/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */
export declare const Cast: {
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * Modified by uCode Alex.Tan
     * Cast will treat "123.11" as string not Number, this modification will try extract the number from the quote ' or "
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    toNumber(value: string | number): number;
    /**
     * Convert To Number, If Failed fallback to string value
     * Example:
     * - "abc" => "abc"
     * - "123" => 123
     *
     * Scratch **List** will convert the value as **String** no matter what you give,
     * ```javascript
     * list.append("123")
     * list.append("abc")
     * ```
     * If use `toNumber` will break the value:
     *
     * ```javascript
     * list.append(123)
     * list.append(0)
     * ```
     *
     * The correct way is `toNumberOrString`:
     *
     * ```javascript
     * list.append(123)
     * list.append("abc")
     * ```
     *
     * @param value String or Number
     * @returns
     */
    toNumberOrString(value: string | number): number | string;
    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */
    toBoolean(value: string): boolean;
    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */
    toString(value: any): string;
    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */
    toRgbColorList(value: any): number[];
    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */
    toRgbColorObject(value: string): {
        r: number;
        g: number;
        b: number;
    } | null;
    /**
     * rgb颜色值转hex颜色
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */
    rgbToHexString(rgb: {
        r: number;
        g: number;
        b: number;
    }): string;
    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */
    isWhiteSpace(val: {
        trim: () => {
            (): any;
            new (): any;
            length: number;
        };
    } | null | string): boolean;
    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */
    compare(v1: any, v2: any): number;
    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */
    isInt(val: string | number | string[]): boolean;
    LIST_INVALID(): string;
    LIST_ALL(): string;
    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */
    toListIndex(index: string | number, length: number, acceptAll: any): number | (() => string);
    /**
     * Convert a value from tan function in degrees.
     * @param {!number} angle in degrees
     * @return {!number} Correct tan value
     */
    tan(angle: number): number;
};
