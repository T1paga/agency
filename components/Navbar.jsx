'use client';

import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { links } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-[38px] sm:px-[70px] px-[30px] mb-[94px]">
      <div className="flex justify-between items-center">
        <div className="w-[102px] h-[32px]">
          <img src="/logo.png" alt="search" className="w-full h-full" />
        </div>
        <div className="flex justify-between relative">
          <ul className="hidden lg:flex justify-between items-center mr-[65px] gap-[49px] leading-[18px] text-[16px] text-[#787AA5]">
            {links.map((item) => (
              <li key={item.id}>
                <a href="/#" className="hover:text-white ease-in duration-300">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="w-[130px] h-[48px] nav-button font-bold text-[14px] leading-[16px] text-white">
            Get in touch
          </button>
          <div className="flex lg:hidden justify-center items-center ml-5">
            {isOpen ? (
              <AiOutlineClose color="#fff" size={32} onClick={() => setIsOpen(false)} />
            ) : (
              <AiOutlineMenu color="#fff" size={32} onClick={() => setIsOpen(true)} />
            )}
          </div>
          {isOpen && (
            <ul className="absolute top-[70px] left-[20px] gap-3 flex flex-col lg:hidden scale-up-center">
              {links.map((item) => (
                <li className="text-white" key={item.id}>
                  <a href="/#" className="hover:hover:text-[#787AA5] ease-in duration-300">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
