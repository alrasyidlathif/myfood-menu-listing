/**
 * Required External Modules and Interfaces
 */
import express from "express";
import * as ItemController from "./items.controller";

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

// GET items
itemsRouter.get("/", ItemController.getAllItems)

// GET items/:id
itemsRouter.get("/:id", ItemController.getItem)

// POST items
itemsRouter.post("/", ItemController.postItem)

// PUT items/:id
itemsRouter.put("/:id", ItemController.putItem)

// DELETE items/:id
itemsRouter.delete("/:id", ItemController.deleteItem)
