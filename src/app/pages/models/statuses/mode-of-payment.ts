import { AbstractControl, FormGroup } from "@angular/forms";

export interface IModeOfPayment {
    id?: string;
    code: string;
    payment_type: string
    status: string;
    savedate: Date
}

export class ModeOfPaymentModel implements IModeOfPayment{
    id = '';
    code = '';
    payment_type = ''
    status = '';
    savedate = new Date();
}

export interface IModeOfPaymentFormGroup extends FormGroup{
  value: IModeOfPayment;
  controls: {
    id?: AbstractControl;
    code: AbstractControl;
    payment_type: AbstractControl
    status: AbstractControl;
    savedate: AbstractControl
  };
}