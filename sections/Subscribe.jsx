'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';

const Subscribe = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-3 xl:p-0 mb-[60px] lg:mb-[100px] xl:mb-[140px] 2xl:mb-[195px] overflow-x-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="hidden sm:block ">
        <div className="w-4/5 mx-auto h-[1.2px] bg-[#343549] mb-[88px]"></div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.1, 0.5)}
          className="flex justify-between max-w-[1120px] mx-auto bg-[#343549] rounded-2xl">
          <div className="w-[70%] md:w-[60%] xl:w-[53%] px-[20px] sm:px-[107px] py-[25px] xl:py-[61px]">
            <h2 className="text-[#787AA5] font-medium text-[20px] leading-[25px] mb-[15px] md:text-[27px] md:leading-[33px] md:mb-[19px] xl:text-[34px] xl:leading-[40px] xl:mb-[22px]">
              Subscribe newsletter
            </h2>
            <p className="text-[#5C5D75] text-[16px] leading-[28px] hidden sm:block">
              The copy warned the Little Blind Text, that where it came from it would have been
              rewritten.
            </p>
          </div>
          <div className="bg-[#27283A] w-[30%] md:w-[40%] xl:w-[47%] rounded-r-2xl treangle">
            <form
              action=""
              className="flex absolute top-1/2 -left-[120px] md:-left-[70px] -translate-y-1/2">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter your email"
                className="w-[250px] xl:w-[300px] xl:w-[350px] py-[15px] md:py-[25px] pl-[10px] md:pl-[15px] xl:pl-[20px] max-h-[64px] bg-[#3E3E54] rounded-l-2xl"
              />
              <button className="-ml-[120px] md:-ml-[40px] z-22 shadow-1 gradient w-[125px] xl:w-[157px] rounded-r-2xl">
                <div className="flex justify-center items-center gap-[12px]">
                  <p className="text-white text-[12px] md:text-[16px] leading-[12px] md:leading-[19px]">
                    Discover
                  </p>
                  <div className="hidden sm:flex w-[39px] h-[39px] gradient-1 rounded-2xl flex justify-center items-center">
                    <img src="/green-arrow.png" alt="" className="h-[14px] w-[10px]" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
