import { Component, OnInit } from '@angular/core';
import { Enums } from 'src/app/pages/enums/enums';

@Component({
  selector: 'app-resident-create',
  templateUrl: './resident-create.component.html',
  styleUrl: './resident-create.component.scss'
})
export class ResidentCreateComponent implements OnInit{
  enums: Enums = new Enums();

  ngOnInit(): void {
  }

}
