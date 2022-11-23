import { ENTER, COMMA } from "@angular/cdk/keycodes";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatChipInputEvent } from "@angular/material/chips";
import { IShoppingItem } from "../models/shopping-item.interface";

@Component({
    selector: 'dream-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
  })
export class ProductListComponent {
    @Input()
    title: string = 'Spesa';

    /**
     * @description configurazione per i caratteri di separazione per la lista
     */
    separatorKeysCodes: number[] = [ENTER, COMMA];

    /**
     * @description dati - lista di elementi con le loro caratteristiche
     */
    @Input()
    list: IShoppingItem[] = [];
    @Output()
    listChange: EventEmitter<IShoppingItem[]> = new EventEmitter<IShoppingItem[]>();

    @Input()
    favorites: string[] = [];
    @Output()
    favoritesChange: EventEmitter<string[]> = new EventEmitter<string[]>();

    /**
     * @description metodo per leggere l'input, aggiungerlo alla lista e sbiancare l'input 
     */
    onChipInput(event: MatChipInputEvent): void {
        this.add(event.value);
        // per sbiancare l'input dopo aver aggiunto il valore alla lista
        event.chipInput!.clear();
    }

    /**
     * @description metodo per l'aggiunta di un nuovo elemento alla lista
     */
    add(inputValue: string): void {
        // problema risolto elegantemente: salvo gli elementi sempre in maiuscolo
       const value = (inputValue || '').trim().toUpperCase();
        // verifico la presenza di duplicati
        const isDupe = this.list.some((listValue) => listValue.name === value);
        if (value && !isDupe) {
            this.list.push({
                name: value,
                qty: 1
            });
            this.listChange.emit(this.list);
        }
    }

    /**
     * @description per cancellare un elemento dalla lista
     */
    remove(itemIdx: number): void {
        this.list.splice(itemIdx, 1);
        this.listChange.emit(this.list);
    }

    /**
     * @description per cambiare la quantità di un elemento nella lista
     */
    setQty(item: IShoppingItem, increase: number): void {
        item.qty = item.qty + increase;
        this.listChange.emit(this.list);
    }

    addToFavorites(itemValue: string): void {
        this.favorites.push(itemValue);
        this.favoritesChange.emit(this.favorites);
    }
    
    removeFromFavorites(itemValue: string): void {
        const targetIdx = this.favorites.indexOf(itemValue);
        this.favorites.splice(targetIdx, 1);
        this.favoritesChange.emit(this.favorites);
    }
}