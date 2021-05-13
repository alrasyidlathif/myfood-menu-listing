import { config } from "../config/env.config"
import jwt from "jsonwebtoken"

export function createToken(username: string): string {
    const EXPIRE: number = parseInt(config.token.expire as string, 10);
    const SECRET: string = config.token.expire as string;
  
    return jwt.sign({username}, SECRET, {'expiresIn': EXPIRE})
};
