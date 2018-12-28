import { ReactiveItemService } from './../../services/reactive-item.service';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
    selector: 'mbng7-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit{

    currentCount:number;

    constructor(private ris:ReactiveItemService, private is:ItemService){

    }

    ngOnInit(){
        this.is.get().subscribe(data => {
            this.currentCount = (data as any[]).length;
        });
    }

}