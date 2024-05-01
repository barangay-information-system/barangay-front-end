import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { ITypeApplication } from '../../models/statuses/type-of-application';

@Injectable({
    providedIn: 'root',
})
export class ApplicationTypeService {
    private baseUrl = '/v1/type-of-application';

    private _data = new BehaviorSubject<ITypeApplication[]>([]);

    data_types_application = this._data.asObservable();

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

    getData() {
        const data = this.http.get<ITypeApplication[]>(`${this.baseUrl}`);
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
