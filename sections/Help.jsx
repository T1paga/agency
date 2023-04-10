'use client';

import { motion } from 'framer-motion';

import { staggerContainer, slideIn, planetVariants } from '../utils/motion';

import { helpCards } from '../constants';

const GetStarted = () => (
  <section className="max-w-[1440px] mx-auto py-[20px] lg:py-[87px] px-[30px] lg:px-[135px]">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="">
      <h2 className="text-[#787AA5] font-bold text-[35px] lg:text-[50px] leading-[35px] lg:leading-[60px] lg:max-w-[589px] mx-auto text-center mb-[20px]">
        How can we help your business?
      </h2>
      <p className="text-[#5C5D75] text-[16px] leading-[16px] text-center mx-auto mb-[70px]">
        When you resell besnik, you build trust and increase
      </p>
      <div className="flex gap-[20px] lg: gap-[40px] justify-center xl:justify-between mb-[60px] flex-wrap overflow-hidden">
        {helpCards.map((item) => (
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            key={item.id}
            className="relative w-full my-border w-[330px] flex flex-col pt-[42px] pb-[65px] px-[62px]">
            <div className="gradient-1 w-[90px] h-[90px] mb-[38px] mx-auto rounded-full flex justify-center items-center">
              <img src={item.icon} alt="" />
            </div>
            <h3 className="text-center text-[#787AA5] font-medium text-[22px] leading-[27px] mb-[12px]">
              {item.header}
            </h3>
            <p className="text-center text-[#5C5D75] text-[16px] leading-[28px] max-w-[270px]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center overflow-visible">
        <button className="gradient-1 text-white py-[20px] px-[35px] max-w-[220px] max-h-[62px] rounded-2xl mx-auto">
          Become a Partner
        </button>
      </div>
    </motion.div>
  </section>
);

export default GetStarted;
