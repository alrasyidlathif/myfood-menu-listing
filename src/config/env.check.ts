import * as dotenv from "dotenv";
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const ENV_VAR = [
    'PORT', 'TAG', 'USR', 'PWD', 'SECRET', 'EXPIRE'
]

export function envCheck(): void {
    for (let i of ENV_VAR) {
        if (!process.env[i]) process.exit(1);
    }
}
