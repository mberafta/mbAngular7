import { Component, Input, Output, EventEmitter, KeyValueDiffers, DoCheck } from '@angular/core';

@Component({
    selector: 'mb-ng7-comment',
    templateUrl: './comment.component.html'
})

export class CommentComponent implements DoCheck {

    @Input() comment: any;
    @Output() OnRemove: EventEmitter<any>;
    differ: any;
    likes: number;

    constructor(differs: KeyValueDiffers) {
        this.differ = differs.find([]).create();
        this.OnRemove = new EventEmitter();
    }

    ngDoCheck() {
        const changes = this.differ.diff(this.comment);

        if (changes) {
            changes.forEachAddedItem(it => console.log('ADDED ->', it));
            changes.forEachRemovedItem(it => console.log('REMOVED ->', it));
            changes.forEachChangedItem(it => console.log('CHANGED ->', it));
        }
    }

    like(): void {
        this.comment.likes++;
    }

}