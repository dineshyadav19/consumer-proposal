import Image from 'next/image';
import React from 'react';
import Structure from '@images/structure.png';
import SolarPanel from '@images/solar-panel.png';
import MCB from '@images/mcb.png';
import QualityCheck from '@images/quality-checks.png';

const SolarComponents = () => {
  return (
    <div className="px-4 mb-9">
      <h2 className="heading-gradient">
        Why our systems generate continuous power for 25+ years
      </h2>
      <p className="my-7 text-brand-grey-600 text-base text-center">
        We have carefully curated every component in your system to give you
        maximum generation over a long time. Find out details about key
        components and our checks to ensure quality and safety below.
      </p>

      <div className="flex flex-col gap-y-[30px]">
        <div className="px-3 py-5 rounded-xl border border-stone-300 justify-start items-start gap-3 flex flex-col">
          <h3 className="text-black text-xl font-semibold tracking-wide">
            RUST-PROOF STRUCTURE
          </h3>
          <p className="text-sm font-light">
            Hot dipped galvanized iron structure, sturdy & cyclone-proof upto
            180 kmph, to keep your solar panels grounded & safe.
          </p>
          <Image src={Structure} className="w-full h-fit" alt="" />
        </div>

        <div className="px-3 pt-5 rounded-xl border border-stone-300 justify-start items-start gap-3 flex flex-col">
          <h3 className="text-black text-xl font-semibold tracking-wide">
            CERTIFIED SOLAR PANELS WITH 25 YEAR WARRANTY
          </h3>
          <p className="text-sm font-light">
            100% A Grade panels sourced directly from manufacturers, Highly
            efficient and BIS certified for long lasting performance
          </p>
          <Image src={SolarPanel} className="w-full h-fit" alt="" />
        </div>

        <div className="px-3 pt-5 rounded-xl border border-stone-300 justify-start items-start gap-3 flex flex-col">
          <h3 className="text-black text-xl font-semibold tracking-wide">
            ELECTRICAL SAFETY
          </h3>
          <p className="text-sm font-light">
            We CARE for our customer, system and personnel safety.
          </p>
          <Image src={MCB} className="w-full h-fit" alt="" />
        </div>
      </div>

      <div className="mt-20 ">
        <h3 className="heading-gradient">
          Our solar installation process at a glance
        </h3>
        <p className="text-base font-light text-brand-grey-600 font-archivo mt-5 mb-8 text-center">
          We do 50+ Quality checkpoints that will ensure best-in-class
          performance of your solar system.
        </p>

        <Image
          src={QualityCheck}
          className="w-full h-fit rounded-xl border border-stone-300"
          alt=""
        />
      </div>
    </div>
  );
};

export default SolarComponents;
