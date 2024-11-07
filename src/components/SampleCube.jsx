import React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, usePlane, useBox } from "@react-three/cannon";

const SampleCube = ({ props }) => {
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));

    return (
        <mesh ref={ref}>
            <boxGeometry />
        </mesh>
    );
};

export default SampleCube;
