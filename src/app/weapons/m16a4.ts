import {JPR, WeaponCustomization} from '../customizer-data-types';

export const m16a4: WeaponCustomization = {
    name: 'M16A4',
    modelFolder: 'assets/models/m16a4/',
    modelFile: 'm16a4.gltf',
    meshNames: [
        'assets/models/m16a4/m16a4.gltf.inner_barrel',
        'assets/models/m16a4/m16a4.gltf.trigger_flashhider.trigger_flashhider_0',
        'assets/models/m16a4/m16a4.gltf.frontsight',
        'assets/models/m16a4/m16a4.gltf.extended_barrel',
        'assets/models/m16a4/m16a4.gltf.barrel.barrel_0',
        'assets/models/m16a4/m16a4.gltf.receiver.receiver_1',
        'assets/models/m16a4/m16a4.gltf.stock',
        'assets/models/m16a4/m16a4.gltf.WPN_M16_Exchangeables.handle',
        'assets/models/m16a4/m16a4.gltf.magazine.magazine_1',
        'assets/models/m16a4/m16a4.gltf.optic_scope.optic_scope_0',
        'assets/models/m16a4/m16a4.gltf.holographic_sight',
        'assets/models/m16a4/m16a4.gltf.red_dot_sight',
        'assets/models/m16a4/m16a4.gltf.reflect_sight',
        'assets/models/m16a4/m16a4.gltf.scope',
        'assets/models/m16a4/m16a4.gltf.silencer01',
        'assets/models/m16a4/m16a4.gltf.silencer02',
        'assets/models/m16a4/m16a4.gltf.silencer03',

        'assets/models/m16a4/m16a4.gltf.grip',
        'assets/models/m16a4/m16a4.gltf.flash_light',
        'assets/models/m16a4/m16a4.gltf.tactical_laser'
    ],
    svgPath: 'assets/img/weapon-icons/m16a4.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        }

    },
    materials: [
        {
            name: 'receiver_new',
            texture: 'assets/textures/m16a4/WPNT_M16_Receiver_Base_Color.jpg',
            normalMap: 'assets/textures/m16a4/WPNT_M16_Receiver_Normal_OpenGL.jpg'
        },
        {
            name: 'exchangeables_new',
            texture: 'assets/textures/m16a4/WPNT_M16_Exchangeables_Base_Color.jpg',
            normalMap: 'assets/textures/m16a4/WPNT_M16_Exchangeables_Normal_OpenGL.jpg'
        },
        {
            name: 'folding_sight_new',
            texture: 'assets/textures/m16a4/WPNT_Folding_Sights_Base_Color.jpg',
            normalMap: 'assets/textures/m16a4/WPNT_Folding_Sights_Normal_OpenGL.jpg'
        },

        {
            name: 'optic_scope_new',
            texture: 'assets/textures/m16a4/WPNT_Optic_Scope_Base_Color.jpg',
            normalMap: 'assets/textures/m16a4/WPNT_Optic_Scope_Normal_OpenGL.jpg'
        },
        {
            name: 'optic_scope_lenses_new',
            texture: 'assets/textures/m16a4/WPNT_Scope_lenses_Base_Color.jpg',
            metallicRoughnessMap: 'assets/textures/m16a4/WPNT_Scope_lenses_Roughness.jpg',
            normalMap: 'assets/textures/m16a4/WPNT_Scope_lenses_Normal_OpenGL.jpg'
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
            name: 'flash_light_mat_new',
            texture: 'assets/textures/common/flash_light_mat_baseColor.jpg',
            normalMap: 'assets/textures/common/flash_light_normal.jpg',
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
            newMaterialName: 'receiver_new',
            oldMaterialNames: ['WPNM_M16_Receiver']
        },
        {
            newMaterialName: 'exchangeables_new',
            oldMaterialNames: ['WPNM_M16_Exchangeables']
        },
        {
            newMaterialName: 'folding_sight_new',
            oldMaterialNames: ['WPNM_Folding_Sights']
        },
        {
            newMaterialName: 'optic_scope_new',
            oldMaterialNames: ['WPNM_Optic_Scope']
        },
        {
            newMaterialName: 'optic_scope_lenses_new',
            oldMaterialNames: ['WPNM_Optic_Scope_lenses']
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
            newMaterialName: 'flash_light_mat_new',
            oldMaterialNames: ['flash_light_mat']
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
    position: {
        x: 0,
        y: 0.01,
        z: 0.0
    },
    setupActions: [
        {
            type: 'hideMesh',
            target: 'silencer03'
        },
        {
            type: 'hideMesh',
            target: 'silencer02'
        },
        {
            type: 'hideMesh',
            target: 'silencer01'
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
            target: 'scope'
        },
        {
            type: 'hideMesh',
            target: 'holographic_sight'
        },
        {
            type: 'hideMesh',
            target: 'optic_scope'
        },
        {
            type: 'hideMesh',
            target: 'tactical_laser'
        },
        {
            type: 'hideMesh',
            target: 'flash_light'
        },
        {
            type: 'hideMesh',
            target: 'Default light'
        },
        {
            type: 'hideMesh',
            target: 'grip'
        },

    ],
    scale: {
        x: -0.012,
        y: 0.012,
        z: 0.012
    },

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
                            name: 'optic_scope',
                            displayImg: 'assets/img/common/icon_acog.png',
                            interactionValue: 'optic_scope',
                        },
                        {
                            name: 'holographic_sight',
                            displayImg: 'assets/img/common/icon_holographic_sight.png',
                            interactionValue: 'holographic_sight',
                        },
                        {
                            name: 'red_dot_sight',
                            displayImg: 'assets/img/common/icon_red_dot_sight.png',
                            interactionValue: 'red_dot_sight',
                        },
                        {
                            name: 'reflect_sight',
                            displayImg: 'assets/img/common/icon_reflex_sight.png',
                            interactionValue: 'reflect_sight',
                        },
                        {
                            name: 'scope',
                            displayImg: 'assets/img/common/icon_scope.png',
                            interactionValue: 'scope',
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
                            name: 'grip',
                            displayImg: 'assets/img/common/icon_grip01.png',
                            interactionValue: 'grip',
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
            ]
        }

    ]
};
