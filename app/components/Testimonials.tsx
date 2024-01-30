import React from 'react';
import Testimonial1 from '@images/Testimonial-1.png';
import Testimonial2 from '@images/Testimonial-2.png';
import Testimonial3 from '@images/Testimonial-3.png';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="bg-brand-green-100">
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
