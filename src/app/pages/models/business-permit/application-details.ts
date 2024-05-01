import { AbstractControl, FormGroup } from '@angular/forms';
import { BusinessInformationModel } from './business-information';
import { ModeOfPaymentModel } from '../statuses/mode-of-payment';
import { StatusApplicationModel } from '../statuses/status-of-application';
import { TypeApplicationModel } from '../statuses/type-of-application';

export interface IApplicationDetails {
    business: BusinessInformationModel;
    mode_payment: ModeOfPaymentModel;
    application_type: TypeApplicationModel;
    application_status: StatusApplicationModel;
    tax_year: Date;
    application: string;
    created_at: Date;
}
export class ApplicationDetailsModel implements IApplicationDetails {
    business = new BusinessInformationModel();
    mode_payment = new ModeOfPaymentModel();
    application_type = new TypeApplicationModel();
    application_status = new StatusApplicationModel();
    tax_year = new Date();
    application = '';
    created_at = new Date();
}

export interface IApplicationDetailsFormGroup extends FormGroup {
    value: IApplicationDetails;
    controls: {
        business: AbstractControl;
        mode_payment: AbstractControl;
        application_type: AbstractControl;
        application_status: AbstractControl;
        tax_year: AbstractControl;
        application: AbstractControl;
    };
}
