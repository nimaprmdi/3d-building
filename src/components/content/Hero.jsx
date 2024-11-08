import React from "react";

const Hero = ({ className }) => {
  return (
    <section className={`w-full h-screen bg-opacity-25 flex items-center justify-end ${className}`}>
      <div className="w-full flex justify-end ">
        <div className="w-1/2 relative ps-8">
          <h1 className="text-7xl">Welcome</h1>
          <h1 className="text-7xl ps-8"> to CryptoTower</h1>
          <span
            className="text-5xl absolute text-white is-orbitron"
            style={{ bottom: "-30px", left: "100px", zIndex: 20, WebkitTextStroke: " 0.5px black" }}
          >
            Residence
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
