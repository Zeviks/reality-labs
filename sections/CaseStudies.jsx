"use client";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText, CaseCard } from "../components";
import { caseStudies } from "../constants";

const CaseStudies = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Case Studies" textStyles="text-center" />
      <TitleText title={<>Featured Projects</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {caseStudies.map((item, index) => (
          <CaseCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default CaseStudies;
