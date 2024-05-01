export interface IBarangay {
    id: number;
    code: string;

    brgy_id: number;
    city_mun_id: number;
    barangay: string;
    type: string;
    population: number;
    city_mun: string;
    province: string;
    region: string;
    head_of_brgy: number;

    sequence: number;
    status: string;
    savedate: Date;
}
export class BarangayModel implements IBarangay {
    id = 0;
    code = '';

    brgy_id = 0;
    city_mun_id = 0;
    barangay = '';
    type = '';
    population = 0;
    city_mun = '';
    province = '';
    region = '';
    head_of_brgy = 0;

    sequence = 0;
    status = '';
    savedate = new Date();
}
