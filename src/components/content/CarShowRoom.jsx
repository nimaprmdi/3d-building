import React from "react";
import { Fade } from "react-awesome-reveal";
import { handleClick } from "../../utils/helpers";

const CarShowRoom = ({ setShouldUpdate, setDisplayContent }) => {
  return (
    <Fade delay={2500}>
      <div className="w-full h-screen absolute top-0 bg-gray-900 bg-opacity-20 flex justify-start items-center pl-8">
        <div className="card--no-w p-3 " style={{ maxWidth: "50%" }}>
          <h3 className="text-4xl is-orbitron">The Vehicle of the future</h3>
          <p className="is-roboto text-xl leading-8 mt-3">
            "The Vehicle of the Future is poised to revolutionize the way we travel, blending cutting-edge technology
            with sustainable design to create an unprecedented driving experience. Imagine gliding through urban
            landscapes in a sleek, autonomous car that not only navigates with precision
          </p>

          <button
            onClick={(e) => handleClick("FREE_ROOM", setShouldUpdate, setDisplayContent)}
            className="bg-green-500 mt-4 animate-pulse hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Navigate Free
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default CarShowRoom;
