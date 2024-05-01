import { Component, OnInit } from '@angular/core';
import { IDocumentRequirements } from 'src/app/pages/models/requirements/document-requirements';
import { DocumentRequirementsService } from 'src/app/pages/service/documents-requirements.service';

@Component({
    selector: 'app-document-requirements',
    templateUrl: './document-requirements.component.html',
    styleUrl: './document-requirements.component.scss',
})
export class DocumentRequirementsComponent implements OnInit {
    dataSource: IDocumentRequirements[] = [];
    loading = false;
    filterFields = [];

    clonedProducts: { [s: string]: IDocumentRequirements } = {};

    uploadedFiles: any[] = [];

    constructor(public docsService: DocumentRequirementsService) {}
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.loadDocuments();
    }

    loadDocuments() {
        this.docsService.getData();
        this.docsService.data.subscribe((result) => {
            this.dataSource = result.filter(
                (type) => type.kindOfPermit === 'Business Permit'
            );
            // console.log(result.filter(type => type.group === 'Application'));
        });
    }

    onRowEditCancel(items: IDocumentRequirements, index: number) {
        console.log({ item: items, index: index });

        // this.products[index] = this.clonedProducts[product.id as string];
        // delete this.clonedProducts[product.id as string];
    }

    onRowEditSave(item: IDocumentRequirements) {
        console.log(item);

        // if (product.price > 0) {
        //     delete this.clonedProducts[product.id as string];
        //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
        // } else {
        //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
        // }
    }

    onUpload(event: any) {
        // for (const file of event.files) {
        //   this.uploadedFiles.push(file);
        // }
        console.log(event.files);
    }
}
