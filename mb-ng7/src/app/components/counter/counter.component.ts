import { ReactiveItemService } from './../../services/reactive-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mbng7-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit{

    currentCount:number;

    constructor(private ris:ReactiveItemService){

    }

    ngOnInit(){
        this.ris.get().subscribe(data => {
            this.currentCount = data.length;
        });
    }

}