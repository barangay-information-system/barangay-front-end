import { AbstractControl, FormGroup } from '@angular/forms';

export interface IBusinessOperation {
    // @ManyToOne(() => BusinessInformation, (o) => o.id, {
    //     eager: true,
    //     nullable: true
    // })
    // business_information = '';
    business_activity: string;
    business_area: number;
    floor_area: number;
    no_male: number;
    no_female: number;
    no_residing_lgu: number;
    no_in_establishment: number;
    no_van_truck: number;
    no_motorcycle: number;
    is_own_rent: boolean;
    tax_declration_no: string;
    property_index_no: string;
    is_tax_incentives: boolean;
    ctc: string;
    is_micro_registered: boolean;
    is_bsp_registered: boolean;
}
export class BusinessOperationModel
    implements IBusinessOperation
{
    
    business_activity = '';
    business_area = 0;
    floor_area = 0;
    no_male = 0;
    no_female = 0;
    no_residing_lgu = 0;
    no_in_establishment = 0;
    no_van_truck = 0;
    no_motorcycle = 0;
    is_own_rent = false;
    tax_declration_no = '';
    property_index_no = '';
    is_tax_incentives = false;
    ctc = '';
    is_micro_registered = false;
    is_bsp_registered = false;
}

export interface IBusinessOperationFormGroup extends FormGroup {
    value: IBusinessOperation;
    controls: {
        business_activity: AbstractControl;
        business_area: AbstractControl;
        floor_area: AbstractControl;
        no_male: AbstractControl;
        no_female: AbstractControl;
        no_residing_lgu: AbstractControl;
        no_in_establishment: AbstractControl;
        no_van_truck: AbstractControl;
        no_motorcycle: AbstractControl;
        is_own_rent: AbstractControl;
        tax_declration_no: AbstractControl;
        property_index_no: AbstractControl;
        is_tax_incentives: AbstractControl;
        ctc: AbstractControl;
        is_micro_registered: AbstractControl;
        is_bsp_registered: AbstractControl;
    };
}
