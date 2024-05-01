import { AbstractControl, FormGroup } from "@angular/forms";

export interface IUserRole {
    sequence: number;
    code: string;
    name: string;
    description: string;
}
export class UserRoleModel implements IUserRole{
    
    sequence = 0;
    code = '';
    name = '';
    description = '';
}


export interface IUserRoleFormGroup extends FormGroup{
  value: IUserRole;
  controls: {
    sequence:AbstractControl;
    code: AbstractControl;
    name: AbstractControl;
    description: AbstractControl;
  };
}