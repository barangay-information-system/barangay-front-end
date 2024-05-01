import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

export enum btnSelector {
    CREATE = 'Save',
    UPDATE = 'Update',
    VIEW = 'View',
    REMOVE = 'Remove',
    DEACTIVATE = 'Deactivate',
    ACTIVATE = 'Activate',
}
@Injectable({
    providedIn: 'root',
})
export class FormService {
    constructor() {}
    // SAVE | UPDATE
    private _btnSelector = new BehaviorSubject(btnSelector.CREATE);
    selected = this._btnSelector.asObservable();
    setBtnSelector(value: btnSelector) {
        this._btnSelector.next(value);
    }
}
