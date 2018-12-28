import { ItemService } from './../../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mbng7-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.css']
})

export class ItemDetailsComponent implements OnInit {

    // Item qui va être affiché sur le détail
    currentItem: any;

    constructor(public activatedRoute: ActivatedRoute, public itemService: ItemService) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((p) => {
            this.itemService.getData().subscribe((data) => {
                let castedData = [...(data as Array<any>)];
                console.log(castedData);
                this.currentItem = castedData.find(x => x.id == p['id']);
            });
        });
    }

}