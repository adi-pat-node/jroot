import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import { RiTwitterXFill, RiGithubFill, RiLinkedinFill } from "@remixicon/react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  }),
};
const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Contact
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <motion.h3
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        className="leading-none text-6xl md:text-8xl"
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>

      <motion.p
        className="text-lg md:text-2xl  mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.description}
      </motion.p>

      <motion.a
        href="mailto:V7YFt@example.com"
        className="text-2xl md:text-3xl font-medium mt-8"
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        variants={textVariants}
      >
        {CONTACT_CONTENT.email}
      </motion.a>

      <div className="flex space-x-6 mt-8 ">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          const Icon =
            link.icon === "RiTwitterXFill"
              ? RiTwitterXFill
              : link.icon === "RiGithubFill"
              ? RiGithubFill
              : RiLinkedinFill;
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              aria-label={link.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        custom={1.6}
        variants={textVariants}
        className="text-sm mt-36 text-stone-400"
      >
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
};

export default Contact;
