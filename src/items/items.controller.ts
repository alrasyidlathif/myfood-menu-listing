/**
 * Required External Modules and Interfaces
 */
import { Request, Response, NextFunction } from "express"
import * as ItemService from "./items.service"
import { BaseItem, Item } from "./item.interface"
import returnFormat from "../custom/return-format"
import GeneralError from "../custom/exception/general-error"

/**
 * Controller Definitions
 */
export async function getAllItems(
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> {
    try {
        const items: Item[] = await ItemService.findAll()
    
        return res.status(200).send(returnFormat(
            "00",
            "Success",
            {"items": items}
        ))
    } catch (e) {
        return next(new GeneralError(500, "99", "System Error", e.message))
    }
}

export async function getItem(
    req: Request, 
    res: Response,
    next: NextFunction
): Promise<Response | void> {
    const id: number = Number(req.params.id)

    if (isNaN(id)) {
        return next( new GeneralError(400, "99", "Bad Request"))
    }

    try {
        const item: Item = await ItemService.find(id)
  
        if (item) {
            return res.status(200).send(returnFormat(
                "00",
                "Success",
                {"item": item}
            ))
        }

        return next( new GeneralError(404, "99", "Item Not Found"))
    } catch (e) {
        return next(new GeneralError(500, "99", "System Error", e.message))
    }
}

export async function postItem(
    req: Request, 
    res: Response,
    next: NextFunction
): Promise<Response | void> {
    try {
        const item: BaseItem = req.body
    
        const newItem = await ItemService.create(item)
    
        return res.status(201).send(returnFormat(
            "00", 
            "Success",
            {"new_item": newItem}
        ))
    } catch (e) {
        return next(new GeneralError(500, "99", "System Error", e.message))
    }
}

export async function putItem(
    req: Request, 
    res: Response,
    next: NextFunction
): Promise<Response | void> {
    const id: number = parseInt(req.params.id, 10)

    try {
        const itemUpdate: Item = req.body
  
        const existingItem: Item = await ItemService.find(id)
  
        if (existingItem) {
            const updatedItem = await ItemService.update(id, itemUpdate)
            return res.status(200).send(returnFormat(
                "00",
                "Success",
                {"updated_item": updatedItem}
            ))
        }
  
        const newItem = await ItemService.create(itemUpdate)
  
        return res.status(201).send(returnFormat(
            "00",
            "Success",
            {"new_item": newItem}
        ))
    } catch (e) {
        return next(new GeneralError(500, "99", "System Error", e.message))
    }
}

export async function deleteItem(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> {
    try {
        const id: number = parseInt(req.params.id, 10)
        await ItemService.remove(id)
    
        return res.status(204).send(returnFormat("00", "Success"))
    } catch (e) {
        return next(new GeneralError(500, "99", "System Error", e.message))
    }
}
