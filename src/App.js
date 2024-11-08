import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
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
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import DatGui, { DatNumber } from "react-dat-gui";
import Content from "./components/Content";
// import Background from "./components/Background";

function App() {
  const [displayGUI, setDisplayGUI] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [opts, setOpts] = useState({
    component: "camera",
    posX: -7.429363745535351,
    posY: 13.581298811088146,
    posZ: 0.19515365749718816,
    rotX: -4.184710452344485,
    rotY: 14.471718546143334,
    rotZ: 2.938041700252174,
  });

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
          {/* <ColorPicker /> */}
          {/* <CameraButton /> */}
          <Canvas
            gl={{ alpha: true }}
            onCreated={(state) => state.gl.setClearColor("#cce8ff")}
            camera={{ position: [-80.30751804950935, 3.201652936056224, 5.79450893986077] }}
            shadows
            style={{ position: "fixed", zIndex: -1 }}
          >
            <CameraControls
              shouldUpdate={shouldUpdate}
              setShouldUpdate={setShouldUpdate}
              setDisplayContent={setDisplayContent}
              opts={opts}
            />

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
              <DatNumber path="posX" min={-100} max={100} step={0.001} />
              <DatNumber path="posY" min={-100} max={100} step={0.001} />
              <DatNumber path="posZ" min={-100} max={100} step={0.001} />

              <DatNumber path="rotX" min={-100} max={100} step={0.001} />
              <DatNumber path="rotY" min={-100} max={100} step={0.001} />
              <DatNumber path="rotZ" min={-100} max={100} step={0.001} />
            </DatGui>
          )}
        </div>
      </div>

      <Content
        setShouldUpdate={setShouldUpdate}
        setDisplayContent={setDisplayContent}
        className={displayContent ? "fade-in" : ""}
      />
    </div>
  );
}

export default App;
