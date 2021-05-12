/**
 * Required External Modules
 */
import { config } from "./config/env.config";
import { api } from "./app";
import { initFunc } from "./custom/logger/error-logger"

/**
 * App Variables
 */
if (!config.api.port) {
    process.exit(1);
}
 
const PORT: number = parseInt(config.api.port as string, 10);

/**
 * App Logger
 */
if (initFunc() == 0) {
    process.exit(1);
}

/**
 * Server Activation
 */
api.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
