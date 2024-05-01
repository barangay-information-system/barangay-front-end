import { Component, OnInit } from '@angular/core';
import { Enums } from 'src/app/pages/enums/enums';
import { ILineBusiness } from 'src/app/pages/models/requirements/line-business';
import { LineBusinessService } from 'src/app/pages/service/line-business.service';

@Component({
  selector: 'app-line-business-list',
  templateUrl: './line-business-list.component.html',
  styleUrl: './line-business-list.component.scss'
})
export class LineBusinessListComponent implements OnInit {
  form = this.lbService.form;
  dataSource: ILineBusiness[] = [];
  enums: Enums = new Enums();
  visible: boolean = false;

  loading: boolean = false;

  btn: string = 'Save';

  constructor(public lbService: LineBusinessService) {}

  ngOnInit(): void {
      this.reset();
  }
  getList() {
      this.lbService.getData();
      this.lbService.data.subscribe((result) => {
          this.dataSource = result;
      });
  }
  showDialog(btn: string) {
      this.btn = btn;
      this.visible = true;
  }
  submit() {
      this.lbService.form.markAllAsTouched();

      if (!this.lbService.form.valid) {
          return;
      }
      this.btn === 'Save' ? this.create() : this.update();
      this.reset();
  }

  create() {
      this.lbService.create().subscribe((res) => {
          this.getList();
      });
  }
  update() {
      this.lbService.update().subscribe((res) => {
          this.getList();
      });
  }
  edit(selected: ILineBusiness) {
      this.showDialog('Update');
      this.lbService.form.patchValue(selected);
  }
  remove(selected: ILineBusiness) {
      this.lbService.remove(selected).subscribe((res) => {
          this.reset();
      });
  }
  reset() {
      this.lbService.form.reset(this.lbService.resetForm.value);
      this.btn = 'Save';
      this.visible = false;
      this.getList();
  }
}
