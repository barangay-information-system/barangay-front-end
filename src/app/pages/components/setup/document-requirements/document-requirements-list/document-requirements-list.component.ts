import { Component, OnInit } from '@angular/core';
import { Enums } from 'src/app/pages/enums/enums';
import { IDocumentRequirements } from 'src/app/pages/models/requirements/document-requirements';
import { ITypeApplication } from 'src/app/pages/models/statuses/type-of-application';
import { DocumentRequirementsService } from 'src/app/pages/service/documents-requirements.service';
import { ApplicationTypeService } from 'src/app/pages/service/statuses/type-of-applications.service';

@Component({
    selector: 'app-document-requirements-list',
    templateUrl: './document-requirements-list.component.html',
    styleUrl: './document-requirements-list.component.scss',
})
export class DocumentRequirementsListComponent implements OnInit {
    filterFields = ['documentTitle', 'kindOfPermit', 'status'];
    types: ITypeApplication[] = [];
    dataSource: IDocumentRequirements[] = [];
    enums: Enums = new Enums();
    visible: boolean = false;
    loading: boolean = false;

    btn: string = 'Save';

    constructor(
        public drService: DocumentRequirementsService,
        private atService: ApplicationTypeService
    ) {}

    ngOnInit(): void {
       this.reset();
    }
    getList() {
        this.drService.getData();
        this.drService.data.subscribe((result) => {
            this.dataSource = result;
        });
    }
    loadType() {
        this.atService.getData();
        this.atService.data_types_application.subscribe((result) => {
            this.types = result.filter((type) => type.group === 'Application');
        });
    }
    showDialog(btn: string) {
        this.btn = btn;
        this.visible = true;
    }
    submit() {
        this.drService.form.markAllAsTouched();

        if (!this.drService.form.valid) {
            return;
        }
        this.btn === 'Save' ? this.create() : this.update();
        this.reset();
    }

    create() {
        this.drService.create().subscribe((res) => {
            this.getList();
        });
    }
    update() {
        this.drService.update().subscribe((res) => {
            this.getList();
        });
    }
    edit(selected: IDocumentRequirements) {
        this.showDialog('Update');
        this.drService.form.patchValue(selected);
    }
    remove(selected: IDocumentRequirements) {
        this.drService.remove(selected).subscribe((res) => {
            this.reset();
        });
    }
    reset() {
        this.drService.form.reset(this.drService.resetForm.value);
        this.btn = 'Save';
        this.visible = false;
        this.getList();
        this.loadType();
    }
}
