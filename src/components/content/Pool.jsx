import React from "react";
import { Fade } from "react-awesome-reveal";
import { handleClick } from "../../utils/helpers";

const Pool = ({ setShouldUpdate, setDisplayContent }) => {
  return (
    <Fade delay={2500}>
      <div className="w-full h-screen absolute top-0 bg-gray-900 bg-opacity-35 flex justify-start items-center pl-8">
        <div className="card--no-w p-3 " style={{ maxWidth: "50%" }}>
          <h3 className="text-4xl is-orbitron">The Pool Side to Horizon</h3>
          <p className="is-roboto text-xl leading-8 mt-3">
            The Pool Side to Horizon experience is a seamless blend of luxury and nature, offering an unparalleled view
            that stretches infinitely into the distance. As you lounge by the crystal-clear pool, the edge seems to
            disappear, merging with the vast expanse of the sky and the distant landscape. This optical illusion creates
            a sense of floating in the heavens, providing a perfect backdrop for relaxation and contemplation.
          </p>

          <button
            onClick={(e) => handleClick("CAR_SHOWROOM", setShouldUpdate, setDisplayContent)}
            className="bg-green-500 mt-4 animate-pulse hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default Pool;
