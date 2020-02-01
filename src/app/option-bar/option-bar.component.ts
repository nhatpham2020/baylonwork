import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShareModalComponent } from '../share-modal/share-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from '../auth/auth.service';
import { MarketmodalComponent } from '../marketmodal/marketmodal.component';
import { LoginComponent } from '../login/login.component';
import { SavemodalComponent } from '../savemodal/savemodal.component';
import { GunwallData } from 'src/model/gunwalldata';
import { UploadFileService } from '../services/upload-file.service';


@Component({
  selector: 'app-option-bar',
  templateUrl: './option-bar.component.html',
  styleUrls: ['./option-bar.component.css']
})
export class OptionBarComponent implements OnInit {
  message = 'Dragon';
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  @Input() hero: GunwallData;
  @Output() messageEvent = new EventEmitter<string>();
  public openModal: BsModalRef = null;
  constructor(private modalService: BsModalService, private as: AuthService,
    private uploadService: UploadFileService) {

  }
  ngOnInit() {
  }
  openShareModal(event: MouseEvent) {
    this.modalService.show(ShareModalComponent, this.config);
    return this.stopEvent(event);
  }
  Editgun(event: MouseEvent) {
    this.messageEvent.emit(this.message);
    return this.stopEvent(event);
  }
  Marketgun(event: MouseEvent) {
    if (this.as.isLoggedIn) {
      // TODO
      this.openModal = this.modalService.show(MarketmodalComponent);
    } else {
      this.openModal = this.modalService.show(LoginComponent, { class: 'modal-lg' });
    }
    return this.stopEvent(event);
  }

  Deletegun(event: MouseEvent, key: string, uid: string) {
    this.uploadService.deleteFileDatabase(key, uid);
    window.alert("This Gun was deleted from your Gun Wall");
    return this.stopEvent(event);
  }

  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    return false;
  }
}
