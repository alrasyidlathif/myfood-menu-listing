import express from "express";

export const router = express.Router();

import { itemsRouter } from "./items/items.router";
import { logsRouter } from "./admin/logs/logs.router";

router.use('/items', itemsRouter)
router.use('/admin/error-logs', logsRouter)
