/**
 * @implements Trans_Api_Package
 */
export default class Client1_Di_Package {
    /**
     * @return {{length: number, width: number, height: number}}
     */
    getSize() {
        return {length: 150, width: 50, height: 50};
    }

    /**
     * @return {number}
     */
    getWeight() {
        return 50;
    }
}