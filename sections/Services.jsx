"use client";
import { motion } from "framer-motion";
import { TypingText, ServiceCard, TitleText } from "../components";
import { useState } from "react";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { serviceList } from "../constants";

const Services = () => {
  const [active, setActive] = useState("service-1");

  return (
    <section className={`${styles.paddings}`} id="services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Services" textStyles="text-center" />
        <TitleText title={<>Our Services</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {serviceList.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
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
