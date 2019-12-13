import {JPR, WeaponCustomization} from '../customizer-data-types';

export const triangle: WeaponCustomization = {
    name: 'PPSH',
    modelFolder: 'assets/models/triangle/',
    modelFile: 'Triangle.gltf',
    meshNames: [
        'assets/models/ppsh/ppsh.gltf.trigger_bolt',
        'assets/models/ppsh/ppsh.gltf.stock',
        'assets/models/ppsh/ppsh.gltf.metal',
        'assets/models/ppsh/ppsh.gltf.barrel',
        'assets/models/ppsh/ppsh.gltf.Drum_Magazine',
        'assets/models/ppsh/ppsh.gltf.Stick_Magazine'

    ],
    svgPath: 'assets/img/weapon-icons/ppsh.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        }

    },
    materials: [],
    replaceMaterials: [],
    rotation: {
        x: 0,
        y: 90,
        z: 0
    },
    position: {
        x: 0,
        y: 0,
        z: 0.3
    },
    setupActions: [],
    scale: {
        x: 1,
        y: 1,
        z: 1
    },
    customizations: []
};
