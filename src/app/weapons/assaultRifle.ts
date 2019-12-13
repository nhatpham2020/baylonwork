import {JPR, WeaponCustomization} from '../customizer-data-types';

export const assaultRifle: WeaponCustomization = {
    name: 'Assault Rifle',
    modelFolder: 'assets/models/assault-rifle/',
    modelFile: 'assault-rifle.gltf',
    meshNames: [
        'assets/models/assault-rifle/assault-rifle.gltf.metal',
        'assets/models/assault-rifle/assault-rifle.gltf.barrel',
        'assets/models/assault-rifle/assault-rifle.gltf.magazine',
        'assets/models/assault-rifle/assault-rifle.gltf.honey_badger.handle',
        'assets/models/assault-rifle/assault-rifle.gltf.honey_badger.receiver',
        'assets/models/assault-rifle/assault-rifle.gltf.stock',
        'assets/models/assault-rifle/assault-rifle.gltf.acog',
        'assets/models/assault-rifle/assault-rifle.gltf.holographic_sight',
        'assets/models/assault-rifle/assault-rifle.gltf.reflect_sight',
        'assets/models/assault-rifle/assault-rifle.gltf.scope',
        'assets/models/assault-rifle/assault-rifle.gltf.extended_magazine',
        'assets/models/assault-rifle/assault-rifle.gltf.double_magazine',
        'assets/models/assault-rifle/assault-rifle.gltf.grip01',
        'assets/models/assault-rifle/assault-rifle.gltf.grip02',
        'assets/models/assault-rifle/assault-rifle.gltf.grip03',
        'assets/models/assault-rifle/assault-rifle.gltf.silencer01',
        'assets/models/assault-rifle/assault-rifle.gltf.silencer02',
        'assets/models/assault-rifle/assault-rifle.gltf.silencer03',
        'assets/models/assault-rifle/assault-rifle.gltf.tactical_laser'
    ],
    svgPath: 'assets/img/weapon-icons/assault-rifle.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        },
        position: new BABYLON.Vector3(-.1, 0, 0),
    },
    scale: {
        x: -0.75,
        y: 0.75,
        z: 0.75
    },
    position: {
        x: 0,
        y: -.1,
        z: 0
    },
    materials: [
        {
            name: 'honey_badger_mat_new',
            texture: 'assets/textures/assault-rifle/honey_badger_mat_baseColor.jpg',
            normalMap: 'assets/textures/assault-rifle/honey_badger_normal.jpg',
        },
        {
            name: 'silencer03_mat_new',
            texture: 'assets/textures/common/silencer03_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/silencer03_normal.jpg'
        },
        {
            name: 'silencer01_mat_new',
            texture: 'assets/textures/common/silencer01_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/silencer01_normal.jpg'
        },
        {
            name: 'silencer02_mat_new',
            texture: 'assets/textures/common/silencer02_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/silencer02_normal.jpg'
        },
        {
            name: 'grip02_mat_new',
            texture: 'assets/textures/common/grip02_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/grip02_normal.jpg'
        },
        {
            name: 'reflect_sight_mat_new',
            texture: 'assets/textures/common/reflect_sight_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/reflect_sight_normal.jpg'
        },
        {
            name: 'red_dot_sight_mat_new',
            texture: 'assets/textures/common/red_dot_sight_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/red_dot_sight_normal.jpg'
        },
        {
            name: 'holographic_sight_mat_new',
            texture: 'assets/textures/common/holographic_sight_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/holographic_sight_normal.jpg'
        },
        {
            name: 'grip01_mat_new',
            texture: 'assets/textures/common/grip01_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/grip01_normal.jpg'
        },
        {
            name: 'grip03_mat_new',
            texture: 'assets/textures/common/grip03_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/grip03_normal.jpg'
        },
        {
            name: 'tactical_laser_mat_new',
            texture: 'assets/textures/common/tactical_laser_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/tactical_laser_normal.jpg'
        },
        {
            name: 'acog_mat_new',
            texture: 'assets/textures/common/acog_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/acog_normal.jpg'
        },
        {
            name: 'flash_light_mat_new',
            texture: 'assets/textures/common/flash_light_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/flash_light_normal.jpg'
        },
        {
            name: 'scope_mat_new',
            texture: 'assets/textures/common/scope_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/scope_normal.jpg'
        },
    ],
    replaceMaterials: [
        {
            newMaterialName: 'acog_mat_new',
            oldMaterialNames: ['acog_mat']
        },
        {
            newMaterialName: 'flash_light_mat_new',
            oldMaterialNames: ['flash_light_mat']
        },
        {
            newMaterialName: 'grip01_mat_new',
            oldMaterialNames: ['grip01_mat']
        },
        {
            newMaterialName: 'grip02_mat_new',
            oldMaterialNames: ['grip02_mat']
        },
        {
            newMaterialName: 'grip03_mat_new',
            oldMaterialNames: ['grip03_mat']
        },
        {
            newMaterialName: 'honey_badger_mat_new',
            oldMaterialNames: ['honey_badger_mat']
        },
        {
            newMaterialName: 'holographic_sight_mat_new',
            oldMaterialNames: ['holographic_sight_mat']
        },
        {
            newMaterialName: 'red_dot_sight_mat_new',
            oldMaterialNames: ['red_dot_sight_mat']
        },
        {
            newMaterialName: 'reflect_sight_mat_new',
            oldMaterialNames: ['reflect_sight_mat']
        },
        {
            newMaterialName: 'scope_mat_new',
            oldMaterialNames: ['scope_mat']
        },
        {
            newMaterialName: 'silencer01_mat_new',
            oldMaterialNames: ['silencer01_mat']
        },
        {
            newMaterialName: 'silencer02_mat_new',
            oldMaterialNames: ['silencer02_mat']
        },

        {
            newMaterialName: 'silencer03_mat_new',
            oldMaterialNames: ['silencer03_mat']
        },

        {
            newMaterialName: 'tactical_laser_mat_new',
            oldMaterialNames: ['tactical_laser_mat']
        },
    ],


    setupActions: [
        {
            type: 'showMesh',
            target: 'magazine'
        },
        {
            type: 'hideMesh',
            target: 'acog'
        },
        {
            type: 'hideMesh',
            target: 'double_magazine'
        },
        {
            type: 'hideMesh',
            target: 'extended_magazine'
        },
        {
            type: 'hideMesh',
            target: 'flash_light'
        },
        {
            type: 'hideMesh',
            target: 'grip01'
        },
        {
            type: 'hideMesh',
            target: 'grip02'
        },
        {
            type: 'hideMesh',
            target: 'grip03'
        },
        {
            type: 'hideMesh',
            target: 'holographic_sight'
        },
        {
            type: 'hideMesh',
            target: 'red_dot_sight'
        },
        {
            type: 'hideMesh',
            target: 'silencer01'
        },
        {
            type: 'hideMesh',
            target: 'silencer02'
        },
        {
            type: 'hideMesh',
            target: 'silencer03'
        },
        {
            type: 'hideMesh',
            target: 'tactical_laser'
        },
        {
            type: 'hideMesh',
            target: 'scope'
        },
        {
            type: 'hideMesh',
            target: 'reflect_sight'
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
                            name: 'acog',
                            displayImg: 'assets/img/common/icon_acog.png',
                            interactionValue: 'acog'
                        },
                        {
                            name: 'holographic sight',
                            displayImg: 'assets/img/common/icon_holographic_sight.png',
                            interactionValue: 'holographic_sight'
                        },
                        {
                            name: 'red_dot_sight',
                            displayImg: 'assets/img/common/icon_red_dot_sight.png',
                            interactionValue: 'red_dot_sight'
                        },
                        {
                            name: 'reflect_sight',
                            displayImg: 'assets/img/common/icon_reflex_sight.png',
                            interactionValue: 'reflect_sight'
                        },
                        {
                            name: 'scope',
                            displayImg: 'assets/img/common/icon_scope.png',
                            interactionValue: 'scope'
                        }
                    ]
                },
                {
                    allowNone: false,
                    options: [
                        {
                            name: 'magazine',
                            displayImg: 'assets/img/common/icon_magazine.png',
                            interactionValue: 'magazine'
                        },
                        {
                            name: 'extended_magazine',
                            displayImg: 'assets/img/common/icon_extended_magazine.png',
                            interactionValue: 'extended_magazine'
                        },
                        {
                            name: 'double_magazine',
                            displayImg: 'assets/img/common/icon_double_magazine.png',
                            interactionValue: 'double_magazine'
                        }
                    ]
                },

                {
                    allowNone: true,
                    options: [
                        {
                            name: 'flashlight',
                            displayImg: 'assets/img/common/icon_flashlight.png',
                            interactionValue: 'flash_light'
                        }
                    ]
                },

                {
                    allowNone: true,
                    options: [
                        {
                            name: 'grip01',
                            displayImg: 'assets/img/common/icon_grip01.png',
                            interactionValue: 'grip01'
                        },
                        {
                            name: 'grip02',
                            displayImg: 'assets/img/common/icon_grip02.png',
                            interactionValue: 'grip02'
                        },
                        {
                            name: 'grip03',
                            displayImg: 'assets/img/common/icon_grip03.png',
                            interactionValue: 'grip03'
                        }
                    ]
                },
                {
                    allowNone: true,
                    options: [
                        {
                            name: 'silencer01',
                            displayImg: 'assets/img/common/icon_sliencer01.png',
                            interactionValue: 'silencer01'
                        },
                        {
                            name: 'silencer02',
                            displayImg: 'assets/img/common/icon_sliencer02.png',
                            interactionValue: 'silencer02'
                        },
                        {
                            name: 'silencer03',
                            displayImg: 'assets/img/common/icon_sliencer03.png',
                            interactionValue: 'silencer03'
                        }
                    ]
                },
                {
                    allowNone: true,
                    options: [
                        {
                            name: 'tactical_laser',
                            displayImg: 'assets/img/common/icon_tactical_laser.png',
                            interactionValue: 'tactical_laser'
                        }
                    ]
                }
            ]
        }

    ]
};
