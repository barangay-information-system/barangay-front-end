import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidentService } from 'src/app/pages/service/barangay-profile/resident.service';
import { PurokService } from 'src/app/pages/service/setup/purok.service';

@Component({
    selector: 'app-resident-list',
    templateUrl: './resident-list.component.html',
    styleUrl: './resident-list.component.scss',
})
export class ResidentListComponent implements OnInit {
    dataSource: any[] = [];
    loading: boolean = false;
    

    constructor(private residentService: ResidentService) {}

    ngOnInit(): void {
        
        this.getData();
    }

    getData(){
        this.residentService.getData();
        this.residentService.data.subscribe((result) => {
            this.dataSource = result;
            console.log(result);
        });
    }

}
