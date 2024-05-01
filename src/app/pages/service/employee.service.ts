import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpRequestService } from "./http-request.service";
import { BehaviorSubject } from "rxjs";
import { IEmployee } from "../models/general/employee";


@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    
    private baseUrl = '/v1/employee';
    
    private _employees = new BehaviorSubject<IEmployee[]>([]);

    employees = this._employees.asObservable();
    formData!: any;
        
    constructor(private http: HttpRequestService, private fb: FormBuilder){ }
    
    getData() {
        const data = this.http.get<IEmployee[]>(`${this.baseUrl}`);
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._employees.next(data);
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

    getDataById(id: string) {

        return this.http.get<IEmployee>(`${this.baseUrl}/${id}`);


     
    }

    create(payload: any){
        return this.http.post(`${this.baseUrl}`,payload);
    }
    update(payload: any){
        return this.http.patch(`${this.baseUrl}/${payload.id}`,payload);
    }
    remove(payload: any){
        return this.http.delete(`${this.baseUrl}/${payload.id}`);
    }
}