export interface IZipcode {
    id: number;
    code: string;
    country: string;
    province: string;
    city_mun: string;
    zipcode: string;

    status: string;
    savedate: Date;
}
export class ZipcodeModel implements IZipcode {
    id = 0;
    code = '';
    country = '';
    province = '';
    city_mun = '';
    zipcode = '';
    status = 'Active';

    savedate = new Date();
}
