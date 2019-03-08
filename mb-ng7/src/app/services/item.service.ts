import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class ItemService {

    apiURL: string = '/api/items';
    httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    public data: Subject<any> = new BehaviorSubject<any[]>([]);

    constructor(private http: HttpClient) {

    }

    getData() {
        return this.data;
    }

    get(id?: any) {

        let params = id ? { id: id } : null;

        this.http.get(this.apiURL, {
            headers: this.httpHeaders,
            params: params
        }).subscribe((responseData: any[]) => {
            this.data.next(responseData);
        });
    }

    post(obj: any) {
        return this.http.post(this.apiURL, obj, {
            headers: this.httpHeaders
        });
    }

    delete(id: any) {
        return this.http.delete(this.apiURL, {
            headers: this.httpHeaders,
            params: {
                id: id
            }
        });
    }

}