/**
 * Required External Modules
 */
import { config } from "./config/env.config";
import express from "express";
import cors from "cors";
import { router } from "./router-nav";
import { errorHandler } from "./middleware/error-handler.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

/**
 * App Variables
 */ 
const TAG: string = config.api.tag as string;

/**
 *  App Configuration
 */
export const api = express();

api.use(cors());
api.use(express.json());
api.use(`/api/${TAG}`, router);

api.use(errorHandler);
api.use(notFoundHandler);
