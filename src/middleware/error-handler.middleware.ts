import { Request, Response, NextFunction } from "express"
import GeneralError from "../custom/exception/general-error"
import returnFormat from "../custom/return-format"
import { importFunc, ErrorLogger } from "../custom/logger/error-logger"

export function errorHandler(
    err: GeneralError,
    req: Request,
    res: Response,
    next: NextFunction
): Response {
    const log: ErrorLogger = importFunc()
    log.add(err.log || err.message)
    return res.status(err.status).send(returnFormat(err.error, err.message))
}
