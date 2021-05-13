import * as dotenv from "dotenv";
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const config = {
    api: {
        port: process.env.PORT,
        tag: process.env.TAG
    },
    admin: {
        username: process.env.USR,
        password: process.env.PWD
    }
}
