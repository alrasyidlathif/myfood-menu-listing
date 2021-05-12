/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */
let items: Items = {
    1: {
        id: 1,
        food: "Burger",
        price: 599,
        description: "Tasty",
    },
    2: {
        id: 2,
        food: "Pizza",
        price: 299,
        description: "Cheesy",
    },
    3: {
        id: 3,
        food: "Tea",
        price: 3,
        description: "Relaxing",
    }
};

/**
 * Service Methods
 */
export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export async function create(newItem: BaseItem): Promise<Item> {
    const id = new Date().valueOf();

    items[id] = {
        id,
        ...newItem,
    };

    return items[id];
}

export async function update(id: number, itemUpdate: BaseItem): Promise<Item | null> {
    const item = await find(id);
  
    if (!item) {
        return null;
    }
    
    items[id] = { id, ...itemUpdate };
  
    return items[id];
};

export async function remove(id: number): Promise<null | void> {
    const item = await find(id);
  
    if (!item) {
        return null;
    }
  
    delete items[id];
};
