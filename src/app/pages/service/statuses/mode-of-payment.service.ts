import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { IModeOfPayment } from '../../models/statuses/mode-of-payment';

@Injectable({
    providedIn: 'root',
})
export class ModeOfPaymentService {

    private baseUrl = '/v1/mode-of-payment';

    private _data = new BehaviorSubject<IModeOfPayment[]>([]);

    data_payments = this._data.asObservable();

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

  
    getData() {
        const data = this.http.get<IModeOfPayment[]>(`${this.baseUrl}`);
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
