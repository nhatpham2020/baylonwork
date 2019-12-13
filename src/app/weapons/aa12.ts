import {JPR, WeaponCustomization} from '../customizer-data-types';

export const aa12: WeaponCustomization = {
    name: 'AA12',
    modelFolder: 'assets/models/aa12/',
    modelFile: 'aa12.gltf',
    meshNames: [
    ],
    svgPath: 'assets/img/weapon-icons/aa12.svg',
    preview: {
        orientation: new JPR(0, -Math.PI / 6, 0),
        camera: {
            position: new BABYLON.Vector3(-2, -0.05, 0),
            target: new BABYLON.Vector3(0, -0.1, 0)
        },
        position: new BABYLON.Vector3(0, 0.05, 0)
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
            name: 'blinn2_new',
            texture: 'assets/textures/aa12/AA12_diff.jpg',
            normalMap: 'assets/textures/aa12/AA12_normal.jpg',
            metallicRoughnessMap: 'assets/textures/aa12/AA12_specular.jpg',

        },
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
            newMaterialName: 'blinn2_new',
            oldMaterialNames: ['blinn2']
        },
    ],
    scale: {
        x: -0.0075,
        y: 0.0075,
        z: 0.0075
    },
    setupActions: [
      {
        type: 'hideMesh',
        target: 'acog'
      },
      {
        type: 'hideMesh',
        target: 'bullet_frame'
      },
      {
        type: 'hideMesh',
        target: 'bullets'
      },
      {
        type: 'hideMesh',
        target: 'red_dot_sight'
      },
      {
        type: 'hideMesh',
        target: 'reflect_sight'
      },
      {
        type: 'hideMesh',
        target: 'scope_mount'
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
        target: 'flash_light'
      },
      {
        type: 'hideMesh',
        target: 'tactical_laser'
      },
      {
        type: 'hideMesh',
        target: 'extra_mount'
      },
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
                      name: 'flashlight',
                      displayImg: 'assets/img/common/icon_flashlight.png',
                      interactionValue: 'flash_light',
                      include: 'extra_mount'
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
                      include: 'extra_mount'
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
                            include: 'extra_mount'
                        },
                        {
                            name: 'grip02',
                            displayImg: 'assets/img/common/icon_grip02.png',
                            interactionValue: 'grip02',
                            include: 'extra_mount'
                        },
                        {
                            name: 'grip03',
                            displayImg: 'assets/img/common/icon_grip03.png',
                            interactionValue: 'grip03',
                            include: 'extra_mount'
                        }
                    ]
                },
                {
                  allowNone: true,
                  options: [
                      {
                          name: 'acog',
                          displayImg: 'assets/img/common/icon_acog.png',
                          interactionValue: 'acog',
                          include: 'scope_mount',
                          exclude: ['sight_front', 'sight_back']
                      },
                      {
                          name: 'red_dot_sight',
                          displayImg: 'assets/img/common/icon_red_dot_sight.png',
                          interactionValue: 'red_dot_sight',
                          include: 'scope_mount',
                          exclude: ['sight_front', 'sight_back']
                      },
                      {
                          name: 'reflect_sight',
                          displayImg: 'assets/img/common/icon_reflex_sight.png',
                          interactionValue: 'reflect_sight',
                          include: 'scope_mount',
                          exclude: ['sight_front', 'sight_back']
                      },
                   ]
                },
                {
                  allowNone: true,
                  options: [
                    {
                      name: 'bullets',
                      displayImg: 'assets/img/aa12/icon_bullets.png',
                      interactionValue: 'bullets',
                      include: 'bullet_frame'
                    }
                  ]
                },
            ]
        }

    ]
};