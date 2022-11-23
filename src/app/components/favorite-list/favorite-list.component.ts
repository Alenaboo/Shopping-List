import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'dream-favorite-list',
    templateUrl: './favorite-list.component.html'
})
export class FavoriteListComponent {
    @Input() list: string[] = [];
    @Output() listChange: EventEmitter<string[]> = new EventEmitter<string[]>();

    @Output() addFavorite: EventEmitter<string> = new EventEmitter<string>();

}