import { config } from "../config/env.config"
import jwt from "jsonwebtoken"
import { TokenPayload } from "./token-payload.interface";

export function createToken(username: string): string {
    const EXPIRE: number = parseInt(config.token.expire as string, 10);
    const SECRET: string = config.token.expire as string;

    const PAYLOAD: TokenPayload = {username}
  
    return jwt.sign(PAYLOAD, SECRET, {'expiresIn': EXPIRE})
};

export function verifyToken(token: string): number {
    const SECRET: string = config.token.expire as string;

    try {
        var decoded: any = jwt.verify(token, SECRET)
        if (!('username' in decoded)) return 0

        console.log("admin: " + decoded.username)

        return 1

    } catch (e) {
        throw new Error(e)
    }
}
