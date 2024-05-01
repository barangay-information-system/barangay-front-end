import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { IApplicationDetails } from '../../models/business-permit/application-details';
import { ApplicationProcessModel } from '../../models/statuses/appllication-process';
import { StatusApplicationModel } from '../../models/statuses/status-of-application';
import { TypeApplicationModel } from '../../models/statuses/type-of-application';
import { ModeOfPaymentModel } from '../../models/statuses/mode-of-payment';
import { BusinessInformationModel } from '../../models/business-permit/business-information';
import { TypeBusinessModal } from '../../models/statuses/type-of-business';

const AUTH_API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class ApplicationDetailsServices {
    private baseUrl = '/v1/application-details';

    private _data = new BehaviorSubject<IApplicationDetails[]>([]);

    data = this._data.asObservable();

    form = this.fb.group({
        id: '',
        tax_year: new Date(),
        application_process: new ApplicationProcessModel(),
        application_status: new StatusApplicationModel(),
        application_type: new TypeApplicationModel(),
        mode_payment: new ModeOfPaymentModel(),

        business: this.fb.group({
            id: '',
            transaction_no: '',
            business_id_no: '',
            business_name: '',
            trade_name: '',

            type_of_business: new TypeBusinessModal(),

            tin_number: '',
            dti_sec_registered_date: new Date(),
            dti_sec_registered_no: '',
        }),
        owner_taxpayer_information: this.fb.group({
            last_name: '',
            first_name: '',
            middle_name: '',
            suffix: '',
            gender: 'Male',

            mobile_number: '',
            tel_fax_number: '',
            email_address: '',
        }),
        business_operation: this.fb.group({
            business_activity: '',
            business_area: 0,
            floor_area: 0,
            no_male: 0,
            no_female: 0,
            no_residing_lgu: 0,
            no_in_establishment: 0,
            no_van_truck: 0,
            no_motorcycle: 0,
            is_own_rent: false,
            tax_declaration_no: '',
            property_index_no: '',
            is_tax_incentives: false,
            ctc: '',
            is_micro_registered: false,
            is_bsp_registered: false,
        }),
        line_businesses: this.fb.array([]),
        measure_paxes: this.fb.array([]),
    });

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

    getData() {
        const data = this.http.get<IApplicationDetails[]>(`${this.baseUrl}`);
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

    create(){
        return this.http.post(`${this.baseUrl}`, this.form.value);
    }
}
