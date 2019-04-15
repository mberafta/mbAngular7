import { Injectable, Inject, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ItemFactory } from '../factories/item.factory';

@Injectable()
export class ItemService {

    httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    public data: Subject<any> = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient,
        @Inject('API_URL_ITEMS') private apiItemsURL: string,
        @Inject('API_URL_SEARCH') private apiSearchURL: string,
        private itemFactory: ItemFactory
    ) {

    }

    getData() {
        return this.data;
    }

    get(id?: any) {

        let params = id ? { id: id } : null;

        this.http.get(this.apiItemsURL, {
            headers: this.httpHeaders,
            params: params
        }).subscribe((responseData: any[]) => {
            this.data.next(responseData);
        });
    }

    post(obj: any) {
        return this.http.post(this.apiItemsURL, obj, {
            headers: this.httpHeaders
        });
    }

    delete(id: any) {
        return this.http.delete(this.apiItemsURL, {
            headers: this.httpHeaders,
            params: {
                id: id
            }
        });
    }

    testFactory() {
        this.itemFactory.test();
    }

    search(query: string) {
        return this.http.get(this.apiSearchURL, {
            headers: this.httpHeaders,
            params: {
                search: query
            }
        });
    }

}