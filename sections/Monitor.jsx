'use client';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Monitor = () => (
  <section className="max-w-[1440px] mx-auto px-[50px] 2xl:px-[150px] pb-[60px] overflow-x-hidden">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex justify-center 2xl:justify-between ">
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex flex-col justify-center mt-[70px] 2xl:mt-0">
        <h3 className="text-[#15C381] font-bold text-[16px] leading-[18px] mb-[10px]">MONITOR</h3>
        <h2 className="text-[#787AA5] font-bold text-[38px] leading-[48px] mb-[25px] w-full 2xl:max-w-[465px]">
          Introducing best mobile carousels
        </h2>
        <p className="text-[#5C5D75] text-[18px] leading-[32px] mb-[45px] max-w-[700px] 2xl:max-w-[472px]">
          Before the ship is really back. Round, round, all around the world. Round, all around the
          world. Round, all around the world. Round, all around the world.
        </p>
        <div className="flex gap-[30px]">
          <p className="font-normal text-[#7777D0] text-[16px] leading-[18px]">
            Learn more about publishing
          </p>
          <img src="/arrow-right.svg" alt="" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative hidden 2xl:block mt-[150px] h-[480px]">
        <div>
          <img src="/monitor/bg.png" alt="" className="object-cover max-h-[485px]" />
        </div>
        <div className="absolute -right-[10px] -top-[113px] bg-[#343549] p-[22px] rounded-xl shadow-1 z-10">
          <div className="flex justify-between mb-[50px]">
            <p className="text-[#7373A8] text-[13px] leading-[13px]">Discover new opportunities</p>
            <img src="/monitor/Shape.png" alt="" className="object-cover" />
          </div>
          <div className="px-[42px] flex flex-col items-center">
            <img src="/monitor/semiCircle.png" alt="" className="object-cover" />
            <div className="flex flex-col items-center -mt-[30px]">
              <h3 className="text-[#7373A8] text-[37px] leading-[46px] mb-[19px]">
                73.4 <span className="text-[17px] leading-[17px]">%</span>
              </h3>
              <p className="text-[#7373A8] text-[17px] leading-[17px] mb-[9px]">Latest Products</p>
              <p className="text-[#7373A8] text-[11px] leading-[18px] max-w-[130px] text-center mb-[50px]">
                We design solutions for digital interactions
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-[15px]">
            <p className="text-[#7373A8] text-[17px] leading-[17px]">Wallet Balance</p>
            <p className="text-[#7373A8] text-[17px] leading-[17px]">$ 4,982.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#7373A8] text-[11px] leading-[17px]">Per month</p>
            <p className="text-[#7373A8] text-[11px] leading-[17px]">+$ 428</p>
          </div>
        </div>
        <div className="relative -left-[41px] bottom-[247px] bg-[#343549] max-w-[300px] rounded-xl">
          <img src="/monitor/left-part.png" alt="" className="w-full object-cover" />
        </div>
        <div className="absolute bottom-[20px] -right-[47px] bg-[#343549] max-w-[142px] px-[15px] pt-[31px] pb-[17px] rounded-xl z-30">
          <img src="/monitor/graph.png" alt="" className="w-full ob" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Monitor;
//10 113
