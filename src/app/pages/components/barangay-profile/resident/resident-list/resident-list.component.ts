import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurokService } from 'src/app/pages/service/setup/purok.service';

@Component({
    selector: 'app-resident-list',
    templateUrl: './resident-list.component.html',
    styleUrl: './resident-list.component.scss',
})
export class ResidentListComponent implements OnInit {
    dataSource: any[] = [];
    loading: boolean = false;
    

    constructor(public router: Router) {}

    ngOnInit(): void {
        // const id localStorage.getItem('pkid'),
    }
    create() {
        this.router.navigate(['/barangay-profile/resident/resident-create']);
    }

}
