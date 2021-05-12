import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    api: {
        port: process.env.PORT,
        tag: process.env.TAG
    }
}
