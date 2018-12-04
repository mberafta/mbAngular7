import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mbng7-main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css']
})

export class MainHeaderComponent {

    @Input()
    title: string;

    constructor(){
        
    }
}