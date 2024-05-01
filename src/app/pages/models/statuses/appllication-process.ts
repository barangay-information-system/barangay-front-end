import { AbstractControl, FormGroup } from "@angular/forms";

export interface IApplicationProcess {
    id?: string;
    code: string;
    payment_type: string
    status: string;
    savedate: Date
}
export class ApplicationProcessModel implements IApplicationProcess{
    id = '';
    code = '';
    payment_type = ''
    status = '';
    savedate = new Date();
}


export interface IApplicationProcessFormGroup extends FormGroup{
  value: IApplicationProcess;
  controls: {
    id?: AbstractControl;
    code: AbstractControl;
    payment_type: AbstractControl
    status: AbstractControl;
    savedate: AbstractControl

  };
}