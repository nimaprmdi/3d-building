import React, { useState, useEffect } from "react";
import { EffectComposer, DepthOfField, Bloom, GodRays } from "@react-three/postprocessing";
import { useThree } from "@react-three/fiber";

const Effects = () => {
    const [lights, setLights] = useState(null);
    const { scene } = useThree();

    useEffect(() => {
        if (scene.lights && scene.lights.length === 3) {
            setLights(scene.lights);
        }
    }, [scene.lights]);
    return lights ? (
        <EffectComposer>
            {/* <DepthOfField focusDistance={0} focalLength={0.025} bokehScale={1} height={280} /> */}
            {/* <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.1} height={300} /> */}

            {/* {lights.map((light) => (
                <GodRays key={light.current.uuid} sun={light.current} />
            ))} */}
        </EffectComposer>
    ) : null;
};

export default Effects;
