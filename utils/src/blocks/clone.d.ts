export default Clone;
/**
 * Methods for cloning JavaScript objects.
 * @type {object}
 */
declare class Clone {
    /**
     * Deep-clone a "simple" object: one which can be fully expressed with JSON.
     * Non-JSON values, such as functions, will be stripped from the clone.
     * @param {object} original - the object to be cloned.
     * @returns {object} a deep clone of the original object.
     */
    static simple(original: object): object;
}
