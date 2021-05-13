/**
 * Required External Modules and Interfaces
 */
import express from "express";
import * as AdminController from "./admin.controller";

/**
 * Router Definition
 */
export const adminRouter = express.Router();

// GET items
adminRouter.post("/login", AdminController.login)
