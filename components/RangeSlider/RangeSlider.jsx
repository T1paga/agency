import React from 'react';
import './index.css';

const RangeSlider = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <div className="w-4/5 xl:max-w-[505px] mx-auto relative">
      <div className="flex justify-center items-center text-[#51536B] text-[15px] leading-[18px]">
        {value} product(s)
      </div>
      <div>
        <input
          className="custom-slider"
          type="range"
          min="1"
          max="50"
          step="1"
          value={value}
          onChange={handleChange}
        />
      </div>
      <p className="absolute top-[23px] -left-5 text-[#51536B] text-[10px] leading-[18px]">1</p>
      <p className="absolute top-[23px] -right-7 text-[#51536B] text-[10px] leading-[18px]">50+</p>
    </div>
  );
};

export default RangeSlider;
