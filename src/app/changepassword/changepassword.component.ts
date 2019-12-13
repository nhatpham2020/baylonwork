import { AuthService } from './../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileService } from '../services/profile.service';
import { ProfileData } from 'src/model/profileData';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  values = '';
  email = '';
  constructor(
    private profileService: ProfileService,
    private  authService:  AuthService,
    private modalRef: BsModalRef,
    private modalService: BsModalService

  ) { this.values = '';
     this.email = this.authService.userdata().email;
     }

  ngOnInit() {

  }

  onKey( pwd1: string, pwd2: string) {
    if ( pwd1 === pwd2 ) {
      this.values = 'Password is matching';
      if ( pwd1.length < 6) {
        this.values = 'Password should be 6 letters at least';
      }
    } else {
      this.values = 'Password is not matching.';
    }
  }
  changePassword(event: MouseEvent, pwd0: string, pwd1: string, pwd2: string) {
    if ( pwd1 === pwd2 && pwd1.length > 5 && pwd0 !== pwd1) {
      this.authService.login(this.email, pwd0 ).then((userData) => {
        this.authService.updatePassword(pwd1).then((userdata) => {
          window.alert('Passoword Changed!');
          this.modalRef.hide();
        }, err => {
          this.values = err;
        });
       },  (err) => {console.log(err);
       this.values = err; }
       );
    }
    
     return this.stopEvent(event);
  }
  close() {
    this.modalRef.hide();
  }
  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

}
