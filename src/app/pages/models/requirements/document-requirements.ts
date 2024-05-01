import { AbstractControl, FormGroup } from "@angular/forms";
import { ITypeApplication, TypeApplicationModel } from "../statuses/type-of-application";

export interface IDocumentRequirements {
    id: string;
    code: string;
    documentTitle: string;
    kindOfPermit: string;
    status: string;
    sequence: number;

    // code: string;
    // documentTitle: string;
    // kindOfPermit: string;
        
    application_type: ITypeApplication;

    // status: string
    // sequence: number
}
export class DocumentRequirementsModel implements IDocumentRequirements{
    id = '';
    code = '';
    documentTitle = '';
    kindOfPermit = '';
    status = '';
    sequence = 0;
    application_type = new TypeApplicationModel();
}




export interface IDocumentRequirementsFormGroup extends FormGroup{
  value: IDocumentRequirements;
  controls: {
    id: AbstractControl;
    code: AbstractControl;
    documentTitle: AbstractControl;
    kindOfPermit: AbstractControl;
    status: AbstractControl;
    sequence: AbstractControl;
    application_type: AbstractControl<ITypeApplication>;
  };
}