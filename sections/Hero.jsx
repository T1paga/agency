'use client';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from '../utils/motion';

const Hero = () => (
  <section className="lg:px-[70px] px-[30px]">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex justify-between">
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="mr-0 md: mr-[25px] lg:mr-[50px]">
        <div className="flex">
          <img src="/star.png" alt="" className="mr-[13px]" />
          <p className="text-[#B985FB] text-[18px] leading-[16px]">Jump start your growth</p>
        </div>
        <h2 className="text-[#787AA5] text-[32px] lg:text-[62px] leading-[30px] lg:leading-[75px] font-bold max-w-[650px] -mt-[6px] lg:-mt-[17px] mb-[30px] lg:mb-[60px]">
          We boost the growth for <span className="text-[#B985FB]">Startup</span> to Fortune 500
          Companies
        </h2>
        <p className="text-[#5C5D75] text-[22px] leading-[30px] max-w-[455px] mb-[42px]">
          Get the most accurate leads, sales peopele training and conversions, tools and more — all
          within the same one billing.
        </p>
        <form action="" className="flex flex-col sm:flex-row bg-transparent">
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Email address"
            className="mb-5 sm:mb-0 forma p-5 bg-[#21212B] h-[61px] rounded-[10px] text-[#AEAEAE] leading-[30px] text-[18px] mr-2 w-[300px] md:w-[403px]"
          />
          <button className="-ml-[15px] main-button w-[157px] h-[61px] knopka flex justify-center items-center">
            <img src="/arrow-button.png" alt="" className="flex justify-center items-center" />
          </button>
        </form>
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="relative hidden md:block">
        <img src="/circle.png" alt="" />
        <img
          src="/cube.png"
          alt=""
          className="absolute right-[10px] top-[32px] w-[120px] lg:w-[166px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
