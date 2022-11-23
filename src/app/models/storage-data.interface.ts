import { IShoppingItem } from "./shopping-item.interface";

export interface IStorageData {
    shoppingList: IShoppingItem[];
    favoriteList: string[];
}