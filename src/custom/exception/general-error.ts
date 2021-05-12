export default class GeneralError extends Error {
    status: number;
    error: string;
    log?: string;
    constructor(status: number, error: string, message: string, log?: string) {
        super(message)
        this.status = status;
        this.error = error;
        this.log = log;
        
        console.log(log || message)
    }
}
