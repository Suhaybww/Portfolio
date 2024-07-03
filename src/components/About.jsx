/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I'm an experienced software developer proficient in TypeScript, JavaScript, 
      React, Next.js, Express, Prisma, and tRPC. I'm well-versed in Docker, AWS tools, and 
      both SQL and NoSQL databases. My expertise extends to implementing secure 
      payment systems with Stripe and robust authentication processes using KINDE 
      and other auth providers. I specialize in building full-stack applications 
      with a focus on performance and scalability. I work closely with clients to understand their 
      unique challenges and create tailored solutions that not only meet but exceed 
      expectations. My approach combines technical expertise with a keen understanding 
      of business needs, resulting in robust, scalable, and secure applications that 
      solve real-world problems. I'm committed to delivering high-quality, efficient 
      code that drives value for my clients. Let's collaborate and turn your vision 
      into a secure, feature-rich reality!
    </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");