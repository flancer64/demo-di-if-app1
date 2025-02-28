export default class Client1_App {
    /** @type {Trans_Drive} */
    #drive;

    /**
     * @param {Trans_Drive} drive
     */
    constructor(
        {
            Trans_Drive$: drive,
        }
    ) {
        this.#drive = drive;
    }

    run() {
        this.#drive.execMission();
    }
}