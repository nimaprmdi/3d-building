import React, { useCallback, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

function Model(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  //   const model = useLoader(GLTFLoader, process.env.PUBLIC_URL + props.path);

  const onProgress = (xhr) => {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      // setLoadingProgress(percentComplete);
      console.log(`Loading: ${percentComplete.toFixed(2)}%`);
    } else {
      // If length is not computable, we can at least show the loaded bytes
      const loadedMB = (xhr.loaded / (1024 * 1024)).toFixed(2);
      console.log(`Loaded: ${loadedMB} MB`);
      // Set an indeterminate progress state
      // setLoadingProgress(-1);
    }
  };

  const { scene, animations } = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + props.path,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(process.env.PUBLIC_URL + "/with_asserts/");
      loader.setDRACOLoader(dracoLoader);
    },
    (progress) => {
      onProgress(progress);
    },
    (error) => {
      setError(error);
      console.error("Error loading model:", error);
    }
  );

  // const { scene, animations } = useLoader(GLTFLoader, process.env.PUBLIC_URL + props.path, undefined, (xhr) => {
  //   console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  //   setIsLoaded(true);
  //   window.state.isModelLoaded = true;
  // });

  let mixer;
  if (animations.length > 0) {
    mixer = new THREE.AnimationMixer(scene);

    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((scene, delta) => {
    mixer?.update(delta);
  });

  console.log(props.path, scene);
  window.state.isModelLoaded = true;

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return <primitive object={scene} scale={props.scale} position={props.position} />;
}

export default Model;
