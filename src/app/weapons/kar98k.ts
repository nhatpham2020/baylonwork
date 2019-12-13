import {JPR, WeaponCustomization} from '../customizer-data-types';

export const kar98k: WeaponCustomization = {
    name: 'KAR98K',
    modelFolder: 'assets/models/kar98k/',
    modelFile: 'kar98.gltf',
    meshNames: [
       
    ],
    svgPath: 'assets/img/weapon-icons/kar98k.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        },
        position: new BABYLON.Vector3(-.1, 0, 0)
    },
    position: {
        x: 0,
        y: .05,
        z: .1
    },
    
    materials: [
        {
            name: 'blinn1_new',
            texture: 'assets/textures/kar98k/Karbiner98k_BaseColor.jpg',
            normalMap: 'assets/textures/kar98k/Karbiner98k_Normal.jpg',
            metallicRoughnessMap: 'assets/textures/kar98k/Karbiner98k_Metallic.jpg',
        },
    ],
    
    replaceMaterials: [
        {
            newMaterialName: 'blinn1_new',
            oldMaterialNames: ['blinn1']
        },
     ],
    scale: {
        x: -0.01,
        y: 0.01,
        z: 0.01
    },
    setupActions: [
    ],
    customizations: [


    ]
};