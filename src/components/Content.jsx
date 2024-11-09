import React, { useEffect } from "react";
import CarShowRoom from "./content/CarShowRoom";
import Header from "./content/Header";
import Home from "./content/Home";
import Pool from "./content/Pool";
import BackToHome from "./content/BackToHome";

const Content = ({ className, setShouldUpdate, setDisplayContent, handleContent }) => {
  const { type } = handleContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`w-full min-h-screen relative z-50 opa-0 fade-in ${className}`} style={{ zIndex: 40 }}>
      <Header />

      {type === "HOME" && <Home setDisplayContent={setDisplayContent} setShouldUpdate={setShouldUpdate} />}
      {type === "balcony" && <Pool setDisplayContent={setDisplayContent} setShouldUpdate={setShouldUpdate} />}
      {type === "CAR_SHOWROOM" && (
        <CarShowRoom setDisplayContent={setDisplayContent} setShouldUpdate={setShouldUpdate} />
      )}
    </section>
  );
};

export default React.memo(Content);
