import { Component, OnInit } from '@angular/core';
import { Enums } from 'src/app/pages/enums/enums';
import { PurokService } from 'src/app/pages/service/setup/purok.service';

@Component({
  selector: 'app-resident-create',
  templateUrl: './resident-create.component.html',
  styleUrl: './resident-create.component.scss'
})
export class ResidentCreateComponent implements OnInit{
  enums: Enums = new Enums();
  purokDataSource: any[] = [];
  barangay = localStorage.getItem('barangay');
  constructor (private purokService: PurokService) {}

  ngOnInit(): void {
    this.displayPurok();
  }

  displayPurok(){
    this.purokService.getData();
    this.purokService.data.subscribe((result) => {
        console.log(result);  
        // this.purokDataSource = result;
        // console.log(result);
    });
}
}
