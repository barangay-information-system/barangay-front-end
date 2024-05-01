import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpRequestService } from "./http-request.service";


@Injectable({
    providedIn: 'root',
})
export class BusinessPermitService {
    
    private baseUrl = '/v1/business-permit';
    
    formData!: any;
    

    
        
    constructor(private http: HttpRequestService, private fb: FormBuilder){ }

    
    getData() {
      return this.http.get(`${this.baseUrl}`);
    }

    getDataById(id: string) {
     
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