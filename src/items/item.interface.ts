export interface BaseItem {
    food: string;
    price: number;
    description: string;
}
  
export interface Item extends BaseItem {
    id: number;
}
