import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { MarketComponent } from './market/market.component';
import { GunwallComponent } from './gunwall/gunwall.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const appRoutes: Routes = [
 // {path: '', component: AppComponent },
   {path: 'profile', component: ProfileComponent},
   {path: 'favourite', component: FavouriteComponent},
   {path: 'market', component: MarketComponent},
   {path: 'gunwall', component: GunwallComponent},
   {path: 'profile/:id', component: ProfileComponent},
   {path: 'favourite/:id', component: FavouriteComponent},
   {path: 'gunwall/:id', component: GunwallComponent},
   {path: 'market/:id', component: MarketComponent},
   { path:  'login', component:  LoginComponent},
    { path:  'register', component:  RegisterComponent },
    { path:  'verify-email', component:  VerifyEmailComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
// Routes

