import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from '../http-request.service';

const API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
    providedIn: 'root',
})
export class ResidentService {
    private baseUrl = '/v1/resident';

    form = this.fb.group({

        prefix: [''],
        firstname: ['',[Validators.required]],
        middlename: [''],
        lastname: ['',[Validators.required]],
        suffix:  [''],
        birthdate: new Date(),
        gender: ['',[Validators.required]],
        religion: [''],
        civilStatus: ['',[Validators.required]],
        affiliations: ['',[Validators.required]],
        barangay: localStorage.getItem('barangay'),
        purok: {},
       
    });

    private _data = new BehaviorSubject<any[]>([]);

    data = this._data.asObservable();

    constructor(
        private http: HttpRequestService,
        private fb: FormBuilder
    ) {}

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
    getUser(id: string) {
        // return this.http.get(`${this.baseUrl}/byId/${id}`);
    }
}
