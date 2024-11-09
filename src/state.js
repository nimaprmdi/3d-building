import * as THREE from "three";
const state = {
  activeMesh: {},
  animeName: "",
  cameraFov: 60,
  cameraPos: new THREE.Vector3(-7.429363745535351, 13.581298811088146, 0.19515365749718816),
  target: new THREE.Vector3(-4.184710452344485, 14.471718546143334, 2.938041700252174),
  shouldUpdate: true,
  isTweenAnimating: false,
  isModelLoaded: false,
  sets: {
    HOME: [
      {
        cameraPos: [-7.429363745535351, 13.581298811088146, 0.19515365749718816],
        target: [-4.184710452344485, 14.471718546143334, 2.938041700252174],
        cameraFov: 60,
        name: "",
      },
    ],

    balcony: [
      {
        cameraPos: [-18.804999999999982, 5.101999999999978, 0.36314859747547334],
        target: [16.08599999999492, 4.239999999999991, 7.685999999999991],
        cameraFov: 60,
        name: "",
      },
      {
        cameraPos: [-3.0569999999999737, 5.713999999999989, -8.388000000000117],
        target: [7.777999999999992, 0.21099999999999974, 6.057999999999991],
        cameraFov: 60,
        name: "",
      },
    ],

    CAR_SHOWROOM: [
      {
        cameraPos: [-18.159000001481232, 5.962999999999989, -0.28300000000070114],
        target: [10.701999999999984, 7.901999870677951, -12.774883541896024],
        cameraFov: 60,
        name: "",
      },

      {
        cameraPos: [-6.313000000000088, 2.086000913096524, 2.3019999945100267],
        target: [59.37699999999994, -1.7899999999999978, -99.99999999999986],
        cameraFov: 60,
        name: "",
      },
    ],

    FREE_ROOM: [
      {
        cameraPos: [-21.605000000000047, 7.687163579214689, -2.435999999999987],
        target: [87.59199999881655, 10.486000204847324, 2.94792515036739],
        cameraFov: 60,
        name: "",
      },
    ],
  },
};

export { state };
Window.prototype.state = state;
export default Window.prototype.state;
