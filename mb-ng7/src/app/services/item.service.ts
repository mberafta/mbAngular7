import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class ItemService {

    apiURL: string = '/api/items';
    httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {

    }

    get() {
        return this.http.get(this.apiURL);
    }

    post(obj: any) {
        return this.http.post(this.apiURL, obj, {
            headers: this.httpHeaders
        });
    }
}