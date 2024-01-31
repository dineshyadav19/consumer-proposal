import React from 'react';
import SolarLabsPreview from '@images/solar-labs-preview.png';
import Image from 'next/image';
import Degree from '@icons/360-degree.svg';

const ViewIn3D = () => {
  return (
    <div className="mt-7 px-4">
      <h2 className="heading-gradient mb-10">
        Track & monitor your solar plant from anywhere
      </h2>

      <div className="relative rounded-[20px]">
        <div className="w-full h-16 flex justify-center items-center absolute -top-10">
          <div className="w-fit flex items-center">
            <Degree />
          </div>
        </div>
        <Image src={SolarLabsPreview} alt="" />
        <div className="px-4 py-5 border border-brand-blue rounded-b-[20px]">
          <span className="mb-4 text-[#738493] text-sm tracking-widest font-normal">
            DESIGNED BY EXPERTS
          </span>
          <p className="text-brand-grey-600 text-base">
            Your <span className="font-bold">2.2 kWp</span> solar plant system
            with <span className="font-bold">4 number of panels</span> and a{' '}
            <span className="font-bold">high rise structure</span> has been
            accurately designed keeping in account your average electricity bill
            of Rs.
            <span className="font-bold"> 2,500</span> and your shadow free{' '}
            <span className="font-bold">rooftop area of 250 sq.ft.</span> While
            creating your design, our experts thought about how you will
            maintain and clean your system safely and easily by maintaining safe
            distance on all sides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewIn3D;
