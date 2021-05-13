/**
 * Required External Modules and Interfaces
 */
import { Request, Response, NextFunction } from "express"
import returnFormat from "../custom/return-format"
import GeneralError from "../custom/exception/general-error"
import { Admin } from "./admin.interface"
import { config } from "../config/env.config"
import { createToken } from "../auth/auth.helper"

/**
 * Controller Definitions
 */
export async function login(
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> {
    try {
        if (!('username' in req.body) ||
            !('password' in req.body)) {
            return next(new GeneralError(
                400, 
                "99", 
                "Bad Request"
            ))
        }

        const admin: Admin = req.body

        const USERNAME: string = config.admin.username as string;
        const PASSWORD: string = config.admin.password as string;

        if (admin.username === USERNAME &&
            admin.password === PASSWORD) {
            return res.status(200).send(returnFormat(
                "00",
                "Success",
                {
                    "token": createToken(admin.username)
                }
            ))
        }
    
        return next(new GeneralError(
            400, 
            "99", 
            "Username or Password Does Not Match"
        ))
        
    } catch (e) {
        return next(new GeneralError(500, "99", "System Error", e.message))
    }
}
