import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestService } from './http-request.service';
import { FormBuilder, Validators } from '@angular/forms';
import {
    IDocumentRequirements,
    IDocumentRequirementsFormGroup,
} from '../models/requirements/document-requirements';
import { TypeApplicationModel } from '../models/statuses/type-of-application';

const API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
    providedIn: 'root',
})
export class DocumentRequirementsService {
    private baseUrl = '/v1/list-document-requirements';

    form = this.fb.group({
        id: [''],
        code: [''],
        documentTitle: ['',Validators.required],
        kindOfPermit: [''],
        status: ['Active'],
        sequence: [0],
        application_type: [new TypeApplicationModel()],
    }) as IDocumentRequirementsFormGroup;

    resetForm = this.fb.group({
        id: [''],
        code: [''],
        documentTitle: ['',Validators.required],
        kindOfPermit: [''],
        status: ['Active'],
        sequence: [0],
        application_type: [new TypeApplicationModel()],
    }) as IDocumentRequirementsFormGroup;


    private _data = new BehaviorSubject<IDocumentRequirements[]>([]);

    data = this._data.asObservable();

    constructor(
        private http: HttpRequestService,
        private fb: FormBuilder
    ) {}

    getData() {
        const data = this.http.get<IDocumentRequirements[]>(`${this.baseUrl}`);
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
    update(){
        const payload = this.form.value;
        return this.http.patch(`${this.baseUrl}/${payload.id}`, payload);
    }
    remove(payload: any){
        return this.http.delete(`${this.baseUrl}/${payload.id}`);
    }
}
