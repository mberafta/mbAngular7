import { TabItemComponent } from './../tab-item/tab-item.component';
import { Component, AfterContentInit, OnInit, QueryList, ContentChildren, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'mb-tab-container',
    templateUrl: './tab-container.component.html'
})

export class TabContainerComponent implements AfterContentInit {

    @ContentChildren(TabItemComponent) tabs: QueryList<TabItemComponent>;

    ngAfterContentInit(): void {
        this.tabs.toArray()[0].active = true;
    }

    setActive(tab: TabItemComponent): void {
        this.tabs.toArray().forEach(t => t.active = false);
        tab.active = true;
    }

    constructor() {

    }

}