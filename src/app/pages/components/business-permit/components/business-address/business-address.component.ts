import { Component, OnInit } from '@angular/core';
import { IBarangay } from 'src/app/pages/models/address/barangay';
import { IMunicipality } from 'src/app/pages/models/address/municipality';
import { IProvince } from 'src/app/pages/models/address/province';
import { IRegion } from 'src/app/pages/models/address/region';
import { IZipcode } from 'src/app/pages/models/address/zipcode';
import { AddressService } from 'src/app/pages/service/address.service';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';

@Component({
    selector: 'app-business-address',
    // standalone: true,
    // imports: [],
    templateUrl: './business-address.component.html',
    styleUrl: './business-address.component.scss',
})
export class BusinessAddressComponent implements OnInit {
    region: IRegion[] = [];
    province: IProvince[] = [];
    city_mun: IMunicipality[] = [];
    barangay: IBarangay[] = [];
    zipcode: IZipcode[] = [];

    constructor(
        public businessInfoService: BusinessInformationService,
        public addressService: AddressService
    ) {}

    ngOnInit(): void {
        this.loadRegion();
    }

    loadRegion() {
        this.addressService.getRegion();
        this.addressService.dataRegion.subscribe((result) => {
            this.region = result;
        });
    }
    loadProvince(id: number) {
        this.addressService.getProvince(id);
        this.addressService.dataProvince.subscribe((result) => {
            this.province = result;
        });
    }
    loadCityMunicipality(id: string) {
        this.addressService.getCityMunicipality(id);
        this.addressService.dataCityMun.subscribe((result) => {
            this.city_mun = result;
        });
    }
    loadBarangay(id: number) {
        this.addressService.getBarangay(id);
        this.addressService.dataBarangay.subscribe((result) => {
            this.barangay = result;
        });
    }
    selectedRegion(item: any) {
        this.businessInfoService.baddSelectedRegion = item.value;

        this.loadProvince(item.value.id);
    }
    selectedProvince(item: any) {
        this.businessInfoService.baddSelectedProvince = item.value;

        this.loadCityMunicipality(item.value.uacs_province);
    }
    selectedCityMunicipality(item: any) {
        this.businessInfoService.baddSelectedMunicipality = item.value;

        this.loadBarangay(item.value.id);
    }

    selectedBarangay(item: any) {
        this.businessInfoService.baddSelectedBarangay = item.value;
    }
}
