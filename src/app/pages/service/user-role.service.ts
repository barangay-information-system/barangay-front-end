import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IUserRole, IUserRoleFormGroup } from '../models/user-role';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserRoleService {
    private baseUrl = '/v1/user-role';

    formData!: IUserRole;

    private _userRoles = new BehaviorSubject<IUserRole[]>([]);

    userRoles = this._userRoles.asObservable();

    form = this.fb.group({
        id: '',
        sequence: [0],
        code: '',
        name: ['', Validators.required],
        description: [''],
    });

    constructor(private http: HttpRequestService, private fb: FormBuilder) {}

    getUserRoles() {
        return this.http.get<IUserRole[]>(`${this.baseUrl}`);
    }

    getRolesData() {
        const data = this.http.get<IUserRole[]>(`${this.baseUrl}`);
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._userRoles.next(data);
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

    getUserRole(id: string) {
        // const data = this.http.get<UserRole[]>(`${this.baseUrl}`);
        // data.subscribe({
        //   next: res => {
        //     const result: any = res;
        //     const { data } = result;
        //     console.log(data);
        //   },
        //   error: err => {
        //     console.log({
        //       error: err,
        //     });
        //   },
        //   complete: () => {
        //     console.log('completed');
        //   },
        // });
    }

    create() {
        return this.http.post(`${this.baseUrl}`, this.form.value);
    }
    update() {
        return this.http.patch(
            `${this.baseUrl}/${this.form.value.id}`,
            this.form.value
        );
    }
    remove(payload: any) {
        return this.http.delete(`${this.baseUrl}/${payload.id}`);
    }
}
