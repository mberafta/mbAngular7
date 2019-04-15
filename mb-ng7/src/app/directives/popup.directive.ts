import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[popup]',
    exportAs:'popup'
})

export class PopupDirective {

    @Input() message: string = "Default message";

    constructor(private elRef: ElementRef) {
        console.log(elRef);
    }

    @HostListener('click') displayMessage():void{
        alert(this.message);
    }
}