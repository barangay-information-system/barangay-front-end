import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-household-list',
    templateUrl: './household-list.component.html',
    styleUrl: './household-list.component.scss',
})
export class HouseholdListComponent implements OnInit {
    dataSource: any[] = [];

    loading: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
