import { Button } from "../button";
import { Container } from "../container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
        ref={videoContainerRef}
      >
        <video
          className="sticky top-0 w-full h-screen object-fill"
          src="https://www.apple.com/105/media/us/apple-tv-plus/2023/64142b90-8da4-47d9-88f6-38cd3d0c6f77/anim/supercut/medium.mp4"
          autoPlay
          loop
          muted
        ></video>
      </motion.div>

      <Container className="relative pb-7 z-10 h-[--hero-height] ">
        <motion.div
          className="flex flex-col justify-end items-start h-full"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          viewport={{ amount: 0.98 }}
          exit="hidden"
          animate="hidden"
        >
          <h1 className="md:text-5xl font-bold mb-10">
            All Apple Originals. <br /> Only on Apple TV+.
          </h1>
          <Button className="mb-16" size="large">
            Stream Now
          </Button>
          <p className="font-semibold">Watch on the Apple TV+ app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
