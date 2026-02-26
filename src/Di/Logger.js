/**
 * @implements Trans_Api_Logger
 */
export default class Client1_Di_Logger {
    #console;

    setConsoleLogger(console) {
        this.#console = console;
    }

    print(msg) {
        this.#console.log('Client1 logger: ' + msg);
    }

}