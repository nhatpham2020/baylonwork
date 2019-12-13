import { AuthService } from './../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileService } from '../services/profile.service';
import { ProfileData } from 'src/model/profileData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.v2.html',
  styleUrls: ['./login.component.v2.css']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  values = '';
  warn ='';
  constructor(
    private profileService: ProfileService,
    private  authService:  AuthService,
    private modalRef: BsModalRef,
    private modalService: BsModalService

  ) { this.values = ''; }

  ngOnInit() {

  }
  login(event: MouseEvent, email: string, password: string ) {
    console.log(email);
    console.log(password);
    //
   this.authService.login(email, password ).then((userData) => {
    window.alert('Login suceess!');
    this.modalRef.hide();
   },  (err) => {console.log(err);
   this.warn = err; }
   );
   return this.stopEvent(event);
  }

  forgotPassword(event: MouseEvent, email: string) {
    this.authService.sendPasswordResetEmail(email).then((userData) => {
      this.warn = 'Reset link sent. Check your mailbox.';
    }, (err) => {
      this.warn = err;
    });
    return this.stopEvent(event);
  }

  onKey( pwd1: string, pwd2: string) {
    console.log(pwd1);
    console.log(pwd2);
    if ( pwd1 === pwd2 ) {
      this.values = 'Password is matching';
      if ( pwd1.length < 6) {
        this.values = 'Password should be 6 letters at least';
      }
    } else {
      this.values = 'Password is not matching.';
    }
    
  }
  register(id: string, email: string, pwd: string, pwd2: string ) {
    console.log(id);
    console.log(email);
    console.log(pwd);
    console.log(pwd2);
    const profileData = new ProfileData;
    if (pwd === pwd2 && pwd.length >= 6 ) {
      console.log('registering');
      this.authService.register(email, pwd ).then(userData => {
        this.values = 'You Registered! Check your mailbox.';
        profileData.uid = userData.user.uid;
        profileData.email = userData.user.email;
        profileData.username = id;
        profileData.myMarket = 0;
        profileData.myWall = 0;
        profileData.myFavourite = 0;
        profileData.avatarURL = '../../assets/img/profile/Profile-ICon.png';
        profileData.BIO = 'I like goatguns so much.';
        this.profileService.saveFileData(profileData);
        console.log(userData);
        },
       err => this.values = err);
    } else {
      console.log('register again');
    }
  }

  close() {
    this.modalRef.hide();
  }

  showLogin(event: MouseEvent) {
    this.isLogin = true;
    document.getElementById("showlogin").classList.add("ui-state-active");
    document.getElementById("showregister").classList.remove("ui-state-active");
    return this.stopEvent(event);
  }

  showRegister(event: MouseEvent) {
    this.isLogin = false;
    document.getElementById("showregister").classList.add("ui-state-active");
    document.getElementById("showlogin").classList.remove("ui-state-active");
    return this.stopEvent(event);
  }

  public googleLogin(event: MouseEvent) {
    this.authService.loginWithGoogle().then((userData) => {
      console.log(userData);
      window.alert('Google Login suceess!');
      const profileData = new ProfileData;
        profileData.uid = userData.user.uid;
        profileData.email = userData.user.email;
        profileData.username = userData.user.displayName;
        profileData.myMarket = 0;
        profileData.myWall = 0;
        profileData.myFavourite = 0;
        profileData.avatarURL = userData.user.photoURL || '../../assets/img/profile/Profile-ICon.png';
        profileData.BIO = 'I like goatguns so much.';
      this.profileService.saveFileData(profileData);
      this.modalRef.hide();
     },  (err) => {console.log(err);
     this.warn = err; }
     );
     return this.stopEvent(event);
  }

  public facebookLogin(event: MouseEvent) {
    this.authService.loginWtihFacebook().then((userData) => {
      console.log(userData);
      window.alert('Facebook Login suceess!');
      const profileData = new ProfileData;
        profileData.uid = userData.user.uid;
        profileData.email = userData.user.email;
        profileData.username = userData.user.displayName;
        profileData.myMarket = 0;
        profileData.myWall = 0;
        profileData.myFavourite = 0;
        profileData.avatarURL = userData.user.photoURL || '../../assets/img/profile/Profile-ICon.png';
        profileData.BIO = 'I like goatguns so much.';
      this.profileService.saveFileData(profileData);
      this.modalRef.hide();
     },  (err) => {console.log(err);
     this.warn = err; }
     );
     return this.stopEvent(event);
  }
  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}
