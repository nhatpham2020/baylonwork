import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { BsModalRef, BsModalService} from 'ngx-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { ViewerService } from '../viewer.service';
import { CustomerService } from '../services/customer.service';
import { UploadFileService } from '../services/upload-file.service';
import {  GuneditService } from '../services/gunedit.service';
import { map } from 'rxjs/operators';
import { UploadMarketService } from '../services/upload-market.service';
import { MarketwallData } from 'src/model/marketwalldata';
import { ProfileService } from '../services/profile.service';
import { ProfileData } from 'src/model/profileData';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.v2.html',
  styleUrls: ['./favourite.component.v2.css']
})
export class FavouriteComponent implements OnInit {
  public isPaid = false;
  public empty = false;
  public uid = '';
  tempfile: any;
  message: string;
  firemessage: string;
  email = '';
  public guncustom: any;
  public activeSection: any;
  customers: any;
  public fileUploads: MarketwallData[];
  numbers: Number[];
  inactiveNumbers: Number[];
  public limit: Number;
  public profile: ProfileData;
  constructor(private  authService:  AuthService,
    private customerService: CustomerService,
    private uploadService: UploadMarketService,
    private modalRef: BsModalRef,
    private modalService: BsModalService,
    private gundataService: GuneditService,
    private profileService: ProfileService
  ) {
    this.uid = this.authService.userdata().uid;
    this.getProfile(this.uid);
    this.getGunsList();


  }

  ngOnInit() {
    this.gundataService.currentMessage.subscribe(message => this.message = message);
    this.gundataService.firemessage.subscribe(message => {
      this.firemessage = message;
      if (message === 'Loaded') {
        console.log('received');
        if ( this.tempfile ) {
          console.log(this.tempfile);
          this.gundataService.changeMessage(this.tempfile);
        }
      }
    });
  }

  getProfile(uid: string) {
    this.profileService.getProfile(uid).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(profile => {
      this.profile = profile[0];
    });
  }
  getGunsList() {

    this.uploadService.getFileUploads(100, this.uid).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      const MyFavourite = [];
        fileUploads.map( file => {
          if (file.favouriteMembers.includes(this.uid) && file.uid !== this.uid) {
            MyFavourite.push(file);
          }
        });
        this.fileUploads = MyFavourite;
        if(this.fileUploads.length === 0) {
          this.empty = true;
        }
        const profileData = this.profile;
      profileData.myFavourite = this.fileUploads.length;
      this.profileService.updateProfile(this.profile.key, this.uid, profileData);
    });
  }

  Delete(key: string) {
    this.uploadService.deleteFileDatabase(key, this.uid);
  }

  Edit(event: MouseEvent, file: any) {
    this.tempfile = file;
    console.log(file);
    this.gundataService.changeMessage(file);
    this.modalRef.hide();
    return this.stopEvent(event);
  }
  Global(event: MouseEvent) {
    this.getGunsList();
    return this.stopEvent(event);
  }
  Myown(event: MouseEvent) {
    const MyData = [];
      this.fileUploads.map((fileupload, index) => {
        if ( fileupload.uid === this.uid) {
          MyData.push(fileupload);
        }
      });
    this.fileUploads = MyData;
    return this.stopEvent(event);
  }
 increase(event: MouseEvent, file: MarketwallData, factor: number) {
   const updateFile: MarketwallData = file;

   switch (factor) {
    case 0 :
      updateFile.sharecount++;
      break;
      case 1 :
        if (!file.favouriteMembers.includes(this.uid) && file.uid !== this.uid) {
          updateFile.favouriteMembers.push(this.uid);
          updateFile.favouritecount++;
        } else if( file.uid !== this.uid ) {
          const index = file.favouriteMembers.indexOf(this.uid);
          if ( file.favouriteMembers.length > 1) {
            updateFile.favouriteMembers.splice(index, 1);
            updateFile.favouritecount--;
          }
        }
        break;
      case 2 :
        if (!updateFile.likeMembers.includes(this.uid) && file.uid !== this.uid) {
            updateFile.likeMembers.push(this.uid);
            updateFile.likecount++;
        } else if ( file.uid !== this.uid ) {
          const index = file.likeMembers.indexOf(this.uid);
          if ( file.likeMembers.length > 1) {
            updateFile.likeMembers.splice(index, 1);
            updateFile.likecount--;
          }
        }
        break;
   }

   this.uploadService.updateMarket(file.key, updateFile);
   return this.stopEvent(event);
  }
  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

}

