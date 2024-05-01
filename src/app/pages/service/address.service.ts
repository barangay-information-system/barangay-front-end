import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from './http-request.service';
import { BehaviorSubject } from 'rxjs';
import { IRegion } from '../models/address/region';
import { IProvince } from '../models/address/province';
import { IMunicipality } from '../models/address/municipality';
import { IBarangay } from '../models/address/barangay';
import { IZipcode } from '../models/address/zipcode';

@Injectable({
    providedIn: 'root',
})
export class AddressService {
    private baseURL = '/v1/list-';

    private _dataRegion = new BehaviorSubject<IRegion[]>([]);
    dataRegion = this._dataRegion.asObservable();

    private _dataProvince = new BehaviorSubject<IProvince[]>([]);
    dataProvince = this._dataProvince.asObservable();

    private _dataCityMun = new BehaviorSubject<IMunicipality[]>([]);
    dataCityMun = this._dataCityMun.asObservable();

    private _dataBarangay = new BehaviorSubject<IBarangay[]>([]);
    dataBarangay = this._dataBarangay.asObservable();

    private _dataZipcode = new BehaviorSubject<IZipcode[]>([]);
    dataZipcode = this._dataZipcode.asObservable();

    constructor(private http: HttpRequestService, private fb: FormBuilder) {}

    getRegion() {
        const data = this.http.get<IRegion[]>(`${this.baseURL}region`);
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._dataRegion.next(data);
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
    getProvince(id: number) {
        const data = this.http.get<IProvince[]>(
            `${this.baseURL}province/byRegion/${id}`
        );
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._dataProvince.next(data);
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
    getCityMunicipality(id: string) {
        const data = this.http.get<IMunicipality[]>(
            `${this.baseURL}citymun/byProvince/${id}`
        );
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._dataCityMun.next(data);
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
    getBarangay(id: number) {
        const data = this.http.get<IBarangay[]>(
            `${this.baseURL}barangay/byCityMun/${id}`
        );
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._dataBarangay.next(data);
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

    getZipcode(id: number) {
        const data = this.http.get<IZipcode[]>(
            `${this.baseURL}zipcode/byCityMun/${id}`
        );
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._dataZipcode.next(data);
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

    // getData() {
    //   return this.http.get(`${this.baseUrl}`);
    // }

    // getDataById(id: string) {

    // }

    // create(payload: any){
    //     return this.http.post(`${this.baseUrl}`,payload);
    // }
    // update(payload: any){
    //     return this.http.patch(`${this.baseUrl}/${payload.id}`,payload);
    // }
    // remove(payload: any){
    //     return this.http.delete(`${this.baseUrl}/${payload.id}`);
    // }
}
