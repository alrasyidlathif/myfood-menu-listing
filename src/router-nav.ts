import express from "express";

export const router = express.Router();

import { itemsRouter } from "./items/items.router";
import { logsRouter } from "./admin/logs/logs.router";
import { adminRouter } from "./admin/admin.router";

router.use('/items', itemsRouter)
router.use('/admin/error-logs', logsRouter)
router.use('/admin', adminRouter)
