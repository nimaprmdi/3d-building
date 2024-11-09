import { extend, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Vector3 } from "three";
extend({ OrbitControls });

const Orbit = ({ setDisplayContent }) => {
  const { camera, gl, scene } = useThree();
  const [isOrbitFree, setIsOrbitFree] = useState(false);

  useEffect(() => {
    if (window.state.animeName && window.state.animeName === "FREE_ROOM") {
      setIsOrbitFree(true);

      const optVecPos = new Vector3(1, 1, 1);
      const optsVecRot = new Vector3(1, 1, 1);
      camera.position.lerp(optVecPos, 0.05);
      scene.orbitControls.target.lerp(optsVecRot, 0.05);

      scene.orbitControls.update();
      camera.updateProjectionMatrix();
    } else if (window.state.animeName && window.state.animeName === "HOME") {
      setIsOrbitFree(true);
      setDisplayContent((prevState) => {
        return { ...prevState, shouldDisplay: true, type: "HOME" };
      });
    } else if (window.state.animeName && window.state.animeName === "CAR_SHOWROOM") {
      setDisplayContent((prevState) => {
        return { ...prevState, shouldDisplay: true, type: "CAR_SHOWROOM" };
      });
    } else {
      setIsOrbitFree(false);
    }
  }, [window.state.animeName]);

  return (
    <orbitControls
      attach="orbitControls"
      enableZoom={isOrbitFree}
      enablePan={isOrbitFree}
      enableRotate={isOrbitFree}
      enableDamping={!isOrbitFree}
      dampingFactor={0.05}
      args={[camera, gl.domElement]}
    ></orbitControls>
  );
};

export default Orbit;
