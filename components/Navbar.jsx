"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import { HiBolt } from "react-icons/hi2";

const Navibar = () => (
  <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative z-50`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-bold text-[20px] leading-[30px] text-white">
        Reality Labs
      </h2>
      <img
        src="/menu.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.div>
);

export default Navibar;
