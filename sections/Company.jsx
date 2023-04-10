'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import { logos } from '../constants';

const Company = () => (
  <section className="max-w-[1440px] mx-auto sm:px-[70px] px-[30px] mb-[65px] xl:mb-[113px] overflow-x-hidden">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`block lg:flex justify-between`}>
      <div className="border-t-2 border-solid border-[#787AA5] flex justify-end pt-[10px] lg:mr-[60px] xl:mr-[100px]">
        <p className="text-[#787AA5] text-[16px] leading-[18px]">
          Proud partern at Hubspot & Segment
        </p>
      </div>
      <div className="block sm:flex flex-wrap gap-y-5 mt-5 lg:mt-0 items-center flex-end justify-center">
        {logos.map((item, index) => {
          return index + 1 === logos.length ? (
            <motion.div
              key={item.id}
              variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
              className="mr-0 w-full sm:w-[130px]">
              <img src={item.path} alt="" className="h-[32px] mx-auto" />
            </motion.div>
          ) : (
            <motion.div
              key={item.id}
              variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
              className="mr-[50px] mb-[25px] sm:mb-0 w-full sm:w-[130px]">
              <img src={item.path} alt="" className="h-[32px] mx-auto" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  </section>
);

export default Company;
