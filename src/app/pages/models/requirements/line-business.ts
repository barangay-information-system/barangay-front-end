import { AbstractControl, FormGroup } from '@angular/forms';

export interface ILineBusiness {
    id: string;
    code: string;
    description: string;
    status: string;
    sequence: number;
}
export class LineBusinessModel implements ILineBusiness {
    id = ''
    code = '';
    description = '';
    status = 'Active';
    sequence = 0;
}

export interface ILineBusinessFormGroup extends FormGroup {
    value: ILineBusiness;
    controls: {
        code: AbstractControl;
        description: AbstractControl;
        status: AbstractControl;
        sequence: AbstractControl;
    };
}
