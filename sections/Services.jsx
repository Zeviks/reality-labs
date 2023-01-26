"use client";
import { motion } from "framer-motion";
import { TypingText, ServiceCard, TitleText } from "../components";
import { useState } from "react";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { serviceList } from "../constants";

const Services = () => {
  //Once i have understood the purpose of the state, rename the variables
  const [active, setActive] = useState("wordl-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        //discover the meaning of "amount"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Services" textStyles="text-center" />
        <TitleText title={<>Our Services</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {serviceList.map((world, index) => (
            <ServiceCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
