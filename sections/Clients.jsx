'use client';
import React from 'react';
import MyCarousel from '../components/MyCarousel';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Clients = () => {
  return (
    <section className="max-w-[1440px] mx-auto pb-[10px] lg:pb-[90px] xl:pb-[120px] 2xl:pb-[140px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="hidden sm:block ">
        <motion.h2
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="text-[#787AA5] font-medium text-[42px] leading-[54px] text-center mb-[24px]">
          What our happy client say
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="text-[#5C5D75] text-[16px] leading-[28px] text-center">
          Things that make it the best place to start trading
        </motion.p>
        <MyCarousel />
      </motion.div>
    </section>
  );
};

export default Clients;
