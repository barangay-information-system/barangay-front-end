import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestService } from './http-request.service';
import { FormBuilder, Validators } from '@angular/forms';

const API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
    providedIn: 'root',
})
export class UserService {
    private baseUrl = '/v1/user';

    form = this.fb.group({
        emp_id: ['',[Validators.required]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        mobile_email: ['', [Validators.required]],
       
    });

    private _users = new BehaviorSubject<any[]>([]);

    users = this._users.asObservable();

    constructor(
        // private http: HttpClient,
        private http: HttpRequestService,
        private fb: FormBuilder
    ) {}

    getUserData() {
        const data = this.http.get<any[]>(`${this.baseUrl}`);
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._users.next(data);
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
    create() {
        return this.http.post(`${this.baseUrl}/register`, this.form.value);
    }
    getUser(id: string) {
        return this.http.get(`${this.baseUrl}/byId/${id}`);
    }
}
