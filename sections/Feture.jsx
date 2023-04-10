'use client';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from '../utils/motion';

import { fetureCards } from '../constants';

const Feture = () => (
  <section className="max-w-[1440px] mx-auto pt-[110px] px-[50px] xl:pl-[160px] xl:pr-[130px] overflow-hidden">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="block xl:flex gap-[83px] justify-between">
      <motion.div
        variants={fadeIn('down', 'spring', 0.5, 1)}
        className="pt-[30px] xl:pt-[160px] pb-[50px] xl:pb-[235px] flex flex-col">
        <h2 className="text-[#787AA5] font-bold text-[50px] leading-[62px] w-[350px] md:w-[427px] mb-[20px]">
          Future of support with new shape
        </h2>
        <p className="text-[#5C5D75] text-[16px] leading-[28px] max-w-[322px] mb-[30px]">
          Discuss your goals, determine success metrics, identify problems
        </p>
        <div className="flex flex-col gap-[17px] mb-[50px]">
          <div className="flex items-center gap-[15px]">
            <div className="gradient-1 w-[24px] h-[24px] rounded-full flex flex-col items-center justify-center">
              <img src="/icon-ok.png" alt="" />
            </div>
            <p className="text-[#5C5D75] text-[16px] leading-[19px]">UX design content strategy</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="gradient-1 w-[24px] h-[24px] rounded-full flex flex-col items-center justify-center">
              <img src="/icon-ok.png" alt="" />
            </div>
            <p className="text-[#5C5D75] text-[16px] leading-[19px]">Development bring</p>
          </div>
        </div>
        <button
          type="button"
          className="w-[100px] 2xl:w-[130px] h-[30px] 2xl:2xl:h-[48px] nav-button font-bold text-[14px] leading-[16px] text-white">
          Get started
        </button>
      </motion.div>
      <div className="pt-[66px] pb-[94px] flex -mx-[20px] flex-wrap justify-center xl:justify-end gap-y-[40px] w-full">
        {fetureCards.map((card, index) => (
          <motion.div
            variants={fadeIn('down', 'spring', 0.5, 1)}
            key={card.id}
            className="px-[20px] w-full md:w-1/2 min-w-[220px] flex flex-col">
            <div className="relative h-full shadow-2 bg-[#343549] pt-[125px] pl-[40px] pr-[27px] rounded-xl flex flex-col">
              <div className="">
                <img src={`/${card.image}`} alt="" className="absolute top-[35px] -left-[40px]" />
              </div>
              <h3 className="text-[#787AA5] text-[24px] leading-[29px] mb-[15px]">{card.title}</h3>
              <p className="text-[#5C5D75] text-[16px] leading-[25px] mb-[27px] flex-1">
                {card.text}
              </p>
              <a className="text-[#7777D0] text-[15px] leading-[18px] mb-[36px]" href="#">
                LEARN MORE
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Feture;
