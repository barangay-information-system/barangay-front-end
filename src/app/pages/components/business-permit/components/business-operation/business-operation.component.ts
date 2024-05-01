import { Component, OnInit } from '@angular/core';
import { Enums } from 'src/app/pages/enums/enums';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';

@Component({
    selector: 'app-business-operation',
    // standalone: true,
    // imports: [],
    templateUrl: './business-operation.component.html',
    styleUrl: './business-operation.component.scss',
})
export class BusinessOperationComponent implements OnInit {
    enums = new Enums();

    constructor(public adService: ApplicationDetailsServices) {}

    ngOnInit(): void {
    }
}
