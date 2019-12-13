import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {  UploadFile } from '../../model/UploadFile';
import {  ProfileData } from '../../model/profileData';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private basePath = '/profile';
  public uid = '';
  public avatarURL = '';
  public profile = new ProfileData;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,
    private  authService:  AuthService) {

     }

  pushFileToStorage(fileUpload: UploadFile, uid: string): Observable<number> {
    const fileid = Math.random().toString(20).substring(2);
    const filePath = `${this.basePath}/` + uid + '/' + fileid;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    const profile =   JSON.parse(localStorage.getItem('profile'));
    console.log(profile);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
        profile.avatarURL = downloadURL;
        this.updateProfile(profile.key , profile.uid, profile);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  saveFileData(profile: ProfileData) {
    this.db.list(this.basePath + `/${profile.uid}`).push(profile);
  }

  getFileUploads(numberItems, uid): AngularFireList<ProfileData> {
    return this.db.list(this.basePath , ref =>
      ref.limitToLast(numberItems));
  }
  getProfileList(): AngularFireList<ProfileData> {
    return this.db.list(this.basePath);
  }
  public getProfile(uid): AngularFireList<ProfileData> {
    return this.db.list(this.basePath + `/${uid}`);
  }

  
  updateProfile(key: string, uid: string, value: any): Promise<void> {
    return this.db.list(this.basePath + `/${uid}` ).update(key, value);
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




