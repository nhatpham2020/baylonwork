import {JPR, WeaponCustomization} from '../customizer-data-types';

export const m1garand: WeaponCustomization = {
    name: 'M1 Garand',
    modelFolder: 'assets/models/m1garand/',
    modelFile: 'M1Combined.gltf',
    meshNames: [
        'assets/models/m1garand/M1Combined.gltf.RootNode.gunfix.top_body',
        'assets/models/m1garand/M1Combined.gltf.RootNode.gunfix.Barrel',
        'assets/models/m1garand/M1Combined.gltf.RootNode.gunfix.mechanic',
        'assets/models/m1garand/M1Combined.gltf.RootNode.gunfix.Main_Body',
        'assets/models/m1garand/M1Combined.gltf.RootNode.gunfix.parts',
        'assets/models/m1garand/M1Combined.gltf.RootNode.body.Suppressor',
        'assets/models/m1garand/M1Combined.gltf.RootNode.Bayonet.Blade',
        'assets/models/m1garand/M1Combined.gltf.RootNode.body.Flash_Hider',
        'assets/models/m1garand/M1Combined.gltf.RootNode.M84_Scope.M84_Body',
        'assets/models/m1garand/M1Combined.gltf.RootNode.Experimental_Sights.Exp_Body'
    ],
    svgPath: 'assets/img/weapon-icons/m1_garand.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        }

    },
    
    materials: [
        {
            name: 'M1Bayonet',
            texture: 'assets/textures/m1garand/M1Garand_Bayonet_BaseColor.jpg',
            metallicRoughnessMap: 'assets/textures/m1garand/M1Garand_Bayonet_MetallicRoughness.jpg',
            normalMap: 'assets/textures/m1garand/M1Garand_Bayonet_Normal.jpg'
        },
        {
            name: 'M1ExperimentalScope',
            texture: 'assets/textures/m1garand/M1Garand_ExperimentalScope_BaseColor.jpg',
            metallicRoughnessMap: 'assets/textures/m1garand/M1Garand_ExperimentalScope_MetallicRoughness.jpg',
            normalMap: 'assets/textures/m1garand/M1Garand_ExperimentalScope_Normal.jpg'
        },
        {
            name: 'M1M84Scope',
            texture: 'assets/textures/m1garand/M1Garand_M84Scope_BaseColor.jpg',
            metallicRoughnessMap: 'assets/textures/m1garand/M1Garand_M84Scope_MetallicRoughness.jpg',
            normalMap: 'assets/textures/m1garand/M1Garand_M84Scope_Normal.jpg'
        },
        {
            name: 'M1MuzzleMods',
            texture: 'assets/textures/m1garand/M1Garand_MuzzleMods_BaseColor.jpg',
            metallicRoughnessMap: 'assets/textures/m1garand/M1Garand_MuzzleMods_MetallicRoughness.jpg',
            normalMap: 'assets/textures/m1garand/M1Garand_MuzzleMods_Normal.jpg'
        },
        {
            name: 'M1Body',
            color: '#70240b',
            texture: 'assets/textures/m1garand/body_Detail.jpg',
            roughness: 1.00,
            normalMap: 'assets/textures/m1garand/body_normal.jpg'
        },
        {
            name: 'M1TopBody',
            color: '#70240b',
            texture: 'assets/textures/m1garand/top_body_Detail.jpg',
            roughness: 1.00,
            normalMap: 'assets/textures/m1garand/top_body_normal.jpg'
        },
        {
            name: 'M1Barrel',
            color: '#c4c7c7', // color: '#c4c7c7',
            texture: 'assets/textures/m1garand/barrel_Detail.jpg',
            metal: true,
            roughness: 0.95,
            normalMap: 'assets/textures/m1garand/barrel_normal.jpg'
        },
        {
            name: 'M1Mechanical',
            color: '#484B51', //  color: '#484B51',
            texture: 'assets/textures/m1garand/receiver_Detail.jpg',
            metal: true,
            roughness: 0.95,
            normalMap: 'assets/textures/m1garand/receiver_normal.jpg'
        },
        {
            name: 'M1Parts',
            color: '#464A55', //  color: '#464A55',
            texture: 'assets/textures/m1garand/parts_Detail.jpg',
            metal: true,
            roughness: 0.95,
            normalMap: 'assets/textures/m1garand/partsn.jpg'
        }
    ],
    replaceMaterials: [
        {
            newMaterialName: 'M1Bayonet',
            oldMaterialNames: ['M1Garand_Bayonet']
        },
        {
            newMaterialName: 'M1ExperimentalScope',
            oldMaterialNames: ['M1Garand_ExperimentalSight']
        },
        {
            newMaterialName: 'M1M84Scope',
            oldMaterialNames: ['lambert5']
        },
        {
            newMaterialName: 'M1MuzzleMods',
            oldMaterialNames: ['M1Garand_Muzzle']
        },
        {
            newMaterialName: 'M1Body',
            oldMaterialNames: ['lambert6']
        },
        {
            newMaterialName: 'M1TopBody',
            oldMaterialNames: ['lambert10']
        },
        {
            newMaterialName: 'M1Barrel',
            oldMaterialNames: ['lambert9']
        },
        {
            newMaterialName: 'M1Mechanical',
            oldMaterialNames: ['lambert7']
        },
        {
            newMaterialName: 'M1Parts',
            oldMaterialNames: ['lambert8']
        }
    ],
    setupActions: [
        {
            type: 'hideMesh',
            target: 'Experimental_Sights'
        },
        {
            type: 'hideMesh',
            target: 'M84_Scope'
        },
        {
            type: 'hideMesh',
            target: 'Bayonet'
        },
        {
            type: 'hideMesh',
            target: 'Flash_Hider'
        },
        {
            type: 'hideMesh',
            target: 'Suppressor'
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
                            name: 'Experimental Sight',
                            displayImg: 'assets/img/m1garand-icons/Icon_ExpSight.png',
                            interactionValue: 'Experimental_Sights'
                        },
                        {
                            name: 'M84 Scope',
                            displayImg: 'assets/img/m1garand-icons/Icon_M84Scope.png',
                            interactionValue: 'M84_Scope'
                        }
                    ]
                },
                {
                    allowNone: true,
                    options: [
                        {
                            name: 'Bayonet',
                            displayImg: 'assets/img/m1garand-icons/Icon_Bayonet.png',
                            interactionValue: 'Bayonet'
                        }
                    ]
                },
                {
                    allowNone: true,
                    options: [
                        {
                            name: 'Flash Hider',
                            displayImg: 'assets/img/m1garand-icons/Icon_FlashHider.png',
                            interactionValue: 'Flash_Hider'
                        },
                        {
                            name: 'Suppressor',
                            displayImg: 'assets/img/m1garand-icons/Icon_Suppressor.png',
                            interactionValue: 'Suppressor'
                        }
                    ]
                }
            ]
        }
    ]
}