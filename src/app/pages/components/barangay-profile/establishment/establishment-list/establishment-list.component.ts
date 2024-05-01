import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrl: './establishment-list.component.scss'
})
export class EstablishmentListComponent implements OnInit {
  dataSource: any[] = [];

  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
