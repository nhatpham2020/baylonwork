import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { ProfileComponent } from '../profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public openModal: BsModalRef = null;
  user: User;
  constructor(
    public afAuth: AngularFireAuth,
    private modalService: BsModalService,
    public router: Router) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
      });
     }

  async login(email: string, password: string) {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      console.log(result);
      return result;
  }


  async register(email: string, password: string) {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    console.log(result);
    this.sendEmailVerification();
    return result;
}
  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
  }

  async updatePassword(password: string) {
    return await  this.afAuth.auth.currentUser.updatePassword(password);
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afAuth.auth.signOut();
     localStorage.removeItem('user');
     localStorage.removeItem('membership');
     location.reload(false);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

  userdata () {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user;
  }

  async  loginWithGoogle() {
    const result = await  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    return result;
  }

  async loginWtihFacebook() {
    const result = await this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    return result;
  }

   isAdmin(): boolean {
    let isAdmin = false;
    if(!!this.userdata()) {
      const email =  this.userdata().email;
      const verified = this.userdata().emailVerified;
      try {
        if (  email == "bo.cai@symbo.org" || email == "flowerbed2020@outlook.com" &&  verified ) {
         console.log(email);
         isAdmin = true;
        } else {
          isAdmin = false;
        }
      }
      catch (err) {
      }
    }
    return isAdmin;
  }



}
