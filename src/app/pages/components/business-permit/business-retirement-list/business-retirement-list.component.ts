import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-retirement-list',
  templateUrl: './business-retirement-list.component.html',
  styleUrl: './business-retirement-list.component.scss'
})
export class BusinessRetirementListComponent implements OnInit{

  dataSource: any[] = [];

  loading: boolean = false;

  constructor(){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
