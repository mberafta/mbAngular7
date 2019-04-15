import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mb-tab-item',
    templateUrl: './tab-item.component.html',
    styleUrls: ['./tab-item.component.css']
})

export class TabItemComponent implements OnInit {

    // Propriétés
    @Input() title: string;
    active: boolean = false;
    name: string;
    content:string;

    constructor() {

    }

    // Cycles de vie
    ngOnInit() {

    }

    // Méthodes

}