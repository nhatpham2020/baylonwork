import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {  UploadFile } from '../../model/UploadFile';
import {  GunwallData } from '../../model/gunwalldata';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private basePath = '/gunwall';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: UploadFile, uid: string): Observable<number> {
    const fileid = Math.random().toString(20).substring(2);
    const filePath = `${this.basePath}/` + uid + '/' + fileid;
    const storageRef = this.storage.ref(filePath);
    const dataURL = fileUpload.file.toDataURL('image/png');
    const uploadTask = storageRef.putString(dataURL, 'data_url');
    const gunwall = new GunwallData;
    const profile =   JSON.parse(localStorage.getItem('profile'));
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileid;

          gunwall.weaponName = JSON.parse(localStorage.getItem('weapon'));
          const AttachData = localStorage.getItem('AttachData');
          const DesingData = localStorage.getItem('DesignData');

          if (DesingData && DesingData !== 'undefined' ) {
            gunwall.weaponDesignData = JSON.parse(DesingData);
          }
          if (AttachData && AttachData !== 'undefined' ) {
            gunwall.weaponAttachData = JSON.parse(AttachData);
          }
          gunwall.avatarURL = profile.avatarURL;
          gunwall.username = profile.username;
          gunwall.url = downloadURL;
          gunwall.name = fileid;
          gunwall.uid = uid;
          this.saveFileData(gunwall);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(gunwall: GunwallData) {
    this.db.list(this.basePath + `/${gunwall.uid}`).push(gunwall);
  }

  getFileUploads(numberItems, uid): AngularFireList<GunwallData> {
    return this.db.list(this.basePath + `/${uid}`, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFileUpload(fileUpload: UploadFile, uid) {
    this.deleteFileDatabase(fileUpload.key, uid)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  public deleteFileDatabase(key: string, uid: string) {
    return this.db.list(this.basePath + `/${uid}`).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
