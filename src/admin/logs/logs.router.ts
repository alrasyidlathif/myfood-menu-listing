/**
 * Required External Modules and Interfaces
 */
import express from "express";
import { authHandler } from "../../middleware/auth.middleware";
import * as LogsController from "./logs.controller";

/**
 * Router Definition
 */
export const logsRouter = express.Router();

// GET items
logsRouter.get("/", authHandler, LogsController.getAllLogs)
