import { AbstractControl, FormGroup } from "@angular/forms";

export interface ITypeBusiness {
    id?: string;
    code: string;
    organization_type: string
    status: string;
    savedate: Date
    
}
export class TypeBusinessModal implements ITypeBusiness {
    id = '';
    code = '';
    organization_type = ''
    status = '';
    savedate = new Date();
}


export interface ITypeBusinessFormGroup extends FormGroup {
  value: ITypeBusiness;
  controls: {
    id?: AbstractControl;
    code: AbstractControl;
    organization_type: AbstractControl
    status: AbstractControl;
    savedate: AbstractControl
  };
}