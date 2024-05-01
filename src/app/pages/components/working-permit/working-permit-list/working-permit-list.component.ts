import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { IStatusApplication } from 'src/app/pages/models/statuses/status-of-application';
import { ITypeApplication } from 'src/app/pages/models/statuses/type-of-application';
import { ApplicationStatusService } from 'src/app/pages/service/statuses/status-of-application';
import { ApplicationTypeService } from 'src/app/pages/service/statuses/type-of-applications.service';

@Component({
    selector: 'app-working-permit-list',
    templateUrl: './working-permit-list.component.html',
})
export class WorkingPermitListComponent implements OnInit {
    dataSource: any[] = [];
    types!: ITypeApplication[];
    statuses!: IStatusApplication[];

    loading: boolean = false;

    constructor(
      public typeService: ApplicationTypeService,
      public statusService: ApplicationStatusService
    ) {}

    ngOnInit(): void {
      this.loadType();
      this.loadStatus();
    }

    loadType() {
      this.typeService.getData();
      this.typeService.data_types_application.subscribe((result) => {
        this.types = result;
      });
    }
    loadStatus() {
      this.statusService.getData();
      this.statusService.data_status.subscribe((result) => {
        this.statuses = result;
      });
    }

    onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal(
        (event.target as HTMLInputElement).value,
        'contains'
      );
    }
    editData(item: any){

    }
    removeData(item: any){

    }
}
