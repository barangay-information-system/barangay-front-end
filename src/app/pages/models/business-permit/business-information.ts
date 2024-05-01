import { AbstractControl, FormGroup } from '@angular/forms';
import { TypeBusinessModal } from '../statuses/type-of-business';
import { ModeOfPaymentModel } from '../statuses/mode-of-payment';
import { TypeApplicationModel } from '../statuses/type-of-application';
import { StatusApplicationModel } from '../statuses/status-of-application';
import { OwnerTaxPayerAddressModel } from './owner-taxpayer-address';

export interface IBusinessInformation {
    transaction_no: string;
    business_id_no: string;
    business_name: string;
    trade_name: string;

    type_of_business: TypeBusinessModal;

    tin_number: string;
    dti_sec_registered_date: Date;
    dti_sec_registered_no: string;

    status: string;
}
export class BusinessInformationModel implements IBusinessInformation {

    transaction_no = '';
    business_id_no = '';
    business_name = '';
    trade_name = '';

    type_of_business: TypeBusinessModal;

    tin_number = '';
    dti_sec_registered_date = new Date();
    dti_sec_registered_no = '';

    status = '';
}

export interface IBusinessInformationFormGroup extends FormGroup {
    value: IBusinessInformation;
    controls: {
        business_id_no: AbstractControl;
        business_name: AbstractControl;

        type_of_business: AbstractControl;

        tin_number: AbstractControl;

        dti_sec_registered_date: AbstractControl;

        dti_sec_registered_no: AbstractControl;

        status: AbstractControl;
    };
}
