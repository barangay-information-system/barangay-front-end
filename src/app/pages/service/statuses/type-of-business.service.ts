import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { ITypeBusiness } from '../../models/statuses/type-of-business';

@Injectable({
    providedIn: 'root',
})
export class TypeBusinessService {

    private baseUrl = '/v1/type-of-business';

    private _data = new BehaviorSubject<ITypeBusiness[]>([]);

    data_types_business = this._data.asObservable();

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

  
    // getData() {
    //     return this.http.get(`${this.baseUrl}`);
    // }

    
    getData() {
        const data = this.http.get<ITypeBusiness[]>(`${this.baseUrl}`);
        data.subscribe({
        next: res => {
            const result: any = res;
            const { data } = result;
            this._data.next(data);
            // this.setListData(data);
        },
        error: err => {
            console.log({
            error: err,
            });
        },
        complete: () => {
            console.log('completed');
        },
        });
    }
    

}
