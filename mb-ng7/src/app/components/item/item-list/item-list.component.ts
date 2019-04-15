import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService, ReactiveItemService } from './../../../services/services.index';
import { Router, ActivatedRoute } from '@angular/router';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    stagger,
    query
} from '@angular/animations';

@Component({
    selector: 'mbng7-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css'],
    animations: [
        trigger('itemState', [
            state('void', style({
                opacity: 0,
                transform: 'translateX(-50px)'
            })),
            state('*', style({
                transform: 'translateX(0px)'
            })),
            transition('void => *', [
               animate('0.5s ease-in-out')
            ])
        ])
    ]
})

export class ItemListComponent implements OnInit, OnDestroy {

    items: any[];
    searchResults:any[];
    loading:boolean = false;
    newItem: any;

    constructor(
        private itemService: ItemService,
        private reactiveItemService: ReactiveItemService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

        // Récupérer les éléments du serveur 
        this.itemService.getData().subscribe(
            (data: any) => {
                this.items = data;

                let editIdParam = activatedRoute.snapshot.params['id'];
                if(editIdParam){
                    this.newItem = this.items.find(item => item.id == editIdParam);
                }
            }
        );

        this.itemService.testFactory();
    }

    ngOnInit() {
        this.itemService.get();
    }

    ngOnDestroy(){
        
    }

    onDeleteItem(index: number) {
        // this.reactiveItemService.delete(index);
        let idParam = this.items[index].id;
        this.itemService.delete(idParam).subscribe(
            (data) => {
                this.ngOnInit();
            },
            (error) => { console.error(error); },
            () => { console.log('Le flux de suppression est terminé.'); }
        )
    }

    showItemDetails(id: any) {
        this.router.navigate(['/', id], { relativeTo: this.activatedRoute })
    }

    updateResults(ev:any){
        this.searchResults = ev;
    }

}