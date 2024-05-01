import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, delay, of as observableOf } from 'rxjs';
import { HttpRequestService } from "./http-request.service";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, Validators } from "@angular/forms";


@Injectable({
    providedIn: 'root',
})
export class UserFormService {
    
    private baseUrl = '/v1/user-forms';
    
//     formData!: UserRole;
    
//     // form: UserRole = {
//     //     sequence: 0,
//     //     code: '',
//     //     name: '',
//     //     description: ''
//     // }

    
//   form = this.fb.group({
//       id: '',
//       sequence: [0],
//       code: ['', Validators.required],
//       name: ['', Validators.required],
//       description: [''],
//   }) as IUserRoleFormGroup;

        
    constructor(private http: HttpRequestService, private fb: FormBuilder){ }

    // //#region Common Function
    //     public pagerList(data: UserRole[], pager: ListPager) {
    //         return data.slice(pager.pageSize! * (pager.pageIndex! - 1), pager.pageSize! * pager.pageIndex!);
    //     }
    // //#endregion
    
    getUserRoles() {
      return this.http.get(`${this.baseUrl}`);
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

    // create(payload: UserRole){
    //     return this.http.post(`${this.baseUrl}`,payload);
    // }
    // update(payload: UserRole){
    //     return this.http.patch(`${this.baseUrl}/${payload.id}`,payload);
    // }
    // remove(payload: UserRole){
    //     return this.http.delete(`${this.baseUrl}/${payload.id}`);
    // }
}