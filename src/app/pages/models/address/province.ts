export interface IProvince {
    id: number;
    code: string;
    region_id: number;
    uacs_region: string;
    region: string;
    counter: number;
    uacs_province: string;
    province: string;
    capital: string;
    classification: string;
    land_area: number;
    population: number;
    sequence: number;

    status: string;
    savedate: Date;
}
export class ProvinceModel implements IProvince {
    id = 0;
    code = '';
    region_id = 0;
    uacs_region = '';
    region = '';
    counter = 0;
    uacs_province = '';
    province = '';
    capital = '';
    classification = '';
    land_area = 0;
    population = 0;
    sequence = 0;

    status = '';
    savedate = new Date();
}
