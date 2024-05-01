import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import {
    BusinessAddressModel,
    IBusinessAddress,
} from '../../models/business-permit/business-address';
import { TypeBusinessModal } from '../../models/statuses/type-of-business';
import { TypeApplicationModel } from '../../models/statuses/type-of-application';
import { OwnerTaxPayerInformationModel } from '../../models/business-permit/owner-taxpayer-information';
import { ModeOfPaymentModel } from '../../models/statuses/mode-of-payment';
import { StatusApplicationModel } from '../../models/statuses/status-of-application';
import { IBusinessInformation } from '../../models/business-permit/business-information';
import { BusinessOperationModel } from '../../models/business-permit/business-operation';
import { IRegion, RegionModel } from '../../models/address/region';
import { IProvince, ProvinceModel } from '../../models/address/province';
import {
    IMunicipality,
    MunicipalityModel,
} from '../../models/address/municipality';
import { BarangayModel, IBarangay } from '../../models/address/barangay';
import { ApplicationProcessModel } from '../../models/statuses/appllication-process';

const AUTH_API = environment.backendUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class BusinessInformationService {
    public baddSelectedRegion: IRegion;
    public baddSelectedProvince: IProvince;
    public baddSelectedMunicipality: IMunicipality;
    public baddSelectedBarangay: IBarangay;

    public ownerSelectedRegion: IRegion;
    public ownerSelectedProvince: IProvince;
    public ownerSelectedMunicipality: IMunicipality;
    public ownerSelectedBarangay: IBarangay;

    private baseUrl = '/v1/business-information';
    private _data = new BehaviorSubject<IBusinessInformation[]>([]);

    data = this._data.asObservable();

    // form = this.fb.group({
    //     application_details: this.fb.group({
    //         mode_payment: '',
    //         application_type: '',
    //         application_status: new StatusApplicationModel(),
    //         tax_year: new Date(),
    //         application: '',
    //         application_process: new ApplicationProcessModel(),
    //     }),
    //     // id: '',
    //     // business_id_no: '',
    //     // business_name: '',
    //     // trade_name: '',
    //     // type_of_business: new TypeBusinessModal(),
    //     // tin_number: '',
    //     // dti_sec_registered_date: new Date(),
    //     // dti_sec_registered_no: '',
    //     owner_taxpayer_information: this.fb.group({
    //         last_name: '',
    //         first_name: '',
    //         middle_name: '',
    //         suffix: '',
    //         gender: 'Male',

    //         mobile_number: '',
    //         tel_fax_number: '',
    //         email_address: '',
    //     }),
    //     owner_taxpayer_address: this.fb.group({
    //         region_id: 0,
    //         region: '',
    //         province_id: 0,
    //         province: '',
    //         municipality_id: 0,
    //         municipality: '',
    //         barangay_id: 0,
    //         barangay: '',

    //         zipcode: '',
    //         house_bldng_no: '',
    //         building_name: '',
    //         lot_no: '',
    //         block_no: '',
    //         street: '',
    //         subdivision: '',
    //     }),
    //     business_operation: this.fb.group({
    //         business_activity: '',
    //         business_area: 0,
    //         floor_area: 0,
    //         no_male: 0,
    //         no_female: 0,
    //         no_residing_lgu: 0,
    //         no_in_establishment: 0,
    //         no_van_truck: 0,
    //         no_motorcycle: 0,
    //         is_own_rent: false,
    //         tax_declaration_no: '',
    //         property_index_no: '',
    //         is_tax_incentives: false,
    //         ctc: '',
    //         is_micro_registered: false,
    //         is_bsp_registered: false,
    //     }),
    //     business_address: this.fb.group({
    //         region_id: 0,
    //         region: '',
    //         province_id: 0,
    //         province: '',
    //         municipality_id: 0,
    //         municipality: '',
    //         barangay_id: 0,
    //         barangay: '',

    //         zipcode: '',
    //         house_bldng_no: '',
    //         building_name: '',
    //         lot_no: '',
    //         block_no: '',
    //         street: '',
    //         subdivision: '',
    //     }),
    //     line_businesses: this.fb.array([]),
    //     measure_paxes: this.fb.array([]),
    // });

    // newForm = this.fb.group({
    //     id: '',
    //     mode_payment: '',
    //     application_type: '',
    //     application_status: new StatusApplicationModel(),
    //     tax_year: new Date(),
    //     application: '',
    //     application_process: new ApplicationProcessModel(),

    //     busi_info: this.fb.group({
    //         id: '',
    //         business_id_no: '',
    //         business_name: '',
    //         trade_name: '',
    //         type_of_business: new TypeBusinessModal(),
    //         tin_number: '',
    //         dti_sec_registered_date: new Date(),
    //         dti_sec_registered_no: '',
            
    //         owner_taxpayer_information: this.fb.group({
    //             last_name: '',
    //             first_name: '',
    //             middle_name: '',
    //             suffix: '',
    //             gender: 'Male',

    //             mobile_number: '',
    //             tel_fax_number: '',
    //             email_address: '',
    //         }),
    //         owner_taxpayer_address: this.fb.group({
    //             region_id: 0,
    //             region: '',
    //             province_id: 0,
    //             province: '',
    //             municipality_id: 0,
    //             municipality: '',
    //             barangay_id: 0,
    //             barangay: '',

    //             zipcode: '',
    //             house_bldng_no: '',
    //             building_name: '',
    //             lot_no: '',
    //             block_no: '',
    //             street: '',
    //             subdivision: '',
    //         }),
    //         business_operation: this.fb.group({
    //             business_activity: '',
    //             business_area: 0,
    //             floor_area: 0,
    //             no_male: 0,
    //             no_female: 0,
    //             no_residing_lgu: 0,
    //             no_in_establishment: 0,
    //             no_van_truck: 0,
    //             no_motorcycle: 0,
    //             is_own_rent: false,
    //             tax_declaration_no: '',
    //             property_index_no: '',
    //             is_tax_incentives: false,
    //             ctc: '',
    //             is_micro_registered: false,
    //             is_bsp_registered: false,
    //         }),
    //         business_address: this.fb.group({
    //             region_id: 0,
    //             region: '',
    //             province_id: 0,
    //             province: '',
    //             municipality_id: 0,
    //             municipality: '',
    //             barangay_id: 0,
    //             barangay: '',

    //             zipcode: '',
    //             house_bldng_no: '',
    //             building_name: '',
    //             lot_no: '',
    //             block_no: '',
    //             street: '',
    //             subdivision: '',
    //         }),
    //         line_businesses: this.fb.array([]),
    //         measure_paxes: this.fb.array([]),
    //     }),
    // });

    constructor(public http: HttpRequestService, private fb: FormBuilder) {}

    getData() {
        const data = this.http.get<IBusinessInformation[]>(`${this.baseUrl}`);
        data.subscribe({
            next: (res) => {
                const result: any = res;
                const { data } = result;
                this._data.next(data);
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
        // return this.http.post(`${this.baseUrl}`, this.form.value);
    }
}
