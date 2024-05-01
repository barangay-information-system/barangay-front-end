import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { IApplicationProcess } from '../../models/statuses/appllication-process';

@Injectable({
    providedIn: 'root',
})
export class ApplicationProcessService {

    private baseUrl = '/v1/application-process';

    private _data = new BehaviorSubject<IApplicationProcess[]>([]);

    data_applications = this._data.asObservable();

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

  
    getData() {
        return this.http.get(`${this.baseUrl}`);
    }
    

}
