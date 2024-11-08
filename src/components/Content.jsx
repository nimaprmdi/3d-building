import React, { useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Header from "./content/Header";
import Hero from "./content/Hero";

const Content = ({ className, setShouldUpdate }) => {
  const handleClick = (animeName) => {
    window.state.isTweenAnimating = true;
    const sets = window.state.sets;
    window.state.cameraPos.set(...sets[animeName].cameraPos);
    window.state.target.set(...sets[animeName].target);
    window.state.activeMeshName = sets[animeName].name;
    window.state.cameraFov = sets[animeName].cameraFov;

    window.state.shouldUpdate = true;
    setShouldUpdate(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`w-full min-h-screen relative z-50 opa-0 ${className}`} style={{ zIndex: 50 }}>
      <Header />

      <Slide delay={150}>
        <Hero className={"my-4"} />
      </Slide>

      <section className="w-full h-screen my-16">
        <Fade delay={350}>
          <div className="flex items-center justify-end">
            <div className="card md:mr-24">
              <div className="card-container p-3">
                <h2 className="text-4xl">What do we do</h2>
                <p className="pt-2">
                  At Crypto Tower, we are dedicated to revolutionizing the blockchain and cryptocurrency landscape
                  through a multi-faceted approach, We provide a nurturing environment for startups, developers, and
                  entrepreneurs to bring their blockchain and cryptocurrency ideas to life. From concept to execution,
                  we support the journey with mentorship, funding, and technical expertise.
                </p>
                <p className="pt-2">
                  Knowledge is power, and we believe in democratizing access to blockchain education. Through workshops,
                  webinars, and curated learning resources, we equip individuals and businesses with the skills to
                  thrive in the decentralized economy.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className="w-full h-screen">
        <Fade className="w-full h-full" delay={450}>
          <div className="w-full h-full flex items-center justify-end ">
            <div className="card md:mr-24">
              <div className="card-container p-3">
                <h3 className="text-4xl">Explore Our 3D WebGL Tower</h3>
                <p className="pt-2">
                  Step into the future with our immersive 3D WebGL Tower, a virtual representation of Crypto Tower's
                  vision and innovation. Designed to captivate and inspire, the 3D Tower offers
                </p>

                <button
                  onClick={(e) => handleClick("balcony")}
                  className="bg-green-500 mt-4 animate-pulse hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </section>
  );
};

export default React.memo(Content);
