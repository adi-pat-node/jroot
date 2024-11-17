import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import jason from "../assets/jason-root.webp";
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset( 0 50% 0 50%)" },
  visible: {
    clipPath: "inset( 0 0% 0 0%)",

    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};
const Hero = () => {
  return (
    <section>
      <div className="relative z-10  min-h-screen flex flex-wrap flex-col md:flex-row  justify-center items-center text-white ">
        <motion.div
          className="w-full md:w-1/2 p-8 "
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={textVariants}
            className="text-2xl md:text-3xl lg:text-5xl my-14"
          >
            {HERO_CONTENT.greeting}
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl lg:text-4xl mb-4"
          >
            {HERO_CONTENT.introduction}
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl lg:text-4xl "
          >
            {HERO_CONTENT.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 p-20 "
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={jason}
            alt=""
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
