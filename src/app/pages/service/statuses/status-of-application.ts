import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { IStatusApplication } from '../../models/statuses/status-of-application';

@Injectable({
    providedIn: 'root',
})
export class ApplicationStatusService {

    private baseUrl = '/v1/status-of-application';

    private _data = new BehaviorSubject<IStatusApplication[]>([]);

    data_status = this._data.asObservable();

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

  
    getData() {
        const data = this.http.get<IStatusApplication[]>(`${this.baseUrl}`);
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._data.next(data);
                // this.setListData(data);
            },
            error: (err) => {
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
