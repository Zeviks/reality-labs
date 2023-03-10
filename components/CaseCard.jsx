"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const CaseCard = ({ imgUrl, title, subtitle, index, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <a href={`/post/${link}`}>
      <img
        src={imgUrl}
        alt="planet-01"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
    </a>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-font-color">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-slate-600">
          {subtitle}
        </p>
      </div>

      <a href={`/post/${link}`}>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-font-color hover:bg-main-400 transition-all">
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
      </a>
    </div>
  </motion.div>
);

export default CaseCard;
