import * as THREE from "three";
Window.prototype.state = {
  activeMesh: {},
  activeMeshName: "mesh_9",
  cameraFov: 60,
  cameraPos: new THREE.Vector3(-7.429363745535351, 13.581298811088146, 0.19515365749718816),
  target: new THREE.Vector3(-4.184710452344485, 14.471718546143334, 2.938041700252174),
  shouldUpdate: true,
  isTweenAnimating: false,
  isModelLoaded: false,
  sets: {
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

    zoomToCountry: {
      cameraPos: [0.87, 1.094, 0.879],
      target: [0.896, -4.685, 0.337],
      cameraFov: 60,
      name: "",
    },

    nearZoomLeft: {
      cameraPos: [0.7347042763505929, 1.8253222819514772, 2.6466079411629995],
      target: [3.9611166374238143, -11.873335001379619, -6.280961783578954],
      cameraFov: 60,
      name: "",
    },

    isfahanNear: {
      cameraPos: [0.5817014668676682, 0.016999999999998683, 1.114573877566784],
      target: [1.1530000000000022, -0.07900000000000013, 0.4589999999999995],
      cameraFov: 60,
      name: "",
    },
  },
};
export default Window.prototype.state;
