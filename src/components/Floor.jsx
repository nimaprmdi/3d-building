import React from "react";
import { useBox } from "@react-three/cannon";
import { TextureLoader } from "three";
import * as THREE from "three";

const Floor = (props) => {
  const [ref, api] = useBox(() => ({ args: [20, 1, 10], ...props }));

  const floorTexture = new TextureLoader().load(process.env.PUBLIC_URL + "/assets/grass-2.jpg");
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(64, 64);
  floorTexture.offset.set(0, 0);
  floorTexture.rotation = 0;

  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[400, 1, 400]} />
      <meshPhysicalMaterial map={floorTexture} transparent />
    </mesh>
  );
};

export default Floor;
