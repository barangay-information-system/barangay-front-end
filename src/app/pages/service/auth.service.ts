import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient, private router: Router) {}
    ngOnInit() {
        if (this.isUserLoggedIn()) {
            this.router.navigate(['']);
        } else {
            this.router.navigate(['/login']);
        }
    }
    login(payload: any): Observable<any> {
        const rememberMe = false;
        return this.http.post(AUTH_API + '/user/login', payload, httpOptions);
    }

    async logout() {
        const payload = {
            refresh_token: localStorage.getItem('refresh_token') ?? '',
        };
        this.removeSession();
        return this.http
            .post(AUTH_API + '/user/logout', payload, httpOptions)
            .subscribe((data) => {
                console.log(data);
                this.router.navigate(['/login']);
            });
    }

    setSession(data: any) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('firstname', data.firstname);
        localStorage.setItem('middlename', data.middlename);
        localStorage.setItem('lastname', data.lastname);
        localStorage.setItem('suffix', data.suffix);
        localStorage.setItem('barangay', data.barangay);
        localStorage.setItem('purok', data.purok);
        localStorage.setItem('department', data.department);
        localStorage.setItem('position', data.position);
        localStorage.setItem('emp_type', data.emp_type);
        localStorage.setItem('time_shift', data.time_shift);
        localStorage.setItem('isVerified', data.isVerified);
        localStorage.setItem('isFirstTime', data.isFirstTime);
        localStorage.setItem('status', data.status);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

        localStorage.setItem('pkid', data.userId);
        localStorage.setItem('expires_at', '20');
    }

    removeSession() {
        localStorage.removeItem('username');
        localStorage.removeItem('firstname');
        localStorage.removeItem('middlename');
        localStorage.removeItem('lastname');
        localStorage.removeItem('suffix');
        localStorage.removeItem('barangay');
        localStorage.removeItem('purok');
        localStorage.removeItem('department');
        localStorage.removeItem('position');
        localStorage.removeItem('emp_type');
        localStorage.removeItem('time_shift');
        localStorage.removeItem('isVerified');
        localStorage.removeItem('isFirstTime');
        localStorage.removeItem('status');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        localStorage.removeItem('pkid');
        localStorage.removeItem('expires_at');
        this.router.navigate(['/login']);
    }

    isUserLoggedIn() {
        if (localStorage.getItem('access_token')) {
            return true;
        } else {
            return false;
        }
    }

    changePassword(payload: any) {
        return this.http.post(
            AUTH_API + '/user/change/password',
            payload,
            httpOptions
        );
    }

    resetPassword(param: string) {
        return this.http.post(
            AUTH_API + '/user/reset/password/' + param,
            {},
            httpOptions
        );
    }
}
