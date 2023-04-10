import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { motion } from 'framer-motion';

const clients = [
  {
    id: 1,
    name: 'John De marli',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    img: 'user-1.png',
  },
  {
    id: 2,
    name: 'Rowhan Smith',
    text: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline ',
    img: 'user-2.png',
  },
  {
    id: 3,
    name: 'Robin Ayala Doe',
    text: 'From the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    img: 'user-3.png',
  },
];

const MyCarousel = () => {
  const settings = {
    className: 'center variable-width',
    centerMode: true,
    infinite: true,
    centerPadding: '30px',
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
  };
  return (
    <motion.div className="relative rounded-2xl">
      <motion.div>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="p-[30px] relative max-w-[630px]">
              <div className="h-[60px] -mb-[30px] mx-auto flex flex-col items-center justify-center">
                <img src={`/${client.img}`} alt="" className="h-full" />
              </div>
              <div className="bg-[#343549] h-[270px] flex flex-col justify-end items-center px-[51px] pb-[46px] gap-[26px] rounded-2xl">
                <p className="text-center text-[#787AA5] font-medium text-[20px] leading-[24px]">
                  {client.name}
                </p>
                <p className="text-center max-w-[468px] text-[#5C5D75] text-[18px] leading-[30px]">
                  {client.text}
                </p>
              </div>
              <div className="absolute top-[92px] left-[152px]">
                <img src="/stars.png" alt="" />
              </div>
              <div className="absolute top-[85px] left-[80px]">
                <img src="/quotes.png" alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default MyCarousel;
