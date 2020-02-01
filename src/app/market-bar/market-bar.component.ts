import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from '../auth/auth.service';
import { MarketwallData } from 'src/model/marketwalldata';
import { UploadMarketService } from '../services/upload-market.service';
import { ShareModalComponent } from '../share-modal/share-modal.component';


@Component({
  selector: 'app-market-bar',
  templateUrl: './market-bar.component.html',
  styleUrls: ['./market-bar.component.css']
})
export class MarketBarComponent implements OnInit {
  @Input() hero: MarketwallData;
  message = 'Dragon';
  @Output() messageEvent = new EventEmitter<string>();
  public openModal: BsModalRef = null;
  public uid = '';
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  constructor(private modalService: BsModalService,
    private uploadService: UploadMarketService,
    private authService: AuthService,
  ) {
    this.uid = this.authService.userdata().uid;
  }
  Editgun(event: MouseEvent) {
    this.messageEvent.emit(this.message);
    return this.stopEvent(event);
  }

  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  deleteFavourite(event: MouseEvent, file: MarketwallData) {

    const updateFile: MarketwallData = file;
    if (file.favouriteMembers.includes(this.uid) && file.uid !== this.uid) {
      const index = file.favouriteMembers.indexOf(this.uid);
      if (file.favouriteMembers.length > 1) {
        updateFile.favouriteMembers.splice(index, 1);
        updateFile.favouritecount--;
      }
    }
    this.uploadService.updateMarket(file.key, updateFile);
    return this.stopEvent(event);
  }

  deleteMarket(event: MouseEvent, file: MarketwallData) {
    this.uploadService.deleteFileDatabase(file.key);
    window.alert('This gun was successfully removed from MarketPlace.')
    return this.stopEvent(event);
  }
  increase(event: MouseEvent, file: MarketwallData, factor: number) {
    const updateFile: MarketwallData = file;
    switch (factor) {
      case 0:
        updateFile.sharecount++;
        this.openModal = this.modalService.show(ShareModalComponent, this.config);
        break;
      case 1:
        if (!file.favouriteMembers.includes(this.uid) && file.uid !== this.uid) {
          updateFile.favouriteMembers.push(this.uid);
          updateFile.favouritecount++;
        }
        break;
      case 2:
        if (!updateFile.likeMembers.includes(this.uid) && file.uid !== this.uid) {
          updateFile.likeMembers.push(this.uid);
          updateFile.likecount++;
        } else if (file.uid !== this.uid) {
          const index = file.likeMembers.indexOf(this.uid);
          if (file.likeMembers.length > 1) {
            updateFile.likeMembers.splice(index, 1);
            updateFile.likecount--;
          }
        }
        break;
    }
    this.uploadService.updateMarket(file.key, updateFile);
    return this.stopEvent(event);
  }

  ngOnInit() {
  }

}
