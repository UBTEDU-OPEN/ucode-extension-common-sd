declare class Color {
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */
    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */
    /** @type {RGBObject} */
    static get RGB_BLACK(): {
        r: number;
        g: number;
        b: number;
    };
    /** @type {RGBObject} */
    static get RGB_WHITE(): {
        r: number;
        g: number;
        b: number;
    };
    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */
    static decimalToHex(decimal: number): string;
    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
    static decimalToRgb(decimal: number): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
    static hexToRgb(hex: string): {
        r: number;
        g: number;
        b: number;
    } | null;
    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */
    static rgbToHex(rgb: any): string;
    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */
    static rgbToDecimal(rgb: {
        r: number;
        g: number;
        b: number;
    }): number;
    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
     * @param {!string} hex Hex representation of the color.
     * @return {!number} Number representing the color.
     */
    static hexToDecimal(hex: string): number | null;
    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
    static hsvToRgb(hsv: {
        h: number;
        s: number;
        v: number;
    }): {
        r: number;
        g: number;
        b: number;
    };
    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */
    static rgbToHsv(rgb: {
        r: number;
        g: number;
        b: number;
    }): {
        h: number;
        s: number;
        v: number;
    };
    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */
    static mixRgb(rgb0: {
        r: number;
        g: number;
        b: number;
    }, rgb1: {
        r: number;
        g: number;
        b: number;
    }, fraction1: number): {
        r: number;
        g: number;
        b: number;
    };
}
export default Color;
