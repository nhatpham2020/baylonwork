import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login() {
    console.log('Redirecting to Google login Provider');
   this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
   // this.afAuth.auth.createUserWithEmailAndPassword(new )
  }

}

