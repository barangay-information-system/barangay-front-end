export interface IRegion {
    id: number;
    code: string;
    uacs_region: string;
    region: string;
    sequence: number;
    status: string;

    savedate: Date;
}
export class RegionModel implements IRegion {
    id = 0;
    code = '';
    uacs_region = '';
    region = '';
    sequence = 0;
    status = '';

    savedate = new Date();
}
