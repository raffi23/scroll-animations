import { useScroll } from "framer-motion";
import { useRef } from "react";
import { ScrollContext } from "./helpers/ScrollContext";
import Text from "./Text";
import Cards from "./Cards";

const Intro = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
  });

  return (
    <ScrollContext.Provider value={scrollYProgress}>
      <div ref={wrapper} className="h-[240vh] p-10 md:p-24">
        <div className="sticky top-24 p-10 md:p-16 bg-body-secondary min-h-screen max-w-5xl mx-auto rounded-3xl">
          <Text />

          <Cards />
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default Intro;
