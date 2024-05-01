import { AbstractControl, FormGroup } from '@angular/forms';

export interface IMeasurePax {
    id: string;
    code: string;
    description: string;
    status: string
}
export class MeasurePaxModel implements IMeasurePax {
    id = '';
    code = '';
    description = '';
    status = '';
}

export interface IMeasurePaxFormGroup extends FormGroup {
    value: IMeasurePax;
    controls: {
        id: AbstractControl;
        code: AbstractControl;
        description: AbstractControl;
        status: AbstractControl;
    };
}
