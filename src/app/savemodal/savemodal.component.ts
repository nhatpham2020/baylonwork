import { BaseExportPreviewwhite } from './../utils/BaseExportPreviewwhite';
import {AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {facebookShare} from '../utils/Facebook';
import {ViewerService} from '../viewer.service';
import {ExportPreviewFullFeatured} from '../utils/ExportPreviewFullFeatured';
import {FileUpload, UploadResponseObject} from '../utils/FileUpload';
import config from './config';

import {TarExport} from '../utils/TarExport';

import {socket, socketStartListening} from '../utils/Socket';
// import {RawExportPreview} from '../utils/RawExportPreview';
import {FileUploadProgressCallback, FileUploadResponse, IExportPreview, VideoConverterOptions} from '../utils/ExportCommon';
import {BaseExportPreview} from '../utils/BaseExportPreview';
import domtoimage from 'dom-to-image-more';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

import { UploadFileService } from '../services/upload-file.service';
import { UploadFile } from '../../model/UploadFile';
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';


@Component({
  selector: 'app-savemodal',
  templateUrl: './savemodal.component.html',
  styleUrls: ['./savemodal.component.css']
})

export class SavemodalComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvasContainer')
  canvasContainer: ElementRef<HTMLDivElement>;
  public scene: BABYLON.Scene;
  debug = config.debug;
  progress = false;
  public uid = '';
  // ---------------------
  // general progress info
  progressType = '';
  progressPercentage = 0;
  created = false;
  uploaded = false;
  // --------------------
  error = '';
  uploadResponse: UploadResponseObject = null;
  availablePreviews = {
      default: {
          name: 'default', ctor: BaseExportPreview
      },
      special: {
          name: 'plain', ctor: BaseExportPreviewwhite
      },
      basic: {
          name: 'basic', ctor: BaseExportPreviewwhite
      }
  };
  previewInstances = {};
  public enableSharingButtons = false;
  // --------------------
  private displayCanvas: HTMLCanvasElement;
  private preview: IExportPreview;
  private fileUpload: FileUpload;
  private exporter: any;
  private previousCanvasContainer: HTMLElement | null;

  private interval1;
  public ref: AngularFireStorageReference;
  public task: AngularFireUploadTask;
  public imagedata: any;
  public downloadURL: string;
  currentFileUpload: UploadFile;

  constructor(private modalRef: BsModalRef, private viewerService: ViewerService, private zone: NgZone,
    private afStorage: AngularFireStorage,
    private uploadService: UploadFileService,
    private  authService:  AuthService
            ) {

      this.uid = this.authService.userdata().uid;
      window['that'] = this;


      socket.on('convert-progress', (data) => {
          this.zone.run(() => {


              this.setProgress(data.percentage, 100, 'Converting ' + data.format);

              if (data.percentage >= 99) {
              this.created = true;
              }
              console.log(this.progress, this.progressType, this.progressPercentage);

              // TODO @7frank work flow...
              if (!this.progress && this.progressType === 'Converting jpg') {

                  // disable the overlay as soon as sockerio returns that the jpg was converted
                  this.enableSharingButtons = true;
              }
          });

      });


  }

  // TODO @7frank add "format" parameter
  getShareURL(data: UploadResponseObject) {
      return config.share.baseURL + config.share.shareRoute + data.id + '/' + data.format;

  }

  getVideoURL(data: UploadResponseObject) {
      return config.share.baseURL + config.share.imagesRoute + data.id + '.' + data.format;

  }


  getTwitterShareURL(data: UploadResponseObject) {
      // TODO
      return config.share.baseURL + '/twitter/video/' + data.id + '.' + data.format;

  }


  shareWithFacebook() {
      if (!this.uploadResponse) {
          return;
      }
      const url = this.getShareURL(this.uploadResponse);
      facebookShare(url);
      // TODO what to do after facebook share
      // .then(() => this.close());

  }


  // TODO @7frank fix download with tar files
  download() {

      const link = <HTMLAnchorElement>document.createElement('a');

      link.href = this.getVideoURL(this.uploadResponse); // this.getGifEl().src;
      link.download = 'Download.' + this.uploadResponse.format;
      document.body.appendChild(link);
      link.click();
  }

  setProgress(current, maximum, action: string) {

      this.progressPercentage = Math.round(100 * current / maximum);
      this.progress = this.progressPercentage != 100;
      this.progressType = action;
  }

  close() {

      this.undoPreviewMode();
      this.getVideoURL(null);
      this.modalRef.hide();

  }

  undoPreviewMode() {
      if (this.exporter) {

          this.exporter.cancel();
      }
      this.viewerService.viewer.resizeOnRender = true;
      this.viewerService.viewer.resizeAsNeeded(true);
      this.preview.disablePreview();


      this.previousCanvasContainer.appendChild(this.displayCanvas);


  }


  getPreviewMesh() {
      return this.viewerService.viewer.getActiveWeapon();
  }

  async createTarFromCanvas(progressCallback: FileUploadProgressCallback, overrideConfig?: VideoConverterOptions) {


      this.exporter = new TarExport(config.video.width, config.video.height, Object.assign(config.video.options, overrideConfig));


      const start = window.performance.now();
      ///Download image file
      /* this.displayCanvas.style.width = "50%";
      this.displayCanvas.style.height = "30%"; */
     /*  domtoimage.toPng(this.displayCanvas, { quality: 0.95 })
      .then(function (dataUrl) {
          const link = document.createElement('a');
          link.download = 'dragon.png';
          link.href = dataUrl;
          link.click();
      }); */
      this.currentFileUpload = new UploadFile(this.displayCanvas);
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.uid ).subscribe(
        percentage => {
         console.log(Math.round(percentage));
         this.modalRef.hide();
        },
        error => {
          console.log(error);
        }
      );

     // const result = await this.exporter.startRecording(this.displayCanvas, this.scene, this.preview, progressCallback);


      const stop = window.performance.now();

      console.log('Creating Tar took:', (stop - start) / 1000, ' seconds');
      return 0;
  }
  // `location` is the Firebase Storage reference;
