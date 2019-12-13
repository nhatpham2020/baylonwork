import { AuthService } from './auth/auth.service';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {InlineSVGModule} from 'ng-inline-svg';
import { RouterModule, Routes } from '@angular/router';
import { LongPressModule } from 'ngx-long-press';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
     MatListModule, MatCardModule, MatMenuModule } from '@angular/material';



import * as BABYLON from 'babylonjs';
window['BABYLON'] = BABYLON;
import 'babylonjs-loaders';

/*
//FIXME neither vendors.ts nor angular.json nor here it was posiible to import the color picker ..

import * as $ from "jquery-slim";
(<any>window).jQuery = $;
(<any>window).$ = $;
import 'bootstrap-colorpicker';
*/

import {AppComponent} from './app.component';
import {BabylonViewerComponent} from './babylon-viewer/babylon-viewer.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AppearanceControlsComponent} from './appearance-controls/appearance-controls.component';
import {ShareModalComponent} from './share-modal/share-modal.component';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {ColorPickerModalComponent} from './color-picker-modal/color-picker-modal.component';
import { MarketmodalComponent } from './marketmodal/marketmodal.component';
import { MarketBarComponent} from './market-bar/market-bar.component'

import { ColorPickerModule } from 'ngx-color-picker';
import { ProfileComponent } from './profile/profile.component';
import { GunwallComponent } from './gunwall/gunwall.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { MarketComponent } from './market/market.component';
import { AppRoutingModule } from './/app-routing.module';
import { OptionBarComponent} from './option-bar/option-bar.component'

// firebase configuration
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';


// Services
import { FirebaseService } from './services/firebase.service';
import { NgxStripeModule } from 'ngx-stripe';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { CardpayComponent } from './cardpay/cardpay.component';
import { SavemodalComponent } from './savemodal/savemodal.component';
import { ChangepasswordComponent} from './changepassword/changepassword.component';
import { PatternService } from './services/pattern.service';
import { CustomizerDataService } from './customizer-data.service';


@NgModule({
    declarations: [
        AppComponent,
        BabylonViewerComponent,
        NavBarComponent,
        AppearanceControlsComponent,
        ShareModalComponent,
        ColorPickerModalComponent,
        LoginModalComponent,
        ProfileComponent,
        GunwallComponent,
        FavouriteComponent,
        MarketComponent,
        LoginComponent,
        RegisterComponent,
        VerifyEmailComponent,
        CardpayComponent,
        SavemodalComponent,
        OptionBarComponent,
        MarketmodalComponent,
        MarketBarComponent,
        ChangepasswordComponent
    ],
    imports: [
        LongPressModule,
        ColorPickerModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        MatButtonModule, MatMenuModule, MatToolbarModule,  MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        InlineSVGModule.forRoot(),
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        NgxStripeModule.forRoot('pk_test_TBPSf1mZaitt40UlkKxv7CR900LleNR0Fq'),
        AppRoutingModule
    ],
    providers: [PatternService, AuthService, FirebaseService,  CustomizerDataService ],
    entryComponents: [AppearanceControlsComponent, LoginModalComponent, ShareModalComponent, ColorPickerModalComponent, ProfileComponent,
                    LoginComponent, CardpayComponent, MarketComponent, GunwallComponent,
                     SavemodalComponent, MarketmodalComponent, ChangepasswordComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
