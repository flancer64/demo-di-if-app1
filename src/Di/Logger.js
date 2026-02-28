/**
 * @implements Trans_Api_Logger
 */
export default class Client1_Di_Logger {

    constructor() {
        /** @type {Console|undefined} */
        let consoleRef;

        this.setConsoleLogger = (console) => {
            consoleRef = console;
        };

        this.print = (msg) => {
            consoleRef.log('Client1 logger: ' + msg);
        };
    }

}