import { extend, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();

  return (
    <orbitControls
      attach="orbitControls"
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      enableDamping={true}
      dampingFactor={0.05}
      args={[camera, gl.domElement]}
    ></orbitControls>
  );
};

export default Orbit;
