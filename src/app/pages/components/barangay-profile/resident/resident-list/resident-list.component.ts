import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrl: './resident-list.component.scss'
})
export class ResidentListComponent implements OnInit {
  dataSource: any[] = [];

  loading: boolean = false;

  constructor(
   
  ) {}

  ngOnInit(): void {
    
  }

}