import React from 'react';
import SolarLabsPreview from '@images/solar-labs-preview.png';
import Image from 'next/image';
import Degree from '@icons/360-degree.svg';

type ViewProps = {
  solarLabsImage: string | null;
  solarLabsLink: string;
  capacity: string;
  structure: string;
  averageBill: string;
  rooftopArea: string;
  noOfpanels: string;
};

const ViewIn3D = async ({
  solarLabsImage,
  solarLabsLink,
  capacity,
  structure,
  averageBill,
  rooftopArea,
  noOfpanels,
}: ViewProps) => {
  return (
    <div className="mt-7 px-4">
      <h2 className="heading-gradient mb-10">
        Track & monitor your solar plant from anywhere
      </h2>

      <div className="relative rounded-[20px]">
        <div className="w-full h-16 flex justify-center items-center absolute -top-10 z-20">
          <div className="w-fit flex items-center">
            <Degree />
          </div>
        </div>
        <div className="relative h-[294px]">
          <Image
            src={solarLabsImage || SolarLabsPreview}
            alt="solar labs image"
            fill
            className="rounded-tl-[20px] rounded-tr-[20px] border border-brand-blue"
          />

          <div className="absolute bottom-8 flex justify-center items-center w-full">
            <a
              href={solarLabsLink}
              target="_blank"
              className="block bg-gradient-to-r from-sky-700 via-sky-500 to-sky-700 leading-none px-5 py-3 text-white text-sm font-medium rounded-full"
            >
              View in 3D
            </a>
          </div>
        </div>

        <div className="px-4 py-5 border border-brand-blue rounded-b-[20px]">
          <span className="mb-4 text-[#738493] text-sm tracking-widest font-normal">
            DESIGNED BY EXPERTS
          </span>
          <p className="text-brand-grey-600 text-base">
            Your <span className="font-bold">{capacity} kWp</span> solar plant
            system with{' '}
            <span className="font-bold">{noOfpanels} number of panels</span> and
            a <span className="font-bold">{structure}</span> structure has been
            accurately designed keeping in account your average electricity bill
            of Rs.
            <span className="font-bold">{averageBill}</span> and your shadow
            free{' '}
            <span className="font-bold">
              rooftop area of {rooftopArea} sq.ft.
            </span>{' '}
            While creating your design, our experts thought about how you will
            maintain and clean your system safely and easily by maintaining safe
            distance on all sides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewIn3D;
