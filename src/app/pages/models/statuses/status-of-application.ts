import { AbstractControl, FormGroup } from "@angular/forms";

export interface IStatusApplication {
    id: string;
    code: string;
    application_type: string
    group: string
    status: string
    savedate: Date
}
export class StatusApplicationModel implements IStatusApplication{
    id = '';
    code = '';
    group = '';
    application_type = '';
    status = '';
    savedate = new Date();
}


export interface IStatusApplicationFormGroup extends FormGroup{
  value: IStatusApplication;
  controls: {
    id: AbstractControl;
    code: AbstractControl;
    application_type: AbstractControl
    group: AbstractControl
    status: AbstractControl
    savedate: AbstractControl

  };
}