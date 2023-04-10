'use client';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import { users, months } from '../constants';

const Schedules = () => (
  <section className="max-w-[1440px] mx-auto">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:justify-between px-[50px] 2xl:px-[150px] mb-[50px] flex justify-center`}>
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="relative hidden 2xl:block">
        <img src="/shedule/bg.png" alt="" className="object-cover" />
        <div className="absolute -top-[6px] left-[140px] z-10">
          <img src="/shedule/user.png" alt="" />
        </div>
        <div className="absolute top-[208px] -left-[46px]">
          {users.map((user) => (
            <div
              key={user.id}
              className="shadow-1  flex items-center gap-[13px] p-[13px] bg-[#343549] rounded-xl mb-[13px]">
              <img src={`/shedule/${user.img}`} alt="" />
              <p className="text-[#9C9DC2] text-[13px] leading-[27px]">{user.name}</p>
            </div>
          ))}
        </div>
        <div className="shadow-1 absolute -top-[27px] -right-[22px] px-[23px] py-[35px] bg-[#343549] rounded-xl">
          <div className="px-[30px]">
            <p className="text-white text-[33px] leading-[40px]">730</p>
            <p className="text-[#9C9DC2] text-[13px] leading-[27px]">Activity Users</p>
          </div>
          <img src="/shedule/graph.png" alt="" />
          <div className="flex justify-between -mt-[25px]">
            {months.map((month) => (
              <p key={month.id} className="text-[#9C9DC2] text-[13px] leading-[27px]">
                {month.name}
              </p>
            ))}
          </div>
          <div className="absolute top-[95px] right-[65px] text-white font-bold text-[20px] leading-[27px]">
            43
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex flex-col justify-center mt-[70px] 2xl:mt-0">
        <h3 className="text-[#FF8400] font-bold text-[16px] leading-[18px] mb-[10px]">SCHEDULE</h3>
        <h2 className="text-[#787AA5] font-bold text-[38px] leading-[48px] mb-[25px] w-full 2xl:max-w-[465px]">
          Great customer relationship starts here
        </h2>
        <p className="text-[#5C5D75] text-[18px] leading-[32px] mb-[45px] max-w-[700px] 2xl:max-w-[472px]">
          80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s
          ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind.
        </p>
        <div className="flex gap-[30px]">
          <p className="font-normal text-[#7777D0] text-[16px] leading-[18px]">
            Learn more about publishing
          </p>
          <img src="/arrow-right.svg" alt="" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Schedules;
