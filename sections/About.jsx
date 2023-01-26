"use client";

import { motion } from "framer-motion";
//create notes based on this
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-font-color"
      >
        At <span className="font-bold text-main-500">Reality Labs</span>, we
        specialize in creating visually stunning and highly functional websites
        for businesses of all industries. Our team of experienced designers and
        developers work closely with each client to understand their unique
        needs and goals, resulting in a custom-designed website that not only
        looks great, but also effectively drives conversions and growth. From{" "}
        <span className="font-bold text-main-500">e-commerce</span> platforms to{" "}
        <span className="font-bold text-main-500">lead generation sites</span>,
        we have the skills and expertise to bring your online vision to life.
        Let us help you make a lasting impression with a website that truly
        represents your brand.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
