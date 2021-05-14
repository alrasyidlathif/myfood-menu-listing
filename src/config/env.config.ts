import * as dotenv from "dotenv";
import path from 'path';
import { envCheck } from "./env.check";

envCheck()

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const config = {
    api: {
        port: process.env.PORT,
        tag: process.env.TAG
    },
    admin: {
        username: process.env.USR,
        password: process.env.PWD
    },
    token: {
        secret: process.env.SECRET,
        expire: process.env.EXPIRE
    }
}
