/**
 * Required External Modules and Interfaces
 */
import express from "express";
import * as LogsController from "./logs.controller";

/**
 * Router Definition
 */
export const logsRouter = express.Router();

// GET items
logsRouter.get("/", LogsController.getAllLogs)
