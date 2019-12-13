import {JPR, WeaponCustomization} from '../customizer-data-types';

export const steyr: WeaponCustomization = {
    name: 'Steyr Aug',
    modelFolder: 'assets/models/steyr/',
    modelFile: 'steyr.gltf',
    meshNames: [
        'assets/models/steyr/steyr.gltf.grip_low',
        'assets/models/steyr/steyr.gltf.barrel_low1',
        'assets/models/steyr/steyr.gltf.gas_low',
        'assets/models/steyr/steyr.gltf.barrel_low',
        'assets/models/steyr/steyr.gltf.receiver_edge',
        'assets/models/steyr/steyr.gltf.receiver_scope',
        'assets/models/steyr/steyr.gltf.receiver_core',
        'assets/models/steyr/steyr.gltf.handle',
        'assets/models/steyr/steyr.gltf.trigger_low',
        'assets/models/steyr/steyr.gltf.magbot_low',
        'assets/models/steyr/steyr.gltf.mag_low',
        'assets/models/steyr/steyr.gltf.stock',
        'assets/models/steyr/steyr.gltf.stock_box_low_ncl1_1',
        'assets/models/steyr/steyr.gltf.mag_release_low',
        'assets/models/steyr/steyr.gltf.stock_sling_low',
        'assets/models/steyr/steyr.gltf.stock_box2_low'
    ],
    svgPath: 'assets/img/weapon-icons/steyr-aug.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        }

    },
    materials: [
        {
            name: 'SteyrFBXASC032Aug_new',
            texture: 'assets/textures/steyr/base_Color.jpg',
            normalMap: 'assets/textures/steyr/normal_DirectX.jpg',
            metallicRoughnessMap: 'assets/textures/steyr/metallic.jpg',
        },
        {
            name: 'MagFBXASC032FBXASC039nFBXASC032Glass_new',
            texture: 'assets/textures/steyr/mag_Roughness.jpg',
            normalMap: 'assets/textures/steyr/mag_Normal_DirectX.jpg',
            metallicRoughnessMap: 'assets/textures/steyr/mag_opacity.jpg',
        },
    ],
    replaceMaterials: [
        {
            newMaterialName: 'SteyrFBXASC032Aug_new',
            oldMaterialNames: ['SteyrFBXASC032Aug']
        },
        {
            newMaterialName: 'MagFBXASC032FBXASC039nFBXASC032Glass_new',
            oldMaterialNames: ['MagFBXASC032FBXASC039nFBXASC032Glass']
        },
    ],
    
    
    scale: {
        x: 0.014,
        y: 0.014,
        z: -0.014
    },
    customizations: [
    ]
};