import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-market',
  templateUrl: './market.component.v2.html',
  styleUrls: ['./market.component.v2.css']
})
export class MarketComponent implements OnInit {
  public isPaid = false;
  public uid = '';
  tempfile: any;
  message: string;
  firemessage: string;
  email = '';
  public guncustom: any;
  public activeSection: any;
  private dbPath = '/goatgun';
  customers: any;
  fileUploads: any[];
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
        if( this.tempfile ) {
          console.log(this.tempfile);
          this.gundataService.changeMessage(this.tempfile);
        }
      }
    });
  }


  getGunsList() {

    this.uploadService.getFileUploads(10, this.uid).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      const myData = [];
      fileUploads.map((fileupload, index) => {
        if ( fileupload.uid === this.uid) {
          myData.push(fileupload);
        }
      });
      const profileData = this.profile;
      profileData.myMarket = myData.length;
      this.profileService.updateProfile(this.profile.key, this.uid, profileData);
    });


  }
  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
      /* console.log("customers");
      console.log( customers); */
     let user;
    for (user of customers) {
      if ( user.key === this.uid ) {
        if (user.membership === true ) {
          this.isPaid = true;
          this.limit = 10;
          break;
        } else {
          this.isPaid = false;
          this.limit = 3;
        }
      } else {
        this.isPaid = false;
        this.limit = 3;
      }
    }
    this.getGunsList();
    });
  }
  getProfile (uid: string) {
    this.profileService.getProfile(uid).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(profile => {
      this.profile = profile[0];
      console.log(profile);
      console.log(this.profile);
    });
  }

  Delete(key: string) {
    this.uploadService.deleteFileDatabase(key);
  }

  Edit(event: MouseEvent, file: any) {
    this.tempfile = file;
    var tempFile = file;
    tempFile.wall = 'marketwall';
    console.log(tempFile);
    this.gundataService.changeMessage(tempFile);
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
