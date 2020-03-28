import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppearanceOption, WeaponCustomizationData } from './customizer-data-types';
import { m1garand } from './weapons/m1garand';
import { assaultRifle } from './weapons/assaultRifle';
import { ak47 } from './weapons/ak47';
import { m1911 } from './weapons/m1911';
import { m16a4 } from './weapons/m16a4';
import { ppsh } from './weapons/ppsh';
import { aa12 } from './weapons/aa12';
import { m14 } from './weapons/m14';
import { steyr } from './weapons/steyr';
import { kar98k } from './weapons/kar98k';
import { PatternService } from './services/pattern.service';
import { AuthService } from './auth/auth.service';

const weaponsAvailable = [
  assaultRifle,
  ak47,
  m1garand,
  kar98k,
  m1911,
  m16a4,
  ppsh,
  aa12,
  m14,
  steyr,
  //  triangle,
];


let weaponsConfig;

/********************************************************************/
/**
 * setting up URLs for debugging
 */
function setup() {
  const hash = window.location.hash.substr(1);

  if (hash == '') {
    weaponsConfig = weaponsAvailable;
    return;
  }
  const opt = hash.split('');
  const id = parseInt(opt[0], 10);

  const hasMaterials = Boolean(parseInt(opt[1], 10));

  if (!hasMaterials) {
    weaponsAvailable[id].materials = [];
  }


  weaponsConfig = [weaponsAvailable[id]];


}

setup();


window.addEventListener('hashchange', function () {
  window.location.reload();
}, false);

/********************************************************************/
export interface ColorOptionInterface {
  name: string;
  displayColor: string;
  interactionValue: string;

}

const colorOptions: ColorOptionInterface[] = [
  {
    name: 'Black10',
    displayColor: '#000000',
    interactionValue: '#000000'
  },
  {
    name: 'Grey12',
    displayColor: '#4c4c4c',
    interactionValue: '#4c4c4c'
  },
  {
    name: 'Silver0',
    displayColor: '#fcfaf5',
    interactionValue: '#fcfaf5'
  },
  {
    name: 'Yellow7',
    displayColor: '#FFFF00',
    interactionValue: '#FFFF00'
  },
  {
    name: 'Orange8',
    displayColor: '#FFA500',
    interactionValue: '#FFA500'
  },
  {
    name: 'Red9',
    displayColor: '#FF0000',
    interactionValue: '#FF0000'
  },
  {
    name: 'Brown11',
    displayColor: '#5f4322',
    interactionValue: '#5f4322'
  },
  {
    name: 'Pink1',
    displayColor: '#EE82EE',
    interactionValue: '#EE82EE'
  },
  {
    name: 'PinkBlue14',
    displayColor: '#c918c3',
    interactionValue: '#c918c3'
  },
  {
    name: 'Fuchsia2',
    displayColor: '#800080',
    interactionValue: '#800080'
  },
  {
    name: 'Pink13',
    displayColor: '#006acd',
    interactionValue: '#006acd'
  },
  {
    name: 'Blue3',
    displayColor: '#000080',
    interactionValue: '#000080'
  },
  {
    name: 'Teal4',
    displayColor: '#7FFFD4',
    interactionValue: '#7FFFD4'
  },
  {
    name: 'Lime5',
    displayColor: '#00FF00',
    interactionValue: '#00FF00'
  },
  {
    name: 'Green6',
    displayColor: '#008000',
    interactionValue: '#008000'
  },
];

const colorOptionsPack3: ColorOptionInterface[] =
  [
    {
      name: 'Lime',
      displayColor: '#00FF00',
      interactionValue: '#00FF00'
    },
    {
      name: 'Green',
      displayColor: '#008000',
      interactionValue: '#008000'
    },
    {
      name: 'Yellow',
      displayColor: '#FFFF00',
      interactionValue: '#FFFF00'
    },
    {
      name: 'Orange',
      displayColor: '#FFA500',
      interactionValue: '#FFA500'
    },
    {
      name: 'Red',
      displayColor: '#FF0000',
      interactionValue: '#FF0000'
    }
  ];


@Injectable()
export class CustomizerDataService {
  isAdmin = false;
  constructor(private auth: AuthService) {
    this.isAdmin = this.auth.isAdmin();

  }

  generateTextureOptions(): AppearanceOption[] {
    const options: AppearanceOption[] = [];

    if (this.isAdmin) {
      const patterns: any[] = JSON.parse(localStorage.getItem('patternsData'));
      patterns.map((pattern) => {
        const uri = 'assets/img/patterns/pattern/' + pattern.index.toString() + '.jpg';
        options.push({
          name: pattern.name,
          displayImg: uri,
          interactionValue: uri,
          index: pattern.index,
          key: pattern.key
        });
      })
    } else {
      const patterns: any[] = JSON.parse(localStorage.getItem('deployedPatternData'));
      patterns.map((pattern) => {
        const uri = 'assets/img/patterns/pattern/' + pattern.index.toString() + '.jpg';
        if (pattern.visibility == true) {
          options.push({
            name: pattern.name,
            displayImg: uri,
            interactionValue: uri,
            index: pattern.index,
            key: pattern.key
          });
        }

      });


      if (localStorage.getItem('mypatterns') && localStorage.getItem('user')) {
        const myPatterns: any[] = JSON.parse(localStorage.getItem('mypatterns'));
        const uid = JSON.parse(localStorage.getItem('user')).uid;
        myPatterns.map((pattern) => {
          const uri = `assets/img/patterns/pattern/${uid}/` + pattern.index.toString() + '.jpg';
          options.push({
            name: pattern.name,
            displayImg: uri,
            interactionValue: uri,
            index: pattern.index,
            key: pattern.key
          });
        });
      }
    }
    return options;
  }

  weaponsData(): Observable<WeaponCustomizationData> {
    let textureOptions = this.generateTextureOptions();

    return of({
      //environment: 'assets/textures/environments/parking.hdr',
      environment: '/assets/textures/environments/parking/',
      commonMaterials: [
        {
          name: 'Silver',
          color: '#fcfaf5',
          metal: true,
          roughness: 0.32
        },
        {
          name: 'Plastic',
          color: '#ffffff',
          metal: false,
          roughness: 0.48
        }
      ],
      commonSections: [
        {
          svgPath: 'assets/img/section-icons/color-v2.svg',
          name: 'Color',
          globalReset: true,
          interactionType: 'alterMaterial',
          affectedParameter: 'color',
          optionGroups: [
            {
              itemCustomClasses: 'color-select-button',
              allowNone: true,
              //options: [...colorOptions, ...colorOptionsPack2, ...colorOptionsPack3],
              options: [...colorOptions],
              id: 'colors-all',
              name: 'ALL'
            },
            /* {
                itemCustomClasses: 'color-select-button',
                allowNone: true,
                options: colorOptionsPack2,
                id: 'colors-pack-1',
                name: 'PACK 1'
            },
            {
                itemCustomClasses: 'color-select-button',
                allowNone: true,
                options: colorOptionsPack3,
                id: 'colors-pack-2',
                name: 'PACK 2'
            } */
          ]
        },
        {
          svgPath: 'assets/img/section-icons/textures-v2.svg',
          name: 'Patterns',
          globalReset: true,
          interactionType: 'alterMaterial',
          affectedParameter: 'texture',
          optionGroups: [
            {
              allowNone: true,
              options: textureOptions
            }
          ]
        }
      ],
      weapons: weaponsConfig
    });
  }



}
