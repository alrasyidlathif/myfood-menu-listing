import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../auth/auth.helper";
import GeneralError from "../custom/exception/general-error";

export function authHandler(
    req: Request,
    res: Response,
    next: NextFunction
): Response | void {
    const AUTH: string | undefined = req.header('authorization')

    if (!AUTH) return next(new GeneralError(401, "99", "Unauthorized"))

    try {
        const TOKEN: string = AUTH.split("Bearer ")[1]

        var decoded: number = verifyToken(TOKEN)
        if (decoded===0) return next(
            new GeneralError(401, "99", "Unauthorized")
        )

        return next()

    } catch (e) {
        return next(new GeneralError(401, "99", "Unauthorized"))
    }
}
