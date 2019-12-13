import {JPR, WeaponCustomization} from '../customizer-data-types';

export const m14: WeaponCustomization = {
    name: 'M14',
    modelFolder: 'assets/models/m14/',
    modelFile: 'm14.gltf',
    meshNames: [
        'assets/models/m14/m14.gltf.m14.stock_back_layer',
        'assets/models/m14/m14.gltf.m14.body',
        'assets/models/m14/m14.gltf.barrel',
        'assets/models/m14/m14.gltf.m14.wood',
        'assets/models/m14/m14.gltf.receiver',
        'assets/models/m14/m14.gltf.magazine',
        'assets/models/m14/m14.gltf.trigger',
        'assets/models/m14/m14.gltf.back_sight',
        'assets/models/m14/m14.gltf.cover_1.cover',
        'assets/models/m14/m14.gltf.m14.out_metal',
        'assets/models/m14/m14.gltf.m14.handle',
        'assets/models/m14/m14.gltf.metal_bottom',
        'assets/models/m14/m14.gltf.stock_covers',
        'assets/models/m14/m14.gltf.m14.stock_middle_layer',
        'assets/models/m14/m14.gltf.m14.end',
        'assets/models/m14/m14.gltf.barrel_back',
        'assets/models/m14/m14.gltf.under_barrel_dot',
        'assets/models/m14/m14.gltf.front_sight',
        'assets/models/m14/m14.gltf.acog',
        'assets/models/m14/m14.gltf.holographic_sight',
        'assets/models/m14/m14.gltf.red_dot_sight',
        'assets/models/m14/m14.gltf.reflect_sight',
        'assets/models/m14/m14.gltf.scope',
        'assets/models/m14/m14.gltf.extended_magazine',
        'assets/models/m14/m14.gltf.double_magazine',
        'assets/models/m14/m14.gltf.flash_light',
        'assets/models/m14/m14.gltf.extra_frame',
        'assets/models/m14/m14.gltf.cover_1.top_frame',
        'assets/models/m14/m14.gltf.grip01',
        'assets/models/m14/m14.gltf.grip02',
        'assets/models/m14/m14.gltf.grip03',
        'assets/models/m14/m14.gltf.silencer01',
        'assets/models/m14/m14.gltf.silencer02',
        'assets/models/m14/m14.gltf.silencer03',
        'assets/models/m14/m14.gltf.tactical_laser'
    ],
    svgPath: 'assets/img/weapon-icons/m14.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        },
        position: new BABYLON.Vector3(0, .05, 0)
    },
    materials: [
        {
            name: 'acog_mat_new',
            texture: 'assets/textures/common/acog_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/acog_normal.jpg',
        },
        {
            name: 'reflect_sight_mat_new',
            texture: 'assets/textures/common/reflect_sight_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/reflect_sight_normal.jpg',
        },
        {
            name: 'red_dot_sight_mat_new',
            texture: 'assets/textures/common/red_dot_sight_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/red_dot_sight_normal.jpg',
        },
        {
            name: 'holographic_sight_mat_new',
            texture: 'assets/textures/common/holographic_sight_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/holographic_sight_normal.jpg',
        },
        {
            name: 'scope_mat_new',
            texture: 'assets/textures/common/scope_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/scope_normal.jpg',
        },
        {
            name: 'tactical_laser_mat_new',
            texture: 'assets/textures/common/tactical_laser_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/tactical_laser_normal.jpg',
        },
        {
            name: 'grip01_mat_new',
            texture: 'assets/textures/common/grip01_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/grip01_normal.jpg',
        },
        {
            name: 'grip02_mat_new',
            texture: 'assets/textures/common/grip02_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/grip02_normal.jpg',
        },
        {
            name: 'grip03_mat_new',
            texture: 'assets/textures/common/grip03_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/grip03_normal.jpg',
        },
        {
            name: 'flash_light_mat_new',
            texture: 'assets/textures/common/flash_light_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/flash_light_normal.jpg',
        },
        {
            name: 'm14_mat_new',
            texture: 'assets/textures/m14/m14_diff.jpg',
            normalMap: 'assets/textures/m14/m14_normal.jpg',
            metallicRoughnessMap: 'assets/textures/m14/m14_specular.jpg',

        },
        {
            name: 'silencer01_mat_new',
            texture: 'assets/textures/common/silencer01_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/silencer01_normal.jpg',
        },
        {
            name: 'silencer02_mat_new',
            texture: 'assets/textures/common/silencer02_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/silencer02_normal.jpg',
        },
        {
            name: 'silencer03_mat_new',
            texture: 'assets/textures/common/silencer03_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/silencer03_normal.jpg',
        }
    ],
    replaceMaterials: [
        {
            newMaterialName: 'acog_mat_new',
            oldMaterialNames: ['acog_mat']
        },
        {
            newMaterialName: 'reflect_sight_mat_new',
            oldMaterialNames: ['reflect_sight_mat']
        },
        {
            newMaterialName: 'red_dot_sight_mat_new',
            oldMaterialNames: ['red_dot_sight_mat']
        },
        {
            newMaterialName: 'holographic_sight_mat_new',
            oldMaterialNames: ['holographic_sight_mat']
        },
        {
            newMaterialName: 'scope_mat_new',
            oldMaterialNames: ['scope_mat']
        },
        {
            newMaterialName: 'tactical_laser_mat_new',
            oldMaterialNames: ['tactical_laser_mat']
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
            newMaterialName: 'flash_light_mat_new',
            oldMaterialNames: ['flash_light_mat']
        },
        {
            newMaterialName: 'm14_mat_new',
            oldMaterialNames: ['m14_mat']
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
        }
    ],
   
   
   
    scale: {
        x: -0.0075,
        y: 0.0075,
        z: 0.0075
    },


    setupActions: [
        {
            type: 'showMesh',
            target: 'magazine'
        },
        {
            type: 'hideMesh',
            target: 'double_magazine'
        },
        {
            type: 'hideMesh',
            target: 'acog'
        },
        {
            type: 'hideMesh',
            target: 'extended_magazine'
        },
        {
            type: 'hideMesh',
            target: 'reflect_sight'
        },
        {
            type: 'hideMesh',
            target: 'red_dot_sight'
        },
        {
            type: 'hideMesh',
            target: 'holographic_sight'
        },
        {
            type: 'hideMesh',
            target: 'scope'
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
            target: 'grip01'
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
            target: 'flash_light'
        },
        {
            type: 'hideMesh',
            target: 'tactical_laser'
        },
        {
            type: 'hideMesh',
            target: 'top_frame'
        },
        {
            type: 'hideMesh',
            target: 'extra_frame'
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
                            interactionValue: 'acog',
                            include: 'top_frame'
                        },
                        {
                            name: 'holographic_sight',
                            displayImg: 'assets/img/common/icon_holographic_sight.png',
                            interactionValue: 'holographic_sight',
                            include: 'top_frame'
                        },
                        {
                            name: 'red_dot_sight',
                            displayImg: 'assets/img/common/icon_red_dot_sight.png',
                            interactionValue: 'red_dot_sight',
                            include: 'top_frame'
                        },
                        {
                            name: 'reflect_sight',
                            displayImg: 'assets/img/common/icon_reflex_sight.png',
                            interactionValue: 'reflect_sight',
                            include: 'top_frame'
                        },
                        {
                            name: 'scope',
                            displayImg: 'assets/img/common/icon_scope.png',
                            interactionValue: 'scope',
                            include: 'top_frame'
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
                            interactionValue: 'flash_light',
                            include: 'extra_frame'
                        }
                    ]
                },

                {
                    allowNone: true,
                    options: [
                        {
                            name: 'grip01',
                            displayImg: 'assets/img/common/icon_grip01.png',
                            interactionValue: 'grip01',
                            include: 'extra_frame'
                        },
                        {
                            name: 'grip02',
                            displayImg: 'assets/img/common/icon_grip02.png',
                            interactionValue: 'grip02',
                            include: 'extra_frame'
                        },
                        {
                            name: 'grip03',
                            displayImg: 'assets/img/common/icon_grip03.png',
                            interactionValue: 'grip03',
                            include: 'extra_frame'
                        }
                    ]
                },
                {
                    allowNone: true,
                    options: [

                        {
                            name: 'silencer01',
                            displayImg: 'assets/img/common/icon_sliencer01.png',
                            interactionValue: 'silencer01',
                        },
                        {
                            name: 'silencer02',
                            displayImg: 'assets/img/common/icon_sliencer02.png',
                            interactionValue: 'silencer02',
                        },
                        {
                            name: 'silencer03',
                            displayImg: 'assets/img/common/icon_sliencer03.png',
                            interactionValue: 'silencer03',
                        },
                    ]
                },
                {
                    allowNone: true,
                    options: [
                        {
                            name: 'tactical_laser',
                            displayImg: 'assets/img/common/icon_tactical_laser.png',
                            interactionValue: 'tactical_laser',
                            include: 'extra_frame'
                        }
                    ]
                }
            ]
        }

    ]
};