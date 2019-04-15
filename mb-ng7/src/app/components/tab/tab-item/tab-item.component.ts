import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
    selector: 'mb-tab-item',
    templateUrl: './tab-item.component.html',
    styles: [`
        .hidden{
            display:none;
        }
    `]
})

export class TabItemComponent implements OnInit {

    // Propriétés
    @Input() title: string;
    active: boolean = false;
    name: string;
    content: string;

    constructor(private elRef:ElementRef) {
        
    }

    // Cycles de vie
    ngOnInit() {
        
    }

    // Méthodes

}