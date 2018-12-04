import { Component, OnInit } from '@angular/core';
import { ItemService, ReactiveItemService } from './../../../services/services.index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mbng7-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

    items: any[];

    constructor(
        private itemService: ItemService,
        private reactiveItemService: ReactiveItemService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        // Récupérer les éléments du serveur 
        this.reactiveItemService.get().subscribe(
            (data: any) => {
                this.items = data;
            }
        )
    }

    onDeleteItem(index:number){
        this.reactiveItemService.delete(index);
    }

    showItemDetails(id: any) {
        this.router.navigate(['/', id], { relativeTo: this.activatedRoute })
    }

}