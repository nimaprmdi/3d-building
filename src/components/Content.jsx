import React, { useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Header from "./content/Header";
import Hero from "./content/Hero";

const Content = ({ className, setShouldUpdate, setDisplayContent }) => {
  const handleClick = (animeName) => {
    window.state.isTweenAnimating = true;
    const sets = window.state.sets;

    const isSetAnArray = Array.isArray(sets[animeName]);

    if (isSetAnArray) {
      window.state.cameraPos = sets[animeName].map((set) => set.cameraPos);
      window.state.target = sets[animeName].map((set) => set.target);
    } else {
      window.state.cameraPos.set(...sets[animeName].cameraPos);
      window.state.target.set(...sets[animeName].target);
    }

    window.state.activeMeshName = sets[animeName].name;
    window.state.cameraFov = sets[animeName].cameraFov;

    window.state.shouldUpdate = true;
    setShouldUpdate(true);
    setDisplayContent(false);
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

      <section className="w-full h-screen mt-16">
        <Fade delay={350}>
          <div className="flex items-center justify-end">
            <div className="card--transparent md:mr-24">
              <div className="card-container p-3">
                <h2 className="text-5xl">What do we do</h2>
                <p className="text-2xl is-roboto pt-2">
                  At <b> Crypto Tower</b>, we are dedicated to{" "}
                  <b>
                    {" "}
                    <i>revolutionizing</i>
                  </b>{" "}
                  the blockchain and cryptocurrency landscape through a multi-faceted approach, We provide a{" "}
                  <b> nurturing environment for startups</b>, developers, and entrepreneurs to
                  <b>
                    <i>bring their blockchain and cryptocurrency ideas</i>{" "}
                  </b>
                  to life. From concept to execution, we support the journey with mentorship, funding, and technical
                  expertise.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className="w-full h-screen">
        <Fade className="w-full h-full" delay={600}>
          <div className="w-full h-full flex items-center justify-end ">
            <div className="card card--transparent md:mr-24">
              <div className="card-container p-3">
                <h3 className="text-4xl">Explore Our 3D WebGL Tower</h3>
                <p className="text-2xl pt-2 is-roboto">
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
