
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {  UploadFile } from '../../model/UploadFile';
import {  GunVisible } from '../../model/gunvisible';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GunvisibleService {

  private basePath = '/gunvisible';

  public visible = new GunVisible;
  public gunNames = ['M1 Garand', 'KAR98K', 'Assault Rifle', 'AK47', 'M1911', 'PPSH', 'M16A4',  'AA12', 'M14'
                    , 'Steyr Aug'];

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,
    private  authService:  AuthService) {

     }



  saveData() {
    this.gunNames.map( weaponName => {

      this.visible.weaponName = weaponName;
      this.visible.visibility = true;
      this.db.list(this.basePath ).push(this.visible);
    });
  }

  getVisible(): AngularFireList<GunVisible> {
    return this.db.list(this.basePath);
  }

  updateVisible(key: string,  value: any): Promise<void> {
    return this.db.list(this.basePath).update(key, value);
  }

  deleteFileUpload(fileUpload: UploadFile, uid) {
    this.deleteFileDatabase(fileUpload.key, uid)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  public deleteFileDatabase(key: string, uid: string) {
    return this.db.list(this.basePath ).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}




