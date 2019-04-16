import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, switchMap, tap } from 'rxjs/operators';

/**
 * Remarques : 
 * 
 * Si nous utilisons la propriétés 'styles', alors le style appliqué est encapsulé avec l'élément,
 * alors que si nous utilisons le tableay styleUrls ça n'est pas le cas. (shadow DOM p.455 ng-book 2)
 */

@Component({
    selector: 'mb-item-search',
    templateUrl: './item-search.component.html',
    styleUrls: ['./item-search.component.css']
})

export class ItemSearchComponent implements OnInit {

    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() results: EventEmitter<any[]> = new EventEmitter<any[]>();

    currentLoading: boolean = false;
    currentResults: any[] = [];

    constructor(private itemService: ItemService, private el: ElementRef) {

    }

    ngOnInit() {
        fromEvent(this.el.nativeElement, 'keyup')
            .pipe(
                tap(() => { 
                    this.loading.emit(true); 
                    this.currentLoading = true;
                }),
                map((e: any) => e.target.value),
                filter((text: string) => text.length > 1),
                debounceTime(250),
                switchMap((query: string) => this.itemService.search(query))
            )
            .subscribe(
                (results: any[]) => {
                    // this.loading.emit(false);
                    // this.results.emit(results);

                    this.currentLoading = false;
                    this.currentResults = results;

                }),
            (err: any) => {
                console.log(err);
                this.loading.emit(false);
            },
            () => {
                this.loading.emit(false);
            }
    }

}