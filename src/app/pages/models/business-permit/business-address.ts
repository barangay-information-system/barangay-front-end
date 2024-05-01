import { AbstractControl, FormGroup } from '@angular/forms';

export interface IBusinessAddress {
    // @ManyToOne(() => BusinessInformation, (o) => o.id, {
    //     eager: true,
    //     nullable: true
    // })
    // business_information: string;


    region: string;
    province: string;
    municipality: string;
    house_bldng_no: string;
    building_name: string;
    lot_no: string;
    block_no: string;
    street: string;
    subdivision: string;
}
export class BusinessAddressModel implements IBusinessAddress {
   
    region = '';
    province = '';
    municipality = '';
    house_bldng_no = '';
    building_name = '';
    lot_no = '';
    block_no = '';
    street = '';
    subdivision = '';
}

export interface IBusinessAddressFormGroup extends FormGroup {
    value: IBusinessAddress;
    controls: {
        region: AbstractControl;
        province: AbstractControl;
        municipality: AbstractControl;
        house_bldng_no: AbstractControl;
        building_name: AbstractControl;
        lot_no: AbstractControl;
        block_no: AbstractControl;
        street: AbstractControl;
        subdivision: AbstractControl;
    };
}
