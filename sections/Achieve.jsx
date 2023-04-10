'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import { cards } from '../constants';

const Achieve = () => (
  <section className="px-[55px] xl:px-[135px] py-[25px] xl:py-[60px] bg-[#343549] mb-[50px] overflow-hidden">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`block xl:flex max-w-[1440px] mx-auto`}>
      <div className="mr-[146px] w-full xl:max-w-[300px] mb-[50px] xl: mb-0">
        <h2 className="text-[16px] leading-[20px] text-[#999AAB] font-medium">ACHIEVE MORE</h2>
        <h3 className="text-[32px] leading-[40px] text-[#787AA5] font-bold mb-[30px] xl:mb-0">
          Purpose of a convoy is to keep your team
        </h3>
      </div>
      <div className="gap-[60px] block md:flex">
        {cards.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="flex gap-[24px] md:mb-0 mb-[20px]">
            <div className="gradient-1 w-[120px] h-[50px] rounded-full flex items-center justify-center">
              <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col gap-[14px]">
              <h2 className="text-[#787AA5] text-[24px] font-medium leading-[29px]">
                {item.header}
              </h2>
              <p className="text-[#5C5D75] font-normal text-[16px] leading-[26px]">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Achieve;
