import { Component, OnInit } from '@angular/core';
import { Enums } from 'src/app/pages/enums/enums';
import { MeasurePaxService } from 'src/app/pages/service/measure-pax.service';
import { IMeasurePax } from 'src/app/pages/models/requirements/measure-pax';

@Component({
    selector: 'app-measurement-pax-list',
    templateUrl: './measurement-pax-list.component.html',
    styleUrl: './measurement-pax-list.component.scss',
})
export class MeasurementPaxListComponent implements OnInit {
    form = this.mpService.form;
    dataSource: IMeasurePax[] = [];
    enums: Enums = new Enums();
    visible: boolean = false;

    loading: boolean = false;

    btn: string = 'Save';

    constructor(public mpService: MeasurePaxService) {}

    ngOnInit(): void {
        this.reset();
    }
    getList() {
        this.mpService.getData();
        this.mpService.data.subscribe((result) => {
            this.dataSource = result;
        });
    }
    showDialog(btn: string) {
        this.btn = btn;
        this.visible = true;
    }
    submit() {
        this.mpService.form.markAllAsTouched();

        if (!this.mpService.form.valid) {
            return;
        }
        this.btn === 'Save' ? this.create() : this.update();
        this.reset();
    }

    create() {
        this.mpService.create().subscribe((res) => {
            this.getList();
        });
    }
    update() {
        this.mpService.update().subscribe((res) => {
            this.getList();
        });
    }
    edit(selected: IMeasurePax) {
        this.showDialog('Update');
        this.mpService.form.patchValue(selected);
    }
    remove(selected: IMeasurePax) {
        this.mpService.remove(selected).subscribe((res) => {
            this.reset();
        });
    }
    reset() {
        this.mpService.form.reset(this.mpService.resetForm.value);
        this.btn = 'Save';
        this.visible = false;
        this.getList();
    }
}
