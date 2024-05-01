import { Component, OnInit } from '@angular/core';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';

@Component({
    selector: 'app-tax-payer-information',
    // standalone: true,
    // imports: [],
    templateUrl: './tax-payer-information.component.html',
    styleUrl: './tax-payer-information.component.scss',
})
export class TaxPayerInformationComponent implements OnInit {
    constructor(public adService: ApplicationDetailsServices) {}

    categories: any[] = [
        { name: 'Male', key: 'Male' },
        { name: 'Female', key: 'Female' },
    ];
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }
    selectedItem(item: any) {}
}
