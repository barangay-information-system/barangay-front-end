import { Component, OnInit } from '@angular/core';
import { MeasurePaxService } from 'src/app/pages/service/measure-pax.service';

@Component({
  selector: 'app-measurement-pax-create',
  templateUrl: './measurement-pax-create.component.html',
  styleUrl: './measurement-pax-create.component.scss'
})
export class MeasurementPaxCreateComponent implements OnInit {
  form = this.mpService.form;
  constructor( public mpService: MeasurePaxService) {

  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
