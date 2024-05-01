import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { IOwnerTaxPayerAddress } from '../../models/business-permit/owner-taxpayer-address';

const AUTH_API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class OwnerTaxPayerAddressService {

    private baseUrl = '/v1/owner-taxpayer-address';

    private _data = new BehaviorSubject<IOwnerTaxPayerAddress[]>([]);

    data = this._data.asObservable();

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

  
    getData() {
        return this.http.get(`${this.baseUrl}`);
    }

}
