import React from "react";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

const Bulb = (props) => {
  const ref = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (scene.lights) scene.lights.push(ref);
    else scene.lights = [ref];
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 9}
        shadow-mapSize-width={2 ** 9}
        shadow-radius={10}
        intensity={0.1}
      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};
export default Bulb;
