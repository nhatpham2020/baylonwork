import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Observable, Subscription } from "rxjs";
import { ViewerService } from "../viewer.service";
import { CustomerService } from "../services/customer.service";
import { UploadFileService } from "../services/upload-file.service";
import { GuneditService } from "../services/gunedit.service";
import {
  AppearanceOption,
  AppearanceOptionGroup,
  AppearanceSection,
  MaterialProperties,
  WeaponCustomization,
  WeaponCustomizationData
} from "../customizer-data-types";
import { map } from "rxjs/operators";
import { MarketwallData } from "src/model/marketwalldata";
import { GunwallData } from "src/model/gunwalldata";
import { UploadFile } from "src/model/UploadFile";
import { UploadMarketService } from "../services/upload-market.service";
import { ProfileData } from "src/model/profileData";
import { ProfileService } from "../services/profile.service";
import { CardpayComponent } from "../cardpay/cardpay.component";

@Component({
  selector: "app-gunwall",
  templateUrl: "./gunwall.component.v2.html",
  styleUrls: ["./gunwall.component.v2.css"]
})
export class GunwallComponent implements OnInit {
  public membership = "goatgunfree";
  public uid = "";
  tempfile: any;
  message: string;
  firemessage: string;
  email = "";
  public guncustom: any;
  public activeSection: any;
  private dbPath = "/goatgun";
  customers: any;
  fileUploads: any[];
  numbers: Number[];
  inactiveNumbers: Number[];
  public limit: Number;
  public profile: ProfileData;
  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private uploadService: UploadFileService,
    private modalRef: BsModalRef,
    private modalService: BsModalService,
    private gundataService: GuneditService,
    private marketService: UploadMarketService,
    private profileService: ProfileService
  ) {
    this.uid = this.authService.userdata().uid;
    this.getProfile(this.uid);
    this.getCustomersList();
  }

  ngOnInit() {
    this.gundataService.currentMessage.subscribe(
      message => (this.message = message)
    );
    this.gundataService.firemessage.subscribe(message => {
      this.firemessage = message;
      if (message === "Loaded") {
        console.log("received");
        if (this.tempfile) {
          console.log(this.tempfile);
          this.gundataService.changeMessage(this.tempfile);
        }
      }
    });
  }

  public Upgrade(event: MouseEvent) {
    console.log(20000);
    this.modalRef.hide();
    this.modalService.show(CardpayComponent);
    return this.stopEvent(event);
  }

  getGunsList() {
    this.uploadService
      .getFileUploads(this.limit, this.uid)
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(fileUploads => {
        this.fileUploads = fileUploads;
        const profileData = this.profile;
        profileData.myWall = fileUploads.length;
        this.profileService.updateProfile(
          this.profile.key,
          this.uid,
          profileData
        );
        if (this.limit === 10) {
          this.numbers = Array(10 - this.fileUploads.length).fill(3);
          this.inactiveNumbers = [];
        } else if (this.limit === 3) {
          this.numbers = Array(3 - this.fileUploads.length).fill(3);
          this.inactiveNumbers = Array(7).fill(3);
        } else {
          this.numbers = [];
          this.inactiveNumbers = [];
        }
      });
  }

  getProfile(uid: string) {
    this.profileService
      .getProfile(uid)
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(profile => {
        this.profile = profile[0];
      });
  }
  getCustomersList() {
    this.customerService
      .getCustomersList()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(customers => {
        this.customers = customers;
        const membership = customers.filter(
          customer => customer.key === this.uid
        );
        if ( !!membership[0]) {
          const { planName } = membership[0];
          this.membership = planName.toLowerCase();
        }       
        switch (this.membership) {
          case "goatgunfree":
            this.limit = 3;
            break;
          case "goatgunbasic":
            this.limit = 10;
            break;
          case "goatgunpro":
            this.limit = 500;
            break;
          default:
            this.limit = 3;
        }
        this.getGunsList();
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
  List(file: GunwallData) {
    const marketwall = new MarketwallData();
    marketwall.weaponName = file.weaponName;
    marketwall.weaponDesignData = file.weaponDesignData;
    marketwall.weaponAttachData = file.weaponAttachData;
    marketwall.username = file.username;
    marketwall.avatarURL = file.avatarURL;
    marketwall.url = file.url;
    marketwall.name = file.name;
    marketwall.uid = file.uid;
    marketwall.favouritecount = 0;
    marketwall.favouriteMembers = [this.uid];
    marketwall.likecount = 0;
    marketwall.likeMembers = [this.uid];
    marketwall.sharecount = 0;
    this.marketService.saveFileData(marketwall);
  }
  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}
