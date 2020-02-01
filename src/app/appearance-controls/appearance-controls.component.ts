import { AfterContentInit, OnInit, Component, OnDestroy, ViewChild, } from '@angular/core';
import { ColorOptionInterface, CustomizerDataService } from '../customizer-data.service';
import { ViewerService } from '../viewer.service';
import { Subscription, Observable } from 'rxjs';
import { UndoMgr } from './undo-manager';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


import {
  AppearanceOption,
  AppearanceOptionGroup,
  AppearanceSection,
  MaterialProperties,
  WeaponCustomization,
  WeaponCustomizationData,
  WeaponDesignData,
  WeaponAttachData
} from '../customizer-data-types';
import { DraggableItemService, BsModalService, BsModalRef } from 'ngx-bootstrap';
import { GuneditService } from '../services/gunedit.service';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { OptionBarComponent } from '../option-bar/option-bar.component';
import { GunvisibleService } from '../services/gunvisible.service'
import { UploadFile } from 'src/model/UploadFile';
import { Http } from '@angular/http';
import { PatternService } from '../services/pattern.service';
import { AuthService } from '../auth/auth.service';
import { Pattern } from 'src/model/pattern';
import { ShareModalComponent } from '../share-modal/share-modal.component';
import { SavemodalComponent } from '../savemodal/savemodal.component';
import { LoginComponent } from '../login/login.component';
import { MarketmodalComponent } from '../marketmodal/marketmodal.component';
import { DeployService } from '../services/deploy.service';
import { DeployVar } from 'src/model/deployVar';
import { CustomerService } from '../services/customer.service';
import { CardpayComponent } from '../cardpay/cardpay.component';
export interface DeepActiveAppearanceTracking {
  activeSection: AppearanceSection;
  resetActive: boolean;
  chosenGroupOption: Map<AppearanceOptionGroup, AppearanceOption>;
}


@Component({
  selector: 'app-appearance-controls',
  templateUrl: './appearance-controls.component.v2.html',
  styleUrls: ['./appearance-controls.component.css'],

})
export class AppearanceControlsComponent implements OnDestroy {
  @ViewChild(OptionBarComponent) child;
  @ViewChild('optionsContainer')
  public optionsContainer;
  currentFileUpload: UploadFile
  public designData: WeaponDesignData[] = [];
  public attachData: WeaponAttachData[] = [];
  public allSections: AppearanceSection[] = [];
  public chosenWeapon: WeaponCustomization;
  public replayedWeapon: WeaponCustomization;
  public customizationData: WeaponCustomizationData;
  public hideWeaponChoices = true;
  public selectedItems: Map<WeaponCustomization, DeepActiveAppearanceTracking> =
    new Map<WeaponCustomization, DeepActiveAppearanceTracking>();

  public weaponsLoaded: Map<WeaponCustomization, boolean> =
    new Map<WeaponCustomization, boolean>();


  private clickSubscription: Subscription;
  private initializeSubscription: Subscription;
  private viewerResetSubscription: Subscription;
  private lastClickedOption: Map<AppearanceSection, AppearanceOption> = new Map<AppearanceSection, AppearanceOption>();
  message: any;
  messagefromchild: any;
  public weaponvisible: any[];
  public patterns: Pattern[];
  public currentPatternVisible = false;
  plusbuttons;
  lockbuttons;
  isAdmin = false;
  isFirst = true;
  membership: string;
  scrollTexture: number = 0;
  scrollColor: number = 0;
  scrollAttach: number = 0;
  disalbeLeftScroll: boolean = true;
  disalbeRightScroll: boolean = false;
  bufferParam: string = 'texture';
  public openModal: BsModalRef = null;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  constructor(private customizerDataService: CustomizerDataService, private viewerService: ViewerService,
    private gundata: GuneditService, private gunVisibleService: GunvisibleService,
    private patternService: PatternService, private http: HttpClient, private modalService: BsModalService,
    private authService: AuthService, private deployService: DeployService, private customerService: CustomerService
  ) {
    this.initializeSubscription = viewerService.initialized.subscribe(() => {
      this.viewerInitialized();
    });
    this.isAdmin = this.authService.isAdmin();
    this.clickSubscription = this.viewerService.meshClicked.subscribe((meshName: string) => {
      this.meshClicked(meshName);
    });

    this.viewerResetSubscription = this.viewerService.reset.subscribe(() => {
      this.viewerReset();
    });
    this.gundata.currentMessage.subscribe((message) => {
      this.message = message;
      if (message !== 'Dragon') {
        console.log('replaying');
        this.replayGun(message);
      }
    });


    this.getVisible();
    this.getPatterns();
    this.getDeploy();

  }

