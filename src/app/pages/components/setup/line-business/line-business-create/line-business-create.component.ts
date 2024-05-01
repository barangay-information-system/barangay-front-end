import { Component, OnInit } from '@angular/core';
import { LineBusinessService } from 'src/app/pages/service/line-business.service';

@Component({
  selector: 'app-line-business-create',
  templateUrl: './line-business-create.component.html',
  styleUrl: './line-business-create.component.scss'
})
export class LineBusinessCreateComponent  implements OnInit {
  form = this.lbService.form;
  constructor( public lbService: LineBusinessService) {

  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
