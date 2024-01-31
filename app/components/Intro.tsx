import Image from 'next/image';
import React from 'react';
import HeaderImage from '@images/header.png';

const Intro = () => {
  return (
    <>
      <div className="flex justify-center mb-5">
        <div className="bg-brand-blue-100 w-fit py-2.5 px-5 rounded-[32px] flex justify-center items-center gap-x-2">
          <span className="wave text-2xl">👋</span>
          <span className="text-sm font-archivo">Rakesh ji</span>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="max-w-80 heading--h1 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#00568D] to-[#5BB8F4]">
          Your rooftop solar plant proposal
        </h1>
      </div>

      <div className="px-4 mt-5 mb-4">
        <div className="p-4 rounded-[10px] border border-stone-300 border-opacity-40 grid grid-cols-3 gap-5 w-full items-center">
          <div className="flex flex-col justify-between px-3 py-4 gap-y-3">
            <span className="text-[13px] text-brand-blue-500 font-archivo leading-none tracking-wide">
              System size
            </span>
            <span className="text-xl font-archivo font-medium">3.3 kW</span>
          </div>
          <div className="h-12 w-[1px] bg-[#E3E3E3] justify-self-center" />
          <div className="flex flex-col justify-between px-3 py-4 gap-y-3">
            <span className="text-[13px] text-brand-blue-500 font-archivo leading-none tracking-wide">
              Type
            </span>
            <span className="text-xl font-archivo font-medium">On-Grid</span>
          </div>
        </div>
      </div>

      <Image alt="header-image" src={HeaderImage} className="w-full h-fit" />
    </>
  );
};

export default Intro;
