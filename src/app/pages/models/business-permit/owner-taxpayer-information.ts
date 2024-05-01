import { AbstractControl, FormGroup } from '@angular/forms';

export interface IOwnerTaxPayerInformation {
    last_name: string;
    first_name: string;
    middle_name: string;
    suffix: string;
    gender: string;

    mobile_number: string;
    tel_fax_number: string;
    email_address: string;
}
export class OwnerTaxPayerInformationModel
    implements IOwnerTaxPayerInformation
{
    last_name = '';
    first_name = '';
    middle_name = '';
    suffix = '';
    gender = '';

    mobile_number = '';
    tel_fax_number = '';
    email_address = '';
}

export interface IOwnerTaxPayerInformationFormGroup extends FormGroup {
    value: IOwnerTaxPayerInformation;
    controls: {
        last_name: AbstractControl;
        first_name: AbstractControl;
        middle_name: AbstractControl;
        suffix: AbstractControl;
        gender: AbstractControl;

        mobile_number: AbstractControl;
        tel_fax_number: AbstractControl;
        email_address: AbstractControl;
    };
}
