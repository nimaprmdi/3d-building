import React, { Suspense, useRef, useState } from "react";
import Orbit from "./components/Orbit";
// import Box from "./components/Box";
import Floor from "./components/Floor";
// import Background from "./components/Background";
import ColorPicker from "./components/ColorPicker";
// import Dragable from "./components/Dragable";
import Building from "./components/Building";
import CameraControls from "./components/CameraControls";
import CameraButton from "./components/CameraButton";
import Lights from "./components/Lights";
// import Effects from "./components/Effects";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import DatGui, { DatNumber } from "react-dat-gui";
// import Background from "./components/Background";

function App() {
  const [displayGUI, setDisplayGUI] = useState(false);
  const [opts, setOpts] = useState({
    component: "camera",
    posX: 0.5817014668676682,
    posY: 0.016999999999998683,
    posZ: 1.114573877566784,
    rotX: 1.1530000000000022,
    rotY: -0.07900000000000013,
    rotZ: 0.4589999999999995,
  });

  const htmlRef = useRef();

  return (
    <div className="relative w-full h-full">
      <div id="webgl-container" className="fixed w-full h-full top-0 left-0" style={{ position: "fixed", zIndex: -1 }}>
        <div
          gl={{
            powerPreference: "high-performance",
            antialias: false,
            stencil: false,
            depth: false,
          }}
          style={{ height: "100vh", width: "100vw", position: "fixed", zIndex: -1 }}
        >
          <ColorPicker />
          <CameraButton />
          <Canvas
            gl={{ alpha: true }}
            onCreated={(state) => state.gl.setClearColor("#cce8ff")}
            camera={{ position: [-80.30751804950935, 3.201652936056224, 5.79450893986077] }}
            shadows
            style={{ position: "fixed", zIndex: -1 }}
          >
            <CameraControls htmlRef={htmlRef} />

            {/* <Suspense fallback={null}>
          <Background />
        </Suspense> */}

            <fog attach="fog" args={["#cce8ff", 3, 80]} />

            <Orbit />

            <ambientLight color={"#cce8ff"} intensity={0.2} />

            <Lights />

            <axesHelper args={[5]} />
            <Physics>
              <Building />

              <Floor position={[0, -0.5, 0]} />

              {/* <Effects /> */}
            </Physics>
          </Canvas>

          {displayGUI && (
            <DatGui data={opts} onUpdate={setOpts}>
              <DatNumber path="posX" min={-20} max={20} step={0.001} />
              <DatNumber path="posY" min={-20} max={20} step={0.001} />
              <DatNumber path="posZ" min={-20} max={20} step={0.001} />

              <DatNumber path="rotX" min={-20} max={20} step={0.001} />
              <DatNumber path="rotY" min={-20} max={20} step={0.001} />
              <DatNumber path="rotZ" min={-20} max={20} step={0.001} />
            </DatGui>
          )}
        </div>
      </div>

      <section ref={htmlRef} className="w-full min-h-screen relative z-50" style={{ zIndex: 50 }}>
        {/* Hero */}
        <section className="w-full h-screen bg-gray-600 opacity-50 flex items-center justify-end">
          <div className="card md:mr-24">
            <div className="card-container ">
              <h3>Hello</h3>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full h-screen bg-gray-600 opacity-50 flex items-center justify-end">
          <div className="card md:mr-24">
            <div className="card-container ">
              <h3>Hello</h3>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
