"use client";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText, CaseCard } from "../components";
import urlFor from "../lib/urlFor";

const CaseStudies = ({ posts }) => (
  <section className={`${styles.paddings} relative z-10`} id="case-studies">
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
        {posts.map((post) => (
          <CaseCard
            key={post.id}
            title={post.title}
            subtitle={post.subtitle}
            imgUrl={urlFor(post.mainImage).url()}
            imgAlt={post.author.name}
            index={post.index}
            link={post.slug.current}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default CaseStudies;
