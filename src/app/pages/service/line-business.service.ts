import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestService } from './http-request.service';
import { FormBuilder, Validators } from '@angular/forms';
import {
    ILineBusiness,
    ILineBusinessFormGroup,
} from '../models/requirements/line-business';

const API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
    providedIn: 'root',
})
export class LineBusinessService {
    private baseUrl = '/v1/line-business';

    form = this.fb.group({
        id: [''],
        code: [''],
        description: ['', Validators.required],
        sequence: [0],
        status: ['Active'],
    }) as ILineBusinessFormGroup;
    resetForm = this.fb.group({
        id: [''],
        code: [''],
        description: ['', Validators.required],
        sequence: [0],
        status: ['Active'],
    }) as ILineBusinessFormGroup;

    private _data = new BehaviorSubject<ILineBusiness[]>([]);

    data = this._data.asObservable();

    constructor(private http: HttpRequestService, private fb: FormBuilder) {}

    getData() {
        const data = this.http.get<any[]>(`${this.baseUrl}`);
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._data.next(data);
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
    create() {
        return this.http.post(`${this.baseUrl}`, this.form.value);
    }
    update() {
        const payload = this.form.value;
        return this.http.patch(`${this.baseUrl}/${payload.id}`, payload);
    }
    remove(payload: any) {
        return this.http.delete(`${this.baseUrl}/${payload.id}`);
    }
}
