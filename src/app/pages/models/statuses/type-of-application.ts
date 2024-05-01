import { AbstractControl, FormGroup } from "@angular/forms";

export interface ITypeApplication {
    id?: string;
    code: string;
    permit_type: string;
    group: string;
    status: string;
    savedate: Date
}

export class TypeApplicationModel implements ITypeApplication {
    id = '';
    code = '';
    permit_type = 'New'
    group = '';
    status = '';
    savedate = new Date();
}


export interface ITypeApplicationFormGroup extends FormGroup {
  value: ITypeApplication;
  controls: {
    id?: AbstractControl;
    code: AbstractControl;
    permit_type: AbstractControl;
    group: AbstractControl;
    status: AbstractControl;
    savedate: AbstractControl
  };
}