  public getCommonSections() {

  }
  public undoManagerIndex() {
    return UndoMgr.getInstance().getIndex() + 1;
  }
  openShareModal(event: MouseEvent) {
    this.openModal = this.modalService.show(ShareModalComponent, this.config);
    return this.stopEvent(event);
  }
  startSharing(event?: MouseEvent) {

    this.openShareModal(event);
  }
  startSave(event: MouseEvent) {
    if (this.authService.isLoggedIn) {
      // TODO
      this.openModal = this.modalService.show(SavemodalComponent);
    } else {
      this.openModal = this.modalService.show(LoginComponent, { class: 'modal-lg' });
    }
    return this.stopEvent(event);
  }
  startMarketing(event?: MouseEvent) {
    if (this.authService.isLoggedIn) {
      // TODO
      this.openModal = this.modalService.show(MarketmodalComponent);
    } else {
      this.openModal = this.modalService.show(LoginComponent, { class: 'modal-lg' });
    }

    return this.stopEvent(event);
  }

  public getVisible() {
    this.gunVisibleService.getVisible().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(weaponvisible => {
      this.weaponvisible = weaponvisible;

    });
  }
  public getDeploy() {
    this.deployService.getdeployList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(weaponvisible => {
      localStorage.setItem('deployedPatternData', JSON.stringify(this.patterns));
      if (!!!this.isAdmin && !this.isFirst) {
        window.alert('New features are available\n Will automatically refresh to get changes');
        window.location.reload(false);
      }
      this.isFirst = false;
    });
  }
  public getPatterns() {
    this.patternService.getPatternList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(patterns => {
      this.patterns = patterns;
      console.log('Changing here');
      console.log(this.patterns);
    });
  }
  deployPackData() {
    if (!!this.weaponvisible) {
      this.weaponvisible.map(visibleData => {
        this.gunVisibleService.updateVisible(visibleData.key, visibleData);
      });
    }
    const deploy = new DeployVar;
    deploy.number = Math.random();
    this.deployService.createDeploy(deploy);
  }
  setVisibleofWeapon(index: number, visible: boolean) {
    this.weaponvisible[index].visibility = visible;
    //this.gunVisibleService.updateVisible(visibledata.key, visibledata);
  }
  setVisibleofPattern(visible: boolean) {
    const lastClickedOption = this.lastClickedOption.has(this.activeSection()) ? this.lastClickedOption.get(this.activeSection()) : null;
    console.log(lastClickedOption);
    const currentPattern = this.patterns.filter(pattern => pattern.index === lastClickedOption.index).pop();
    currentPattern.visibility = visible;
    this.currentPatternVisible = currentPattern.visibility;
    console.log(currentPattern.visibility);
    this.patternService.updatePattern(currentPattern.key, currentPattern);

  }
  deleteTexture() {
    const lastClickedOption = this.lastClickedOption.has(this.activeSection()) ? this.lastClickedOption.get(this.activeSection()) : null;
    console.log(lastClickedOption);
    this.patternService.deleteFileDatabase(lastClickedOption.key);

  }
  uploadTexture(event) {

    if (!this.chosenWeapon.interactionBlacklist && this.authService.isLoggedIn) {
      const activeSection = this.activeSection();
      if (activeSection.affectedParameter == 'texture') {
        const lastClickedOption = this.lastClickedOption.has(activeSection) ? this.lastClickedOption.get(activeSection) : null;
        console.log(activeSection);
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        this.currentFileUpload = new UploadFile(file);
        let formData = new FormData();
        console.log(JSON.parse(localStorage.getItem('patternsData')));
        let index;
        if (!!JSON.parse(localStorage.getItem('patternsData'))) {
          index = JSON.parse(localStorage.getItem('patternsData')).pop().index || 0;
        } else {
          index = 0;
        }
        formData.append("uploads", file, (index + 1).toString() + '.jpg');
        console.log(formData);
        if (file.type.includes('image')) {
          this.patternService.pushFileToStorage(this.currentFileUpload, index).subscribe((response) => {
            console.log('filestorage ', response);
            console.log('filestorage type', typeof (response));
            if (response == 100) {
              console.log(1000)
              window.alert("Texture File Uploaded Sucessfully!!\n Will reload automatically to apply changes");

            }
          });
          this.http.post('/upload', formData).
            subscribe((response) => {

            });
        }
      }
    } else if (!this.authService.isLoggedIn) {
      this.openModal = this.modalService.show(LoginComponent, { class: 'modal-lg' });
    }
    return this.stopEvent(event);
  }
  uploadMyTexture(event) {

    if (!this.chosenWeapon.interactionBlacklist && this.authService.isLoggedIn == true) {
      const activeSection = this.activeSection();
      if (activeSection.affectedParameter == 'texture') {
        const lastClickedOption = this.lastClickedOption.has(activeSection) ? this.lastClickedOption.get(activeSection) : null;
        const file = event.target.files[0];
        const uid = this.authService.userdata().uid;
        this.currentFileUpload = new UploadFile(file);
        let formData = new FormData();
        console.log(JSON.parse(localStorage.getItem('mypatterns')));
        let index;
        if (!!JSON.parse(localStorage.getItem('mypatterns'))) {
          index = JSON.parse(localStorage.getItem('mypatterns')).pop().index || 0;
        } else {
          index = 0;
        }
        formData.append("uploads", file, (index + 1).toString() + '.jpg');
        console.log(index);
        if (file.type.includes('image')) {
          this.patternService.pushMyFileToStorage(this.currentFileUpload, index, uid).subscribe((response) => {
            console.log('filestorage ', response);
            if (response == 100) {
              console.log(1000);
              window.alert("Texture File Uploaded Sucessfully!!\n Will reload automatically to apply changes");
            }
          });

          this.http.post(`/uploadMine/${uid}`, formData).
            subscribe((response) => {
              console.log(response);
            });

        }
      }
    } else if (!this.authService.isLoggedIn) {
      this.openModal = this.modalService.show(LoginComponent, { class: 'modal-lg' });
    }
    return this.stopEvent(event);
  }
  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (var i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);

