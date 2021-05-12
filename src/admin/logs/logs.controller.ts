/**
 * Required External Modules and Interfaces
 */
import { Request, Response, NextFunction } from "express"
import { importFunc, ErrorLogger } from "../../custom/logger/error-logger"
import returnFormat from "../../custom/return-format"
import GeneralError from "../../custom/exception/general-error"
import { Log } from "../../custom/logger/logger.interface"

/**
 * Controller Definitions
 */
export async function getAllLogs(
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> {
    try {
        const logger: ErrorLogger = importFunc()
        const logs: Log[] = [...logger.copy()]
    
        return res.status(200).send(returnFormat(
            "00",
            "Success",
            {"logs": logs.reverse()}
        ))
    } catch (e) {
        return next(new GeneralError(500, "99", "System Error", e.message))
    }
}