// `type` is the image type (in your case 'image/png')


  async initVideoExport(overrideConfig?: VideoConverterOptions, uploadImmediate: boolean = true) {


      this.uploaded = false;

      this.error = '';
      this.setProgress(0, 1, '');

      if (!this.fileUpload) {
          this.fileUpload = (new FileUpload);
      }

      this.fileUpload.cancelLastUpload();


      let result;
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);

      try {


          result = await this.createTarFromCanvas((val) => {

              // FIXME progress is only triggered on convert not while capturing

              this.setProgress(val, 1, 'Generating Tar');
          }, overrideConfig);



      } catch (e) {
          console.warn(e);
          this.error = e.message;
          return;
      }



      const uploadRoute = config.share.baseURL + config.share.fileUploadRoute;

      this.fileUpload.setRemote(uploadRoute);

  }

  updateDebugResponse(response: UploadResponseObject) {

      if (!this.debug) {
          return;
      }

      // if video created load video

      // if image created load video

      const url = this.getShareURL(response);

      console.log('share URL: ', url);

  }


  setShareElements(data: UploadResponseObject) {
      this.uploadResponse = data;
  }

  // FIXME @7frank remove all previews from the global scene otherwise re-opening dialog
  // will create multiple instances of the individual objects
  ngOnDestroy(): void {
      this.close();

  }

  ngAfterViewInit(): void {


     this.displayCanvas = this.viewerService.viewer.renderCanvas.nativeElement;
     console.log(this.viewerService.viewer);
      this.scene = this.viewerService.viewer.scene;

      this.previousCanvasContainer = this.displayCanvas.parentElement;
      this.canvasContainer.nativeElement.appendChild(this.displayCanvas);
      console.log(  this.displayCanvas);

      this.viewerService.viewer.resizeOnRender = false;
      this.scene.getEngine().setSize(512, 512);

      this.preparePreview(this.availablePreviews.special);
     /*  domtoimage.toPng(this.displayCanvas)
          .then(function (dataUrl) {
              var img = new Image();
              img.src = dataUrl;
              document.body.appendChild(img);
          })
          .catch(function (error) {
              console.error('oops, something went wrong!', error);
          }); */


  }

  preparePreview(obj: { name: string, ctor: any }) {
      if (this.preview) {
          this.preview.disablePreview();
      }

      if (!this.previewInstances[obj.name]) {
          this.previewInstances[obj.name] = new obj.ctor(this.scene, this.displayCanvas);

      }

      this.preview = this.previewInstances[obj.name];
      this.viewerService.viewer.previewOptions.camera.target = new BABYLON.Vector3(0, -0.05,  0.2);
      this.viewerService.viewer.previewOptions.camera.upvec = new BABYLON.Vector3(0, 0.866, -0.5);
      this.preview.enablePreview(this.getPreviewMesh(), this.viewerService.viewer.previewOptions);

  }

  //TODO @7frank use as default
  initPreviewRotationAnimation() {

      // sample code for testing rotation and offsets

      // that.preview.rotationOffset.x = 0.5;
      // that.preview.setPreviewTargetRotation(0);
      clearInterval(this.interval1);

  }


  initTwitterShare() {

      const url = this.getTwitterShareURL(this.uploadResponse);
      console.log('initTwitterShare', url);
      window.open(url);
  }

}
