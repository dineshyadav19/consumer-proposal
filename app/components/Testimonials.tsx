import React from 'react';
import Testimonial1 from '@images/Testimonial-1.png';
import Testimonial2 from '@images/Testimonial-2.png';
import Testimonial3 from '@images/Testimonial-3.png';
import Image from 'next/image';
import People from '@images/people-group.png';

const RunningLine = () => {
  return (
    <div
      className="font-medium leading-loose gap-x-1.5 items-center flex text-xl mr-4 min-w-max"
      id="scroll-text"
    >
      <span className="text-brand-grey-500 ">Trusted by</span>
      <span className="text-[#729528]">3000+ customers</span>
      <Image src={People} alt="" height={20} width={30} />
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-brand-green-100">
      <div className="overflow-hidden w-full flex pt-8">
        <RunningLine />
        <RunningLine />
        <RunningLine />
      </div>

      <div className="flex gap-x-4 overflow-scroll w-full no-scrollbar px-4 pt-8 pb-11">
        {[Testimonial1, Testimonial2, Testimonial3].map((val, index) => {
          return (
            <Image src={val} alt="" key={index} width={236} height={303} />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
