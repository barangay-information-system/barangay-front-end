import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { IOwnerTaxPayerInformation } from '../../models/business-permit/owner-taxpayer-information';

const AUTH_API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class OwnerTaxPayerInformationService {

    private baseUrl = '/v1/owner-taxpayer-information';

    private _data = new BehaviorSubject<IOwnerTaxPayerInformation[]>([]);

    data = this._data.asObservable();

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

  
    getData() {
        return this.http.get(`${this.baseUrl}`);
    }

}
