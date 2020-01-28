import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {  UploadFile } from '../../model/UploadFile';
import {  MarketwallData } from '../../model/marketwalldata';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProfileService } from './profile.service';
import { AuthService } from '../auth/auth.service';
import { ProfileData } from 'src/model/profileData';
@Injectable({
  providedIn: 'root'
})
export class UploadMarketService {

  private basePath = '/marketwall';
  public profile: ProfileData;
  public uid ='';
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,
    private profileService: ProfileService,
    private authService: AuthService) {
      this.uid = this.authService.userdata().uid;

     }

  pushFileToStorage(fileUpload: UploadFile, uid: string): Observable<number> {
    const fileid = Math.random().toString(20).substring(2);
    const filePath = `${this.basePath}/` + uid + '/' + fileid;
    const storageRef = this.storage.ref(filePath);
    const dataURL = fileUpload.file.toDataURL('image/png');
    const uploadTask = storageRef.putString(dataURL, 'data_url');
    const marketwall = new MarketwallData;
    const profile =   JSON.parse(localStorage.getItem('profile'));
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileid;

          marketwall.weaponName = JSON.parse(localStorage.getItem('weapon'));
          const AttachData = localStorage.getItem('AttachData');
          const DesingData = localStorage.getItem('DesignData');

          if (DesingData && DesingData !== 'undefined' ) {
            marketwall.weaponDesignData = JSON.parse(DesingData);
          }
          if (AttachData && AttachData !== 'undefined' ) {
            marketwall.weaponAttachData = JSON.parse(AttachData);
          }
          marketwall.avatarURL = profile.avatarURL;
          marketwall.username = profile.username;
          marketwall.url = downloadURL;
          marketwall.name = fileid;
          marketwall.uid = uid;
          marketwall.favouritecount = 0;
          marketwall.favouriteMembers = [uid];
          marketwall.likecount = 0;
          marketwall.likeMembers = [uid];
          marketwall.sharecount = 0;
          this.saveFileData(marketwall);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  saveFileData(marketwall: MarketwallData) {
    this.db.list(this.basePath).push(marketwall);
  }

  getFileUploads(numberItems, uid): AngularFireList<MarketwallData> {
    return this.db.list(this.basePath , ref =>
      ref.limitToLast(numberItems));
  }
  getMarketList(): AngularFireList<MarketwallData> {
    return this.db.list(this.basePath);
  }
  updateMarket(key: string, value: any): Promise<void> {
    return this.db.list(this.basePath).update(key, value);
  }

  deleteFileUpload(fileUpload: UploadFile) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  public deleteFileDatabase(key: string) {
    return this.db.list(this.basePath ).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
