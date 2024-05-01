export interface IMunicipality {
    id: number;
    code: string;

    uacs_region: string;
    region: string;
    uacs_province: string;
    province: string;
    uacs_city_mun: string;
    city_mun: string;
    type: string;
    country: string;

    sequence: number;
    status: string;
    savedate: Date;
}
export class MunicipalityModel implements IMunicipality {
    id = 0;
    code = '';

    uacs_region = '';
    region = '';
    uacs_province = '';
    province = '';
    uacs_city_mun = '';
    city_mun = '';
    type = '';
    country = '';

    sequence = 0;
    status = '';
    savedate = new Date();
}
