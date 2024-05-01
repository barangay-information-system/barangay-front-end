import { AbstractControl, FormGroup } from '@angular/forms';

export interface IEmployee {
    id?: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    gender: string;
    position: string;
    dob: string;
    badge_id: string;
    code: string;
    name: string;
    type: string;
    status: string;
    hired_date: Date;
    resignation_date: Date;

    cat: Date;
}
export class EmployeeModel implements IEmployee {
    id = '';
    first_name = '';
    last_name = '';
    middle_name = '';
    gender = '';
    position = '';
    dob = '';
    badge_id = '';
    code = '';
    name = '';
    type = '';
    status = '';
    hired_date = new Date();
    resignation_date = new Date();

    cat = new Date();
}

export interface IEmployeeFormGroup extends FormGroup {
    value: IEmployee;
    controls: {
        id?: AbstractControl;
        first_name: AbstractControl;
        last_name: AbstractControl;
        middle_name: AbstractControl;
        gender: AbstractControl;
        position: AbstractControl;
        dob: AbstractControl;
        badge_id: AbstractControl;
        code: AbstractControl;
        name: AbstractControl;
        type: AbstractControl;
        status: AbstractControl;
        hired_date: AbstractControl;
        resignation_date: AbstractControl;
        cat: AbstractControl;
    };
}
