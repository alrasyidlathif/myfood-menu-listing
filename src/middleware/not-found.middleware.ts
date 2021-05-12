import { Request, Response } from "express"
import { ErrorLogger, importFunc } from "../custom/logger/error-logger"
import returnFormat from "../custom/return-format"

export function notFoundHandler(req: Request, res: Response): Response {
    const log: ErrorLogger = importFunc()
    log.add("Service Not Found")
    return res.status(404).send(returnFormat("99", "Service Not Found"))
}
