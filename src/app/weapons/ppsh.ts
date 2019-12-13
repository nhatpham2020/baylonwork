import {JPR, WeaponCustomization} from '../customizer-data-types';

export const ppsh: WeaponCustomization = {
    name: 'PPSH',
    modelFolder: 'assets/models/ppsh/',
    modelFile: 'ppsh.gltf',
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
        orientation: new JPR(Math.PI / 2, 0, -Math.PI / 6),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        },
        position: new BABYLON.Vector3(0, .05, 0)
    },
    materials: [
        {
            name: 'PPSH_new',
            texture: 'assets/textures/ppsh/PPSH_BaseColor.jpg',
            normalMap: 'assets/textures/ppsh/PPSH_Normal.jpg',
            metallicRoughnessMap: 'assets/textures/ppsh/PPSH_Metallic.jpg'
        },
        {
            name: 'Magazine_new',
            texture: 'assets/textures/ppsh/Magazine_BaseColor.jpg',
            normalMap: 'assets/textures/ppsh/Magazine_Normal.jpg',
            metallicRoughnessMap: 'assets/textures/ppsh/Magazine_Metallic.jpg'
        },
    ],
    replaceMaterials: [
        {
            newMaterialName: 'PPSH_new',
            oldMaterialNames: ['PPSH']
        },
        {
            newMaterialName: 'Magazine_new',
            oldMaterialNames: ['Magazine']
        }
    ],
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
    setupActions: [
        {
            type: 'hideMesh',
            target: 'Stick_Magazine'
        },
        {
            type: 'showMesh',
            target: 'Drum_Magazine'
        }
    ],
    scale: {
        x: -0.021,
        y: 0.021,
        z: 0.021
    },
    customizations: [
        {
            svgPath: 'assets/img/section-icons/grip-v2.svg',
            name: 'Attachments',
            globalReset: true,
            interactionType: 'toggleMesh',
            optionGroups: [
                {
                    allowNone: false,
                    options: [
                        {
                            name: 'Drum_Magazine',
                            displayImg: 'assets/img/ppsh/icon_magazine_drum.png',
                            interactionValue: 'Drum_Magazine'
                        },
                        {
                            name: 'Stick_Magazine',
                            displayImg: 'assets/img/ppsh/icon_magazine.png',
                            interactionValue: 'Stick_Magazine'
                        }
                    ]
                }
            ]
        }

    ]
};
