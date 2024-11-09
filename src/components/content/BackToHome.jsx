import React from "react";
import { handleClick } from "../../utils/helpers";

const BackToHome = ({ setShouldUpdate, setDisplayContent }) => {
  return (
    <button
      onClick={(e) => handleClick("HOME", setShouldUpdate, setDisplayContent)}
      className="absolute z-50 top-0 left-0 ml-4 mb-4 bg-blue-500 mt-4 animate-pulse hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Start Again
    </button>
  );
};

export default BackToHome;
