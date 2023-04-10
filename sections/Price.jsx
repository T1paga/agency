'use client';

import { motion } from 'framer-motion';

import { staggerContainer, textVariant, fadeIn } from '../utils/motion';

import RangeSlider from '../components/RangeSlider/RangeSlider';

const Price = () => (
  <section className="overflow-x-hidden px-[50px] md:px-[100px] xl:px-[170px] 2xl:px-[387px] pt-[20px] md:pt-[35px] xl:pt-[45px] 2xl:pt-[65px] pb-[30px] 2xl:pb-[105px] bg-[#343549]">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative bg-[#2E2E3E] max-w-[665px] mx-auto text-center pt-[50px] pb-[87px] rounded-xl">
      <motion.h3
        variants={textVariant(0.1)}
        className="text-[#787AA5] font-medium text-[25px] xl:text-30px] 2xl:text-[36px] mb-[34px]">
        Pricing
      </motion.h3>
      <div className="flex justify-center gap-[64px] mb-[50px] md:mb-[75px] 2xl:mb-[100px]">
        <div className="flex flex-col gap-[9px]">
          <motion.p
            variants={textVariant(0.3)}
            className="text-[#51536B]  text-[12px] md:text-[15px] 2xl:text-[18px] leading-[21px]">
            Starter
          </motion.p>
          <motion.p
            variants={textVariant(0.4)}
            className="text-[#787AA5] text-[18px] md:px-[22px] 2xl:text-[26px] leading-[32px] font-bold">
            $4,000/mo
          </motion.p>
        </div>
        <div className="flex flex-col gap-[9px]">
          <motion.p
            variants={textVariant(0.3)}
            className="text-[#51536B]  text-[12px] md:text-[15px] 2xl:text-[18px] leading-[21px]">
            Business
          </motion.p>
          <motion.p
            variants={textVariant(0.4)}
            className="text-[#787AA5] text-[18px] md:px-[22px] 2xl:text-[26px] leading-[32px] font-bold">
            $7,500/mo
          </motion.p>
        </div>
      </div>
      <div className="max-w-[600px] mx-auto">
        <RangeSlider />
      </div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex justify-between items-center gap-[25px] md:gap-[35px] xl:gap-[50px] 2xl:gap-[86px] p-[10px] xl:p-[20px] 2xl:p-[35px] bg-[#262634] max-w-[350px] md:max-w-[400px] 2xl:max-w-[470px] rounded-xl absolute -right-[40px] bottom-[30px]  md:-right-[50px] md:bottom-[35px] 2xl:-right-[100px] 2xl:-bottom-[45px] max-h-[65px] xl:max-h-[80px] 2xl:max-h-[95px]">
        <p className="flex justify-center items-center text-[#787AA5] font-medium text-[14px] 2xl:text-[18px] leading-[15px] 2xl:leading-[22px]">
          Ready to get started?
        </p>
        <button
          type="button"
          className="w-[100px] 2xl:w-[130px] h-[30px] 2xl:2xl:h-[48px] nav-button font-bold text-[14px] leading-[16px] text-white">
          Get in touch
        </button>
      </motion.div>
    </motion.div>
  </section>
);

export default Price;
