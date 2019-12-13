import {JPR, WeaponCustomization} from '../customizer-data-types';

export const m1911: WeaponCustomization = {
    name: 'M1911',
    modelFolder: 'assets/models/m1911/',
    modelFile: 'm1911.gltf',
    meshNames: [
        'assets/models/m1911/m1911.gltf._silencer',
        'assets/models/m1911/m1911.gltf._body.barrel',
        'assets/models/m1911/m1911.gltf._body.plastic',
        'assets/models/m1911/m1911.gltf.trigger',
        'assets/models/m1911/m1911.gltf._mag',
        'assets/models/m1911/m1911.gltf.receiver',
        'assets/models/m1911/m1911.gltf.bolt'
    ],
    svgPath: 'assets/img/weapon-icons/m1911.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        }

    },
    materials: [
        {
            name: '_mat_new',
            texture: 'assets/textures/m1911/_mat_spec.jpg',
            normalMap: 'assets/textures/m1911/_mat_normal.jpg',
            metallicRoughnessMap: 'assets/textures/m1911/_mat_baseColor.jpg',
        }
    ],
    replaceMaterials: [
        {
            newMaterialName: '_mat_new',
            oldMaterialNames: ['_mat']
        }
    ],
    rotation: {
        x: 0,
        y: 0,
        z: 0
    },
    scale: {
        x: 1.5,
        y: 1.5,
        z: 1.5
    },
    setupActions: [
        {
            type: 'hideMesh',
            target: '_silencer'
        }
    ],
    customizations: [
        {
            svgPath: 'assets/img/section-icons/grip-v2.svg',
            name: 'Attachments',
            globalReset: true,
            interactionType: 'toggleMesh',
            optionGroups: [
                {
                    allowNone: true,
                    options: [
                        {
                            name: 'silencer',
                            displayImg: 'assets/img/m1911/icon_sliencer.png',
                            interactionValue: '_silencer'
                        }
                    ]
                }
            ]
        }

    ]
};