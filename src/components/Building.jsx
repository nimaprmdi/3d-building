import { Suspense } from "react";
import Model from "./Model";
// import BoundingBox from "./BoundingBox";
// import Dragable from "./Dragable";

const Building = ({ setLoading }) => {
  return (
    <Suspense fallback={null}>
      {/* <Dragable transformGroup> */}
      {/* <BoundingBox visible position={[4, 3, 0]} dims={[3, 2, 6]} offset={[0, -1, 0]}> */}
      <Model
        setLoading={setLoading}
        path="/models/crypto-tower/fina-scene.glb"
        position={[0, -0.9, 0]}
        scale={new Array(3).fill(0.2)}
      />
      {/* </BoundingBox> */}
      {/* </Dragable> */}
    </Suspense>
  );
};

export default Building;
