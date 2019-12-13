import {AfterViewInit, Component, EventEmitter, NgZone, OnDestroy} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

import {ViewerService} from '../viewer.service';
import {Output} from '@angular/core';


@Component({
    selector: 'app-share-modal',
    templateUrl: './color-picker-modal.component.html',
    styleUrls: ['./color-picker-modal.component.css']
})
export class ColorPickerModalComponent implements AfterViewInit, OnDestroy {

    public color: any;
    @Output() colorPickerChange = new EventEmitter<string>();
    constructor(private modalRef: BsModalRef, private viewerService: ViewerService, private zone: NgZone) {


    }


    close() {

        this.modalRef.hide();

    }

    ngOnDestroy(): void {
        this.close();


    }

    ngAfterViewInit(): void {


    }

    onColorPickerChange($event) {
        this.colorPickerChange.emit(this.color);
    }
}
