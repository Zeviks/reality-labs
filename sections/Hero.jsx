"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

import Link from "next/link";

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
          className={styles.heroHeading}
        >
          DESIGNING
        </motion.h1>
        <motion.div
          variants={textVariant(1.5)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading}`}>FOR HUMANS.</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="realtive w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/Hero.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <a href="#explore">
          <div className="flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
