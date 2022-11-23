import { Injectable } from "@angular/core";
import { IStorageData } from "../models/storage-data.interface";

@Injectable({ providedIn: 'root'})
export class ShoppingStorageService {

    /**
    * @description identificativo per la lettura/scrittura dei dati nel local storage
    */
    private readonly SHOPPING_LIST_ID = 'SHOPPING_LIST_ID';

    /**
     * @description per recuperare i dati della lista dal local storage
     */
    loadData(): IStorageData {
        const shoppingItemsStr = localStorage.getItem(this.SHOPPING_LIST_ID);
        return shoppingItemsStr
            ? JSON.parse(shoppingItemsStr)
            : [];
    }

    /**
     * @description per salvare i dati della lista nel local storage
     */
    saveData(shoppingItems: IStorageData): void {
        localStorage.setItem(this.SHOPPING_LIST_ID, JSON.stringify(shoppingItems));
    }

}