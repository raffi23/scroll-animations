import clsx from "clsx";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Card from "./Card";
import Nav from "./Nav";

const Intro = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["-20%", "0%", "0%"]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6],
    [
      "calc(100vh - 120%)",
      "calc(0vh - 70%)",
      "calc(0vh - 70%)",
      "calc(0vh - 0%)",
    ]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0, 1]
  );

  return (
    <div ref={wrapper} className="h-[240vh] p-10 md:p-24">
      <div className="sticky top-24 p-10 md:p-16 bg-body-secondary min-h-screen max-w-5xl mx-auto rounded-3xl">
        <motion.div
          className="text-accent text-xl md:text-3xl lg:text-6xl text-center mb-12"
          style={{ opacity }}
        >
          <h1 className="mb-8">📆</h1>
          <h1>Todos, email, calendar.</h1>
          <h2>One and done.</h2>
        </motion.div>
        <motion.div
          className="grid perspective max-w-screen-2xl mx-auto"
          style={{ x, y }}
        >
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Card
                key={i}
                index={i}
                scrollYProgress={scrollYProgress}
              >
                <img
                  className={clsx(
                    i === 3 ? "h-3/4" : "h-full",
                    i === 3 ? "w-3/4" : "w-full",
                    i <= 3 ? "opacity-80" : "opacity-100",
                    "object-contain"
                  )}
                  src={`/amie-992/screens/screen-${i}.png`}
                />
              </Card>
            ))}
          <Card index={5} scrollYProgress={scrollYProgress}>
            <Nav />
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
