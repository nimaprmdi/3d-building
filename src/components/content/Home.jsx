import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Hero from "./Hero";
import { handleClick } from "../../utils/helpers";

const Home = ({ setShouldUpdate, setDisplayContent }) => {
  //handleclick
  return (
    <>
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
                  onClick={(e) => handleClick("balcony", setShouldUpdate, setDisplayContent)}
                  className="bg-green-500 mt-4 animate-pulse hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Home;
