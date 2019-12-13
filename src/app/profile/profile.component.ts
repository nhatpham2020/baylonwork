import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { ChangepasswordComponent} from '../changepassword/changepassword.component'
import { BsModalRef, BsModalService} from 'ngx-bootstrap';
import { CardpayComponent } from '../cardpay/cardpay.component';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Customer } from '../../model/customer';
import { CustomerService } from '../services/customer.service';
import { map } from 'rxjs/operators';
import { ProfileData } from 'src/model/profileData';
import { ProfileService } from '../services/profile.service';
import { UploadFile } from 'src/model/UploadFile';
import { Http } from '@angular/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isPaid = false;
  public uid = '';
  public profile: ProfileData;
   email = '';
   currentFileUpload: UploadFile;
   customers: any;
  constructor( private  authService:  AuthService,
    private modalRef: BsModalRef,
    private modalService: BsModalService,
    private customerService: CustomerService,
    private profileService: ProfileService,
    private http: Http ) {
    this.email = this.authService.userdata().email;
    this.uid = this.authService.userdata().uid;
    
  }

  ngOnInit() {
    this.getCustomersList();
    this.getProfile();
  }

  logout() {
    this.authService.logout();
    this.modalRef.hide();
  }
  close() {
    this.modalRef.hide();
  }
  upgrade() {
    this.modalRef.hide();
    this.modalService.show(CardpayComponent, {class: 'modal-lg'});
  }

  getProfile() {
    
    this.profileService.getProfile(this.uid).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(profile => {
      this.profile = profile[0];
      localStorage.setItem('profile', JSON.stringify(this.profile));
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
        } else {
          this.isPaid = false;
        }
      }
    }
    });
  }

  deleteCustomers() {
    this.customerService.deleteAll().catch(err => console.log(err));
  }
  uploadAvatar(event) {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    this.currentFileUpload = new UploadFile(file);
    if (file.type.includes('image')) {
      this.profileService.pushFileToStorage(this.currentFileUpload, this.uid);
    }
  }

  changeUsername(event: MouseEvent, newname: string, profile: ProfileData) {
    let newprofile = profile;
    if ( newname.length > 1) {
      newprofile.username = newname;
      this.profileService.updateProfile(newprofile.key, newprofile.uid, newprofile);
    }
    return this.stopEvent(event);
  }
  changeBIO(event: MouseEvent, newvalue: string, profile: ProfileData) {
    let newprofile = profile;
    if ( newvalue.length > 1) {
      newprofile.BIO = newvalue;
      this.profileService.updateProfile(newprofile.key, newprofile.uid, newprofile);
    }
    return this.stopEvent(event);
  }
  sendMail(profile: ProfileData, thread: string, mailcontent: string ) {
    if (thread.length > 1 && mailcontent.length > 1) {
      this.http.post('/sendMail', {
       user: profile,
       thread: thread,
       content: mailcontent
      }).subscribe(
      (res) => {
        window.alert('Your message was sent to the admin.');
        console.log('The response from server is ', res);
      },
      (err) => {
        window.alert(`Error occured while sending mail.
            Please try again.`);
        console.log('The error is ', err);
      });
    } else {
      window.alert('All fields should be filled.');
    }
  }
  changePassword() {
    this.modalService.show(ChangepasswordComponent);
   this.modalRef.hide();
  }
  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}
