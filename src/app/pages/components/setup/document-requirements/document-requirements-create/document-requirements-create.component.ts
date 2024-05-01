import { Component, OnInit } from '@angular/core';
import { ITypeApplication } from 'src/app/pages/models/statuses/type-of-application';
import { DocumentRequirementsService } from 'src/app/pages/service/documents-requirements.service';
import { ApplicationTypeService } from 'src/app/pages/service/statuses/type-of-applications.service';

@Component({
    selector: 'app-document-requirements-create',
    templateUrl: './document-requirements-create.component.html',
    styleUrl: './document-requirements-create.component.scss',
})
export class DocumentRequirementsCreateComponent implements OnInit {
    form = this.drService.form;
    applicationTypes: ITypeApplication[] = [];
    constructor(
        public drService: DocumentRequirementsService,
        private atService: ApplicationTypeService
    ) {}

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.loadApplicationType();
    }

    loadApplicationType() {
        this.atService.getData();
        this.atService.data_types_application.subscribe((result) => {
            this.applicationTypes = result.filter(
                (type) => type.group === 'Application'
            );
            // console.log(this.applicationTypes)
        });
    }
}
