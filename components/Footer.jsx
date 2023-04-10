'use client';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

import {
  socials,
  companyParagraphs,
  HelpParagraphs,
  SupportParagraphs,
  ContactParagraphs,
} from '../constants';

console.log(socials);

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="px-[140px] pt-[64px] pb-[25px] bg-[#343549] mb-[100px] overflow-x-hidden">
    <div className="flex gap-[130px] mb-[60px] flex-wrap max-w-[1440px] mx-auto">
      <div className="flex flex-col max-w-[280px]">
        <div className="flex mb-[40px]">
          <img src="/logo.png" alt="" className="h-[20px]" />
          <h2 className="-ml-[20px] text-[#787AA5] font-medium text-[18px] leading-[18px]">
            The Next Design
          </h2>
        </div>
        <p className="text-[#5C5D75] text-[16px] leading-[28px] mb-[40px]">
          The copy warned the Little Blind Text, that where it came from it would have been
          rewritten a thousand times.
        </p>
        <div className="flex gap-[17px]">
          {socials.map((social) => (
            <div
              key={social.id}
              className="w-[30px] h-[30px] bg-[#252525] rounded-lg flex justify-center items-center">
              <img src={`/${social.image}`} alt="" className="" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[#787AA5] font-medium text-[18px] leading-[18px] mb-[40px]">Company</h2>
        <div className="flex flex-col gap-[17px]">
          {companyParagraphs.map((paragraph) => (
            <p
              key={paragraph.id}
              className="text-[#5C5D75] text-[14px] leading-[17px] hover:text-white ease-in duration-300">
              {paragraph.paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[#787AA5] font-medium text-[18px] leading-[18px] mb-[40px]">
          Get Help
        </h2>
        <div className="flex flex-col gap-[17px]">
          {HelpParagraphs.map((paragraph) => (
            <p
              key={paragraph.id}
              className="text-[#5C5D75] text-[14px] leading-[17px] hover:text-white ease-in duration-300">
              {paragraph.paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[#787AA5] font-medium text-[18px] leading-[18px] mb-[40px] ease-in duration-300">
          Get Help
        </h2>
        <div className="flex flex-col gap-[17px]">
          {SupportParagraphs.map((paragraph) => (
            <p
              key={paragraph.id}
              className="text-[#5C5D75] text-[14px] leading-[17px] hover:text-white">
              {paragraph.paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[#787AA5] font-medium text-[18px] leading-[18px] mb-[40px] ease-in duration-300">
          Get Help
        </h2>
        <div className="flex flex-col gap-[17px]">
          {ContactParagraphs.map((paragraph) => (
            <p
              key={paragraph.id}
              className="text-[#5C5D75] text-[14px] leading-[17px] hover:text-white">
              {paragraph.paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>

    <div className="w-full mx-auto h-[1.2px] bg-[#5C5D75] mb-[25px] max-w-[1440px] mx-auto"></div>

    <div className="flex justify-between max-w-[1440px] mx-auto">
      <p className="text-[#5C5D75] text-[13px] leading-[16px]">Copyright © 2021 arshakir.com</p>
      <p className="text-[#5C5D75] text-[13px] leading-[16px]">Created by AR Shakir</p>
    </div>
  </motion.footer>
);

export default Footer;
