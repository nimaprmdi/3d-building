import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";

const EPSILON = 0.01;
const SCROLL_SENSITIVITY = 0.01;

const CameraControls = ({ opts, shouldUpdate, setShouldUpdate, setDisplayContent }) => {
  useFrame(({ camera, scene }) => {
    TWEEN.update();

    if (!window.state.isTweenAnimating) {
      if (window.state.isModelLoaded && window.state.shouldUpdate) {
        scene.orbitControls.target.lerp(window.state.target, 0.05);
        camera.position.lerp(window.state.cameraPos, 0.05);
        scene.orbitControls.update();
        camera.updateProjectionMatrix();
        if (
          Math.abs(window.state.cameraPos.x - camera.position.x) < EPSILON &&
          Math.abs(window.state.cameraPos.y - camera.position.y) < EPSILON &&
          Math.abs(window.state.cameraPos.z - camera.position.z) < EPSILON
        ) {
          window.state.shouldUpdate = false;
          setDisplayContent(true);
        }
      } else if (opts) {
        // const optVecPos = new Vector3(opts.posX, opts.posY, opts.posZ);
        // const optsVecRot = new Vector3(opts.rotX, opts.rotY, opts.rotZ);
        // camera.position.lerp(optVecPos, 0.05);
        // scene.orbitControls.target.lerp(optsVecRot, 0.05);
        // // camera.fov = 10;
        // scene.orbitControls.update();
        // camera.updateProjectionMatrix();
        // console.log([camera.position.x, camera.position.y, camera.position.z]);
        // console.log([scene.orbitControls.target.x, scene.orbitControls.target.y, scene.orbitControls.target.z]);
      }
    }
  });

  const { camera, scene } = useThree();

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (window.state.isTweenAnimating && window.state.shouldUpdate) return;

      const isTouchPadScroll = Math.abs(event.deltaY) < 100;

      const extraSens = isTouchPadScroll ? 20 : 2;

      const scrollDelta = event.deltaY;

      //
      const newY = camera.position.y - scrollDelta * (SCROLL_SENSITIVITY * extraSens);
      const minY = 1;
      const maxY = 14;
      const clampedY = Math.max(minY, Math.min(maxY, newY));

      const targetPosition = {
        x: camera.position.x,
        y: clampedY,
        z: camera.position.z,
      };

      new TWEEN.Tween(camera.position)
        .to(targetPosition, isTouchPadScroll ? 7 : 500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onStart(() => {
          window.state.isTweenAnimating = true;
        })
        .onUpdate(() => {
          scene.orbitControls.update();
          camera.updateProjectionMatrix();
        })
        .onComplete(() => {
          window.state.isTweenAnimating = false;
        })
        .start();
    };

    window.addEventListener("wheel", handleScroll);
    // window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, [camera, scene]);

  useEffect(() => {
    if (shouldUpdate) {
      // Camera Position
      const tweenCamPos = (index = null) => {
        setShouldUpdate(true);

        console.log("index", index);

        const isSetAnArray = Array.isArray(window.state.cameraPos);
        const sceneSet = isSetAnArray ? window.state.cameraPos : [window.state.cameraPos];

        console.log(sceneSet);

        let currentIndex = index || 0;

        if (sceneSet[currentIndex] && !sceneSet[currentIndex].isVector3) {
          sceneSet[currentIndex] = new Vector3(
            sceneSet[currentIndex][0],
            sceneSet[currentIndex][1],
            sceneSet[currentIndex][2]
          );
        }

        if (sceneSet[currentIndex]) {
          new TWEEN.Tween(camera.position)
            .to(sceneSet[currentIndex], 1500)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onStart(() => {
              window.state.isTweenAnimating = true;
            })
            .onComplete(() => {
              window.state.isTweenAnimating = false;
            })
            .onUpdate(() => {
              camera.position.set(camera.position.x, camera.position.y, camera.position.z);

              scene.orbitControls.update();
              camera.updateProjectionMatrix();

              window.state.shouldUpdate = false;
              setShouldUpdate(false);
            })
            .onComplete(() => {
              window.state.isTweenAnimating = false;
              ++currentIndex;
              tweenCamPos(currentIndex);
            })
            .start();
        }
      };

      const tweenCamRot = (index = null) => {
        const isSetAnArray = Array.isArray(window.state.target);
        const sceneSet = isSetAnArray ? window.state.target : [window.state.target];
        let currentIndex = index || 0;

        if (sceneSet[currentIndex] && !sceneSet[currentIndex].isVector3) {
          sceneSet[currentIndex] = new Vector3(
            sceneSet[currentIndex][0],
            sceneSet[currentIndex][1],
            sceneSet[currentIndex][2]
          );
        }

        if (sceneSet[currentIndex]) {
          new TWEEN.Tween(scene.orbitControls.target)
            .to(sceneSet[currentIndex], 1500)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onStart(() => {
              window.state.isTweenAnimating = true;
            })
            .onComplete(() => {
              window.state.isTweenAnimating = false;
            })
            .onUpdate(() => {
              scene.orbitControls.target.set(
                scene.orbitControls.target.x,
                scene.orbitControls.target.y,
                scene.orbitControls.target.z
              );

              scene.orbitControls.update();
              camera.updateProjectionMatrix();

              window.state.shouldUpdate = false;
              setShouldUpdate(false);
            })
            .onComplete(() => {
              window.state.isTweenAnimating = false;
              ++currentIndex;
              tweenCamRot(currentIndex);
            })
            .start();
        }
      };

      tweenCamPos();
      tweenCamRot();
      // Camera Rotation
    }
  }, [shouldUpdate]);

  return null;
};

export default CameraControls;