      xhr.send(formData);
    });
  }
  public undoManagerLimit() {
    return UndoMgr.getInstance().getLimit();
  }

  public changeTexture(event) {
    if (!this.chosenWeapon.interactionBlacklist) {
      const activeSection = this.activeSection();
      if (activeSection.affectedParameter == 'texture') {
        const lastClickedOption = this.lastClickedOption.has(activeSection) ? this.lastClickedOption.get(activeSection) : null;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        this.currentFileUpload = new UploadFile(file);
        let formData = new FormData();

        formData.append("uploads", file, lastClickedOption.index.toString() + '.jpg');
        if (file.type.includes('image')) {
          this.patternService.pushFileToStorage(this.currentFileUpload, lastClickedOption.index, lastClickedOption).subscribe((response) => {
            console.log('filestorage ', response);
            console.log('filestorage type', typeof (response));
            if (response == 100) {
              window.alert("Texture File Uploaded Sucessfully!!\n Will reload automatically to apply changes");
            }
          });
          this.http.post('/upload', formData).
            subscribe((response) => {
              console.log(response);
            });
        }
      }
    }
    return this.stopEvent(event);
  }



  public undoButtonVisiblity() {
    return (this.undoManagerIndex() + 3) / (this.undoManagerLimit() + 3);
  }


  public activeSection(): AppearanceSection {
    return this.activeTracking().activeSection;
  }

  public activeTracking(): DeepActiveAppearanceTracking {
    return this.selectedItems.get(this.chosenWeapon);
  }

  // Parent Option
  public changeSection(event: MouseEvent, section: AppearanceSection) {
    this.activeTracking().activeSection = section;
    if (this.bufferParam != this.activeSection().affectedParameter) {
      const ne: HTMLDivElement = this.optionsContainer.nativeElement;
      switch (this.activeSection().affectedParameter) {
        case 'texture':
          console.log(this.scrollTexture);
          ne.scrollLeft = this.clampScrollValue(this.scrollTexture);
          break;
        case 'color':
          ne.scrollLeft = this.clampScrollValue(this.scrollColor);
          console.log(this.scrollColor);
          break;
        default:
          console.log(this.scrollAttach);
          ne.scrollLeft = this.clampScrollValue(this.scrollAttach);
      }
    }
    this.bufferParam = this.activeSection().affectedParameter;
    return this.stopEvent(event);
  }


  /**
   * @param {string} meshName
   */
  public chooseWeapon(event: MouseEvent, weapon: WeaponCustomization) {
    try {
      if (!this.weaponsLoaded.get(weapon)) {
        this.loadWeapon(weapon, true);
        this.weaponsLoaded.set(weapon, true);
      }
      localStorage.setItem('weapon', JSON.stringify(weapon.name));
      localStorage.setItem('DesignData', JSON.stringify(null));
      localStorage.setItem('AttachData', JSON.stringify(null));
      // localStorage.setItem('custom', JSON.stringify(this.selectedItems));
      UndoMgr.getInstance().clear();
      // this.designData = [];
      this.chosenWeapon = weapon;
      this.hideWeaponChoices = true;
      this.allSections = this.customizationData.commonSections.slice() ///
        .concat(this.chosenWeapon.customizations.slice());
      this.viewerService.viewer.changeWeapon(weapon.modelFolder, weapon.modelFile, weapon.preview);
      return this.stopEvent(event);
    } catch {

    }
  }

  clampScrollValue(scroll: number) {
    const ne: HTMLDivElement = this.optionsContainer.nativeElement;

    return Math.max(0, Math.min(scroll, ne.scrollWidth - ne.clientWidth));
  }


  /**
   *  @param {string} meshName
   */
  meshClicked(meshName: string) {
    // if (meshName === 'assets/models/assault-rifle/assault-rifle.gltf.honey_badger.trigger') return;
    if (this.message == 'Dragon') {
      if (meshName.includes('trigger')) { return; }
      if (!this.chosenWeapon.interactionBlacklist || (this.chosenWeapon.interactionBlacklist.indexOf(meshName) === -1)) {
        const activeSection = this.activeSection();

        /* if (activeTracking.resetActive) {
           switch (activeSection.interactionType) {
             case 'alterMaterial':
               this.viewerService.viewer.resetMaterialProperty(meshName, activeSection.affectedParameter);
               break;
             case 'swapMaterial':
               this.viewerService.viewer.resetMaterial(meshName);
               break;
           }
         } else {
         */
        const lastClickedOption = this.lastClickedOption.has(activeSection) ? this.lastClickedOption.get(activeSection) : null;

        if (lastClickedOption) {
          switch (activeSection.interactionType) {
            case 'alterMaterial':
              UndoMgr.setMaterialProperty(this.viewerService.viewer, meshName,
                activeSection.affectedParameter, lastClickedOption.interactionValue);
              console.log('setmaterialproperty');
              const weaponName = JSON.parse(localStorage.getItem('weapon'));
              const design = {
                weaponName: weaponName,
                meshname: meshName,
                affectedParameter: activeSection.affectedParameter,
                interactionValue: lastClickedOption.interactionValue
              };
              this.designData.push(design);
              console.log(this.designData);
              localStorage.setItem('DesignData', JSON.stringify(this.designData));
              // this.viewerService.viewer.setMeshMaterialProperty(meshName, activeSection.affectedParameter,
              //  lastClickedOption.interactionValue);
              break;
            case 'swapMaterial':
              // this.viewerService.viewer.changeMeshMaterial(meshName, lastClickedOption.interactionValue);
              UndoMgr.setMaterialTexture(this.viewerService.viewer, meshName, lastClickedOption.interactionValue);
              console.log('setmaterialtexture');
              console.log('meshname', meshName);
              console.log('inteactionValue', lastClickedOption.interactionValue);
              break;
          }
        }
      }
      // }
    }
  }

  ngOnDestroy() {
    this.initializeSubscription.unsubscribe();
    this.clickSubscription.unsubscribe();
    this.viewerResetSubscription.unsubscribe();


    this.messagefromchild = this.child.message;
    console.log(this.messagefromchild);

  }


  /**
* @param {string} meshName
*/
  optionClicked(event: MouseEvent, optionGroup: AppearanceOptionGroup, option: AppearanceOption) {
    const currentlySelectedOption = this.selectedOption(optionGroup);
    console.log(optionGroup);
    console.log(option);
    const activeTracking = this.activeTracking();
    activeTracking.resetActive = false;
    const prevChosenGroupOption = activeTracking.chosenGroupOption;
    const lastClickedOption = this.lastClickedOption;
    if (!!option && !!option.index) {
      const currentPattern = this.patterns.filter(pattern => pattern.index === option.index).pop();
      //const currentPattern = this.patterns[option.index];
      console.log('----->' + currentPattern);
      this.currentPatternVisible = currentPattern.visibility;
    }

    // keep a handle to previous values
    const prevOption = lastClickedOption.get(this.activeSection());
    const prevGroupOption = prevChosenGroupOption.get(optionGroup);
    const section = this.activeSection();

    if (option === currentlySelectedOption) {

      if (optionGroup.allowNone) {
        const weapon = JSON.parse(localStorage.getItem('weapon'));
        console.log('atttachment option');
        const redoFunction = () => {
          console.log('remove');
          this.optionOff(option);
          const removeattach = {
            weaponName: weapon,
            isAdding: false,
            option: option,
            section: this.activeSection()
          };
          this.attachData.push(removeattach);
          console.log(this.attachData);
          localStorage.setItem('AttachData', JSON.stringify(this.attachData));
          prevChosenGroupOption.set(optionGroup, null);
          lastClickedOption.set(section, null);

        };
        if (section.interactionType === 'toggleMesh') {
          UndoMgr.add({
            undo: () => {
              this.optionOn(option);
              const addattach = {
                weaponName: weapon,
                isAdding: true,
                option: option,
                section: this.activeSection()
              };
              this.attachData.push(addattach);
              console.log(this.attachData);
              localStorage.setItem('AttachData', JSON.stringify(this.attachData));
              prevChosenGroupOption.set(optionGroup, prevGroupOption);
              lastClickedOption.set(section, prevOption);
            },
            redo: redoFunction,
          });
        } else {
          redoFunction();
        }


      }
    } else {
      const redoFunction = () => {
        this.optionOff(currentlySelectedOption);
        const weapon = JSON.parse(localStorage.getItem('weapon'));
        const removeattach = {
          weaponName: weapon,
          isAdding: false,
          option: currentlySelectedOption,
          section: this.activeSection()
        };
        this.attachData.push(removeattach);
        prevChosenGroupOption.set(optionGroup, option);
        const addattach = {
          weaponName: weapon,
          isAdding: true,
          option: option,
          section: this.activeSection()
        };
        this.attachData.push(addattach);
        console.log(this.attachData);
        this.optionOn(option);
        localStorage.setItem('AttachData', JSON.stringify(this.attachData));
        lastClickedOption.set(section, option);
      };
      if (section.interactionType === 'toggleMesh') {
        const weapon = JSON.parse(localStorage.getItem('weapon'));
        UndoMgr.add({
          undo: () => {
            this.optionOff(option, section);
            const removeattach = {
              weaponName: weapon,
              isAdding: false,
              option: option,
              section: section
            };
            this.attachData.push(removeattach);
            prevChosenGroupOption.set(optionGroup, prevGroupOption);
            this.optionOn(currentlySelectedOption, section);
            const addattach = {
              weaponName: weapon,
              isAdding: true,
              option: currentlySelectedOption,
              section: section
            };
            this.attachData.push(addattach);
            console.log(this.attachData);
            localStorage.setItem('AttachData', JSON.stringify(this.attachData));
            lastClickedOption.set(section, prevOption);

          },
          redo: redoFunction,
        });
      } else {
        redoFunction();
      }
    }

    return this.stopEvent(event);
  }

  optionOff(option: AppearanceOption, section?: AppearanceSection) {
    if (!option) {
      return;
    }

    section = section ? section : this.activeSection();

    switch (section.interactionType) {
      case 'toggleMesh':
        this.viewerService.viewer.hideMesh(option.interactionValue);
        if (option.include) {
          let hideIncludedMesh = true;
          section.optionGroups.forEach((optionGroup) => {
            const selectedOption = this.selectedOption(optionGroup);
            if (!selectedOption) { return; }
            if (!selectedOption.include) { return; }
            if (selectedOption.name === option.name) { return; }
            if (selectedOption.include !== option.include) { return; }
            hideIncludedMesh = false;
          });
          if (hideIncludedMesh) {
            this.viewerService.viewer.hideMesh(option.include);
          }
        }
        if (option.exclude) {
          option.exclude.forEach((obj) => {
            this.viewerService.viewer.showMesh(obj);
          });
        }
        break;
    }
  }

  optionOn(option: AppearanceOption, section?: AppearanceSection) {
    if (!option) {
      return;
    }
    section = section ? section : this.activeSection();
    switch (section.interactionType) {
      case 'toggleMesh':
        this.viewerService.viewer.showMesh(option.interactionValue);
        if (option.include) {
          this.viewerService.viewer.showMesh(option.include);
        }
        if (option.exclude) {
          option.exclude.forEach((obj) => {
            this.viewerService.viewer.hideMesh(obj);
          });

        }
        if (option.ajustment) {
          option.ajustment.forEach((obj) => {
            this.viewerService.viewer.setPosition(obj.interactionValue, obj.position);
          });
        }
        section.optionGroups.forEach((optionGroup) => {
          const selectedOption = this.selectedOption(optionGroup);
          if (selectedOption) {
            if (selectedOption.ajustment) {
              selectedOption.ajustment.forEach((obj) => {
                if (obj.interactionValue === option.interactionValue) {
                  this.viewerService.viewer.setPosition(obj.interactionValue, obj.position);
                }
              });

            }
          }
        });
        break;
    }
  }

  resetPressed(event) {
    // const tracking = this.activeTracking();

    // tracking.resetActive = !tracking.resetActive;
    UndoMgr.undo();

    return this.stopEvent(event);
  }

  redoPressed(event) {
    UndoMgr.redo();
    return this.stopEvent(event);
  }

  scrollOptionsLeft(event, parameter) {

    const ne: HTMLDivElement = this.optionsContainer.nativeElement;
    switch (parameter) {
      case 'texture':
        ne.scrollLeft = this.clampScrollValue(this.scrollTexture - (ne.clientWidth - 64));
        this.scrollTexture = this.clampScrollValue(this.scrollTexture - (ne.clientWidth - 64));
        console.log(this.scrollTexture)
        break;
      case 'color':
        ne.scrollLeft = this.clampScrollValue(this.scrollColor - (ne.clientWidth - 64));
        this.scrollColor = this.clampScrollValue(this.scrollColor - (ne.clientWidth - 64));
        console.log(this.scrollColor)
        break;
      default:
        ne.scrollLeft = this.clampScrollValue(this.scrollAttach - (ne.clientWidth - 64));
        this.scrollAttach = this.clampScrollValue(this.scrollAttach - (ne.clientWidth - 64));
        console.log(this.scrollAttach);
    }

    return this.stopEvent(event);
  }

  scrollOptionsRight(event, parameter) {
    const ne: HTMLDivElement = this.optionsContainer.nativeElement;
    switch (parameter) {
      case 'texture':
        ne.scrollLeft = this.clampScrollValue(this.scrollTexture + (ne.clientWidth - 64));
        this.scrollTexture = this.clampScrollValue(this.scrollTexture + (ne.clientWidth - 64));
        console.log(this.scrollTexture)
        break;
      case 'color':
        ne.scrollLeft = this.clampScrollValue(this.scrollColor + (ne.clientWidth - 64));
        this.scrollColor = this.clampScrollValue(this.scrollColor + (ne.clientWidth - 64));
        console.log(this.scrollColor)
        break;
      default:
        ne.scrollLeft = this.clampScrollValue(this.scrollAttach + (ne.clientWidth - 64));
        this.scrollAttach = this.clampScrollValue(this.scrollAttach + (ne.clientWidth - 64));
        console.log(this.scrollAttach)
    }

    return this.stopEvent(event);
  }

  selectedOption(optionGroup: AppearanceOptionGroup): AppearanceOption {
    return this.activeTracking().chosenGroupOption.get(optionGroup);
  }

  setupOptionTracking(commonSections: AppearanceSection[], weapon: WeaponCustomization) {
    const groupOptionTracking = new Map<AppearanceOptionGroup, AppearanceOption>();

    commonSections.slice()
      .concat(weapon.customizations.slice())
      .forEach(function (customization) {
        customization.optionGroups.forEach(function (optionGroup) {
          let defaultSelected: AppearanceOption = null;

          if (typeof optionGroup.defaultSelected === 'number') {
            defaultSelected = optionGroup.options[optionGroup.defaultSelected];
          } else if (!optionGroup.allowNone && (optionGroup.options.length > 0)) {
            defaultSelected = optionGroup.options[0];
          }

          groupOptionTracking.set(optionGroup, defaultSelected);
        });
      });

    this.selectedItems.set(weapon, {
      activeSection: (commonSections.length !== 0) ? commonSections[1] : weapon.customizations[1], ////[0]->[1]
      resetActive: false,
      chosenGroupOption: groupOptionTracking
    });
  }

  stopEvent(event: MouseEvent) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    return false;
  }

  toggleChoices(event: MouseEvent) {
    this.hideWeaponChoices = !this.hideWeaponChoices;

    return this.stopEvent(event);
  }


  /**
   * Helper function to load materials via the viewer service.
   * @param matProps
   */
  createMaterial(matProps: MaterialProperties) {
    this.viewerService.viewer.createMaterial(matProps);
  }
  public textureGenerate(): AppearanceOption[] {
    const urls: string[] = ['https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_960_720.jpg',
      'https://image.shutterstock.com/image-photo/beautiful-butterfly-metamorpha-stelenes-nature-600w-653284645.jpg',
      'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_960_720.jpg'];
    const options: AppearanceOption[] = [];

    urls.map((url, index) => {
      options.push({
        name: index.toString(),
        displayImg: url,
        interactionValue: url
      });
    })


    return options;
  }
  viewerInitialized() {
    this.customizerDataService.weaponsData().subscribe((customizationData) => {
      this.getCustomersList();
      const membership = localStorage.getItem('membership') || this.membership;
      this.customizationData = customizationData;
      const temp_textures = this.customizationData.commonSections[1].optionGroups[0].options;
      let textures;
      console.log(temp_textures);

      /*  this.textureGenerate().map( texture => {
          this.customizationData.commonSections[1].optionGroups[0].options.push(texture);
      })
        */
      // if (!!customizationData.environment) {
      console.log(this.customizationData);
      this.viewerService.viewer.setEnvironment(customizationData.environment);
      // }

      if (!!customizationData.commonMaterials) {
        customizationData.commonMaterials.forEach((matProps) => this.createMaterial(matProps));
      }

      //  customizationData.weapons= [customizationData.weapons[0]]

      // this.loadWeapon(customizationData.weapons[0], true);
      this.chooseWeapon(null, customizationData.weapons[0]);
      let commontextures: any;
      let commontexturelength = 0
      if (!!localStorage.getItem('deployedPatternData')) {
        commontextures = JSON.parse(localStorage.getItem('deployedPatternData'));
        commontextures.map((pattern) => {
          if (pattern.visibility == true) {
            commontexturelength++;
          }

        });
      }
      if (this.isAdmin === true) {
        textures = temp_textures;
        this.plusbuttons = 0;
        this.lockbuttons = 0;
      } else {
        switch (membership) {
          case 'goatgunbasic':
            textures = temp_textures.slice(- 5 - commontexturelength);
            this.plusbuttons = new Array(5 + commontexturelength - textures.length);
            this.lockbuttons = new Array(25 - 5);
            break;
          case 'goatgunpro':
            textures = temp_textures.slice(- 25 - commontexturelength);
            this.plusbuttons = new Array(25 + commontexturelength - textures.length);
            this.lockbuttons = new Array(0);
            break;
          default:
            textures = temp_textures.slice(-1 - commontexturelength);
            this.plusbuttons = new Array(1 + commontexturelength - textures.length);
            this.lockbuttons = new Array(24);
        }
      }


      console.log(textures.length)
      this.customizationData.commonSections[1].optionGroups[0].options = textures;
      customizationData.weapons.forEach((weapon, wIdx) => {
        this.setupOptionTracking(this.customizationData.commonSections || [], weapon);
        //  this.loadWeapon(weapon, wIdx === 0);
      });
    });
  }


  /**
   * This starts the actual loading of the meshes and materials.
   * TODO @7frank detect desktop or mobile. Then set interval at which desktop caches weapons in advance in the background
   *
   * @param weapon
   * @param visible
   */
  public loadWeapon(weapon: WeaponCustomization, visible: boolean, eventfire?: boolean) {

    this.viewerService.viewer.load(weapon.modelFolder, weapon.modelFile, visible, weapon.meshNames, eventfire, () => {
      this.weaponSetup(weapon);
    });

    if (!!weapon.materials) {
      weapon.materials.forEach((matProps) => {
        this.createMaterial(matProps);
      });
    }
  }

  /**
   * Rest the already loaded and possibly changed weapons to default.
   */
  public viewerReset(event?: MouseEvent) {
    this.weaponsLoaded.forEach((loaded, weapon) => {
      console.log(weapon);
      this.setupOptionTracking(this.customizationData.commonSections || [], weapon);
      this.weaponSetup(weapon);

    });
    for (let i = 0; i < 100; i++) {
      UndoMgr.undo();
    }

    UndoMgr.getInstance().clear();
    return this.stopEvent(event);
  }


  /**
   * Set up materials and weapon options as well as position, scale and other properties.
   * @param weapon
   */
  public weaponSetup(weapon: WeaponCustomization) {
    if (!!weapon.replaceMaterials) {

      weapon.replaceMaterials.forEach((replacement) => {
        this.viewerService.viewer.replaceMaterials(weapon.modelFolder, weapon.modelFile,
          replacement.oldMaterialNames, replacement.newMaterialName);
      });
    }


    if (weapon.rotation) {
      this.viewerService.viewer.setRotation(weapon.modelFolder, weapon.modelFile, weapon.rotation);
    }

    if (weapon.scale) {
      this.viewerService.viewer.setScale(weapon.modelFolder, weapon.modelFile, weapon.scale);
    }

    if (weapon.position) {
      this.viewerService.viewer.setPosition3(weapon.modelFolder, weapon.modelFile, weapon.position);
    }

    if (!!weapon.setupActions) {
      weapon.setupActions.forEach((setupAction) => {
        switch (setupAction.type) {
          case 'hideMesh':
            this.viewerService.viewer.hideMesh(setupAction.target, weapon.modelFolder, weapon.modelFile);
            break;
          case 'showMesh':
            weapon.customizations[0].optionGroups.forEach((optionGroup) => {
              optionGroup.options.forEach((option) => {
                if (setupAction.target === option.name) {
                  this.optionOn(option);
                  this.selectedItems.get(weapon).chosenGroupOption.set(optionGroup, option);
                }
              });
            });
            break;
        }
      });
    }
  }

  onVeryLongPress($event, optionGroup, option: ColorOptionInterface) {
    /*
         (click)="optionClicked($event, optionGroup, option)"

               [longPress]="500"
     */
    // FIXME window reference and eq
    // tslint:disable-next-line: triple-equals
    if (optionGroup.itemCustomClasses == 'color-select-button') {
      window['NavBar'].openColorPickerModal($event, option).colorPickerChange.subscribe((color) => {
        option.displayColor = color;
        option.interactionValue = color;
        option.name = 'Custom';
      });
    }
  }
  receiveMessage($event) {
    this.message = $event;
  }
  async replayGun(file: any) {
    try {
      const weapon = file.weaponName;
      const attachData = file.weaponAttachData;
      const designData = file.weaponDesignData;
      //await this.chooseWeapon(null, weapon);

      localStorage.setItem('weapon', JSON.stringify(weapon));
      localStorage.setItem('DesignData', JSON.stringify(designData));
      localStorage.setItem('AttachData', JSON.stringify(attachData));
      switch (weapon) {
        case 'M1 Garand':
          this.chosenWeapon = this.customizationData.weapons[2];
          this.replayedWeapon = this.customizationData.weapons[2];
          console.log(weapon);
          break;
        case 'KAR98K':
          this.chosenWeapon = this.customizationData.weapons[3];
          this.replayedWeapon = this.customizationData.weapons[3];
          console.log(weapon);
          break;
        case 'Assault Rifle':
          this.chosenWeapon = this.customizationData.weapons[0];
          this.replayedWeapon = this.customizationData.weapons[0];
          console.log(weapon);
          break;
        case 'AK47':
          this.chosenWeapon = this.customizationData.weapons[1];
          this.replayedWeapon = this.customizationData.weapons[1];
          console.log(weapon);
          break;
        case 'M1911':
          this.chosenWeapon = this.customizationData.weapons[4];
          this.replayedWeapon = this.customizationData.weapons[4];
          console.log(weapon);
          break;
        case 'M16A4':
          this.chosenWeapon = this.customizationData.weapons[5];
          this.replayedWeapon = this.customizationData.weapons[5];
          console.log(weapon);
          break;
        case 'PPSH':
          this.chosenWeapon = this.customizationData.weapons[6];
          this.replayedWeapon = this.customizationData.weapons[6];
          console.log(weapon);
          break;
        case 'AA12':
          this.chosenWeapon = this.customizationData.weapons[7];
          this.replayedWeapon = this.customizationData.weapons[7];
          console.log(weapon);
          break;
        case 'M14':
          this.chosenWeapon = this.customizationData.weapons[8];
          this.replayedWeapon = this.customizationData.weapons[8];
          console.log(weapon);
          break;
        case 'Steyr Aug':
          this.chosenWeapon = this.customizationData.weapons[9];
          this.replayedWeapon = this.customizationData.weapons[9];
          console.log(weapon);
          break;
      }
      if (!this.weaponsLoaded.get(this.chosenWeapon)) {
        this.loadWeapon(this.chosenWeapon, true, true);
        this.weaponsLoaded.set(this.chosenWeapon, true);
      }
      // localStorage.setItem('custom', JSON.stringify(this.selectedItems));
      UndoMgr.getInstance().clear();
      // this.designData = [];
      this.hideWeaponChoices = true;
      /*  this.allSections = this.customizationData.commonSections.slice() ///
           .concat(this.chosenWeapon.customizations.slice()); */
      this.viewerService.viewer.changeWeapon(this.replayedWeapon.modelFolder,
        this.replayedWeapon.modelFile, this.replayedWeapon.preview);
      this.viewerReset();
      this.replayedWeapon.meshNames.map(meshName => {
        this.viewerService.viewer.resetMaterial(meshName);
      });
      this.replayedWeapon.meshNames.map(meshName => {
        this.viewerService.viewer.changeMeshMaterial(meshName, 'Silver');
      });
      await attachData.map(item => {
        if (item.weaponName === weapon) {

          if (item.isAdding) {
            this.optionOn(item.option, item.section);
          } else {
            this.optionOff(item.option, item.section);
          }
        }
      });
      await designData.map(item => {
        if (item.weaponName === weapon) {
          UndoMgr.setMaterialProperty(this.viewerService.viewer, item.meshname,
            item.affectedParameter, item.interactionValue);
        }
      });
    } catch {

    }
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
        const uid = this.authService.userdata().uid || null;
        const membership = customers.filter(customer => customer.key === uid);
        this.membership = membership[0].planName.toLowerCase() || 'goatgunfree';
        localStorage.setItem('membership', this.membership);
        console.log(this.membership);
      });
  }

  upgradeMembership(event: MouseEvent) {
    if (this.authService.isLoggedIn) {
      // TODO
      this.openModal = this.modalService.show(CardpayComponent, { class: 'modal-lg' });
    } else {
      this.openModal = this.modalService.show(LoginComponent, { class: 'modal-lg' });
    }
    return this.stopEvent(event);
  }
}
