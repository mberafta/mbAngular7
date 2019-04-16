import { ReactiveItemService } from './../../services/reactive-item.service';

import {
    Component,
    OnInit,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    OnDestroy,
    AfterContentChecked,
    OnChanges,
    SimpleChange,
    ChangeDetectionStrategy,
    SimpleChanges
} from '@angular/core';

import { ItemService } from 'src/app/services/item.service';

@Component({
    selector: 'mbng7-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})

export class CounterComponent implements OnInit, OnDestroy, OnChanges {
    currentCount: number;
    testValue: number = 0;

    constructor(private ris: ReactiveItemService, private is: ItemService) {

    }

    ngOnInit() {
        console.log('COUNTER COMPONENT \"ON INIT\"');
        this.is.getData().subscribe((data) => {
            this.currentCount = (data as any[]).length;
        });

        this.testValue = 1;
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('COUNTER COMPONENT, ON CHANGES -> ', changes);
    }

    ngOnDestroy() {

    }

    changeValue(): void {
        this.testValue = Math.floor(Math.random() * 100);
    }

}