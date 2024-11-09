import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-gray-950 flex justify-center items-center z-50">
      <span className="is-orbitronn animate-pulse text-white text-6xl">Loading...</span>
    </div>
  );
};

export default Loading;
