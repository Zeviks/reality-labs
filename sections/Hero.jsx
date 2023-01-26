"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          //This takes a funcions which takes a delay value / Hero Section
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} lg:text-[144px] md:text-[90px]`}
        >
          DESIGNING
        </motion.h1>
        <motion.div
          variants={textVariant(1.5)}
          className="flex flex-row justify-center items-center"
        >
          <h1
            className={`${styles.heroHeading} sm:text-[20px] md:text-[74px] lg:text-[135px]`}
          >
            FOR HUMANS.
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="realtive w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/hero-main.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <div className="flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <a href="#explore">
            <img
              src="/stamp-6.png"
              alt="stamp"
              className="sm:w-[155px] w-[150px] sm:h-[155px] h-[150px] object-contain"
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
