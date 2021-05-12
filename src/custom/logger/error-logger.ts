import { Log } from "./logger.interface"

var errorLogger: ErrorLogger

export class ErrorLogger {
    logs: Log[];
    
    constructor(log: string) {
        this.logs = [{log, "time": new Date()}]
    }

    add(log: string): void {
        this.logs.push({log, "time": new Date()})
    }

    copy(): Log[] {
        return this.logs
    }
}

export function initFunc(): number {
    try {
        errorLogger = new ErrorLogger("starting")
        return 1
    } catch (e) {
        console.log(e)
        return 0
    }
}

export function importFunc(): ErrorLogger {
    return errorLogger
}
