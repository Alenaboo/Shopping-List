import { Component, OnInit } from "@angular/core";
import { IShoppingItem } from "./models/shopping-item.interface";
import { ShoppingStorageService } from "./services/shopping-storage.service";



@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    /**
     * @description titolo della pagina
     */
    title = 'La spesa intelligente';

    public shoppingList: IShoppingItem[] = [];
    public favoriteList: string[] = [];

    constructor(
        private shoppingStorageService: ShoppingStorageService,
    ) {}

    /**
     * @description operazioni eseguite all'inizializzazione del componente
     */
    ngOnInit(): void {
        const storageData = this.shoppingStorageService.loadData();
        this.shoppingList = storageData.shoppingList || [];
        this.favoriteList = storageData.favoriteList || [];
    }

    save(): void {
        this.shoppingStorageService.saveData({
            shoppingList: this.shoppingList,
            favoriteList: this.favoriteList
        });
    }

}

