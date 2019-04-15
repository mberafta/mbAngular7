import { Component, HostBinding, HostListener, OnInit, Input } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

/**
 * Remarque(s):
 * - L'élément parent va appeler la directive de la manière suivante : 
 *      <p directive_name property_name=value>Contenu dans la balise</p>
 * - Le texte contenu dans la balise va être projeté dans le ng-content
 */

@Component({
    selector: '[mbMessage]',
    template: `
        <div class="card">
            {{header}}
        </div>
        <p class="text-primary">
            <ng-content></ng-content>
        </p>
    `
})

export class MbMessageDirective implements OnInit {

    @HostBinding('attr.class') cssClass = "text-info";
    @Input() header: string;

    constructor() {

    }

    ngOnInit() {
        console.log('header', this.header);
    }


}