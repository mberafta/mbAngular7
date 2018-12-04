import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Item {
    id: number;
    name: string;
    details: string;

    constructor(newId?: number, newName?: string, newDetails?: string) {
        this.id = newId || null;
        this.name = newName || '';
        this.details = newDetails || '';
    }

}

const ITEMS = [
    new Item(1, "Mikaviko", "Fan de Batman"),
    new Item(2, "Thomas", "Fan de Robin"),
    new Item(3, "MamaZilla", "Fan des pizzas"),
    new Item(4, "Flal", "Fan du Ricard"),
    new Item(5, "Yoann", "Fan des défaites à FIFA")
];

@Injectable({
    providedIn: 'root'
})
export class ReactiveItemService {

    tempData: Item[] = [...ITEMS];
    data: Subject<Item[]> = new BehaviorSubject<Item[]>(this.tempData);

    add(item: Item) {
        this.tempData.push(item);
        this.data.next([...this.tempData]);
    }

    get(): Subject<Item[]> {
        return this.data;
    }

    delete(index: number) {
        this.tempData.splice(index, 1);
        this.data.next(this.tempData);
    }

}

