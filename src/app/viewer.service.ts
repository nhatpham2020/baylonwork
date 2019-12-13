import { Injectable } from '@angular/core';
import { BabylonViewerComponent } from './babylon-viewer/babylon-viewer.component';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ViewerService {
    public viewer: BabylonViewerComponent;

    private initializedSource = new Subject<boolean>();
    public initialized: Observable<boolean> = this.initializedSource.asObservable();
    private meshClickedSource = new Subject<string>();
    public meshClicked: Observable<string> = this.meshClickedSource.asObservable();
    private resetSource = new Subject<any>();
    public reset: Observable<any> = this.resetSource.asObservable();

    constructor() {
    }

    public notifyClick(meshName: string) {
        this.meshClickedSource.next(meshName);
    }

   public notifyInitialized() {
        this.initializedSource.next(true);
    }

    public notifyReset() {
        this.resetSource.next();
    }
}
