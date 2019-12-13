

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {  UploadFile } from '../../model/UploadFile';
import {  Pattern } from '../../model/pattern';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { AppearanceOption } from '../customizer-data-types';


@Injectable({
  providedIn: 'root'
})
export class PatternService {

  private basePath = '/pattern';
  
  public pattern = new Pattern;
  url = 'http://localhost:4000/upload';
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,
    private  authService:  AuthService,
    private http: HttpClient ) {

     }
 
  
  updateFileToStorage(fileUpload: UploadFile, pattern: Pattern): Observable<number> {
    const fileid = Math.random().toString(20).substring(2);
    const filePath = `${this.basePath}/` + fileid;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
        pattern.url = downloadURL;
        this.updatePattern(pattern.key, pattern);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  pushFileToStorage(fileUpload: UploadFile, isEdit?:AppearanceOption): Observable<number> {
    const fileid = Math.random().toString(20).substring(2);
    const filePath = `${this.basePath}/` + fileid;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    const pattern = new Pattern;
    const  patterns: AppearanceOption[]  =  JSON.parse(localStorage.getItem('patternsData'));
    const { index } = patterns.pop();
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
        pattern.name = fileid;
        pattern.index = index + 1 ;
        pattern.visibility = true;
        pattern.url = downloadURL;
        
        if(!isEdit) {
          this.savePatternData(pattern);
        } else {
          pattern.name = fileid;
          pattern.index = isEdit.index;
          pattern.url = downloadURL;
          this.updatePattern(isEdit.key, pattern);
          
        }
        window.location.reload();
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  public postFile(fileToUpload: File) {
    this.makeFileRequest("/upload", [], fileToUpload).then((result) => {
      console.log(result);
  }, (error) => {
      console.error(error);
  });
    
  }
  public makeFileRequest(url: string, params: Array<string>, file: File) {
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append('fileKey', file, file.name);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
    });
}

  savePatternData(profile: Pattern) {
    this.db.list(this.basePath).push(profile);
  }

  getFileUploads(numberItems, uid): AngularFireList<Pattern> {
    return this.db.list(this.basePath , ref =>
      ref.limitToLast(numberItems));
  }
  public getPatternList(): AngularFireList<Pattern> {
    return this.db.list(this.basePath);
  }
  public getProfile(uid): AngularFireList<Pattern> {
    return this.db.list(this.basePath);
  }
  
  updatePattern(key: string,  value: any): Promise<void> {
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
    return this.db.list(this.basePath ).remove(key).then(() => {
      window.alert('Image Removed.\n Will be automatically reloaded to apply changes.');
      window.location.reload();
    })
    .catch(error => console.log(error));
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}




