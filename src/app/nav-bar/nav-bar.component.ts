import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UserService} from '../user.service';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import { LoginComponent } from '../login/login.component';
import {NotifierService} from '../notifier.service';
import {ViewerService} from '../viewer.service';
import {ShareModalComponent} from '../share-modal/share-modal.component';
import {ColorPickerModalComponent} from '../color-picker-modal/color-picker-modal.component';
import {ColorOptionInterface} from '../customizer-data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ProfileComponent } from '../profile/profile.component';
import { FavouriteComponent } from '../favourite/favourite.component';
import { MarketComponent } from '../market/market.component';
import { GunwallComponent } from '../gunwall/gunwall.component';
import { SavemodalComponent } from '../savemodal/savemodal.component';
import { MarketmodalComponent } from '../marketmodal/marketmodal.component';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component_new.html',
    styleUrls: ['./nav-bar.component_new1.scss']
})
export class NavBarComponent implements OnInit {
    public openModal: BsModalRef = null;
    user: Observable<firebase.User>;
    isNavOpen = false;
    isTopNavOpen = false;
    constructor(private modalService: BsModalService, private userService: UserService,
                private notifierService: NotifierService,
                private as: AuthService) {
    }

    ngOnInit() {
         window['NavBar'] = this;
    }

    /**
     * Initialises the sharing of the content via social media
     * @param {Event} event
     */
    startSharing(event?: MouseEvent) {

        this.openShareModal(event);
    }
    startMarketing(event?: MouseEvent) {
        if (this.as.isLoggedIn) {
            // TODO
            this.openModal = this.modalService.show(MarketmodalComponent);
        } else {
            this.openModal = this.modalService.show(LoginComponent, {class: 'modal-lg'});
        }

        return this.stopEvent(event);
    }
    
    openFavoriteModal(event: MouseEvent) {
        if (this.as.isLoggedIn) {
            this.openModal = this.modalService.show(FavouriteComponent, {class: 'modal-lg'});
            // TODO
        } else {
            this.openModal = this.modalService.show(LoginComponent, {class: 'modal-lg'});
        }

        return this.stopEvent(event);
    }
    openMarketModal(event: MouseEvent) {
        if (this.as.isLoggedIn) {
            // TODO
            this.openModal = this.modalService.show(MarketComponent, {class: 'modal-lg'});
        } else {
            this.openModal = this.modalService.show(LoginComponent, {class: 'modal-lg'});
        }

        return this.stopEvent(event);
    }

    openGunwallModal(event: MouseEvent) {
        if (this.as.isLoggedIn) {
            // TODO
            this.openModal = this.modalService.show(GunwallComponent, {class: 'modal-lg'});
        } else {
            this.openModal = this.modalService.show(LoginComponent, {class: 'modal-lg'});
        }

        return this.stopEvent(event);
    }

    openlogin(event: MouseEvent) {
        if (this.as.isLoggedIn) {
            // TODO
            this.openModal = this.modalService.show(ProfileComponent, {class: 'modal-lg'});
        } else {
            this.openModal = this.modalService.show(LoginComponent, {class: 'modal-lg'});
        }

        return this.stopEvent(event);
    }

    openShareModal(event: MouseEvent) {
        this.openModal = this.modalService.show(ShareModalComponent);
        return this.stopEvent(event);
    }

    openColorPickerModal(event: MouseEvent): ColorPickerModalComponent {
        this.openModal = this.modalService.show(ColorPickerModalComponent);

        const instance = <ColorPickerModalComponent>this.openModal.content;

        this.stopEvent(event);

        return instance;
    }

    startSave(event: MouseEvent) {
        if (this.as.isLoggedIn) {
            // TODO
            this.openModal = this.modalService.show(SavemodalComponent);
        } else {
            this.openModal = this.modalService.show(LoginComponent, {class: 'modal-lg'});
        }
        return this.stopEvent(event);
    }


    resetMaterials(event: MouseEvent) {
        this.notifierService.notify('reset');

        return this.stopEvent(event);
    }

    controlNav(event: MouseEvent) {
        if (!this.isNavOpen) {
            console.log('isClosed')
            document.getElementById('sideNav').classList.add('side-header-open');
            document.getElementById('primary-menu').style.display = 'block';
        } else {
            console.log('isopened')
            document.getElementById('sideNav').classList.remove('side-header-open');
            document.getElementById('primary-menu').style.display = 'none';
        }
        this.isNavOpen = !this.isNavOpen;
        return this.stopEvent(event);
    }

    // controlTopNav(event: MouseEvent) {

    //     if (!this.isTopNavOpen) {
    //         console.log('isClosed11', document.getElementById('primary-menu'))
    //         document.getElementById('primary-menu').style.display = 'block';
    //     } else {
    //         console.log('isopened')
    //         // document.getElementById('primary-menu').classList.remove('side-header-open');
    //         document.getElementById('primary-menu').style.display = 'none';
    //     }
    //     this.isTopNavOpen = !this.isTopNavOpen;
    //     return this.stopEvent(event);
    // }

    stopEvent(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
}
