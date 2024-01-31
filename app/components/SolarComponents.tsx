'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Structure from '@images/structure.png';
import SolarPanel from '@images/solar-panel.png';
import MCB from '@images/mcb.png';
import QualityCheck from '@images/quality-checks.png';
import Modal from '../../components/Modal';
import ListCard from './Modals/ListCard';
import Affordable from '@icons/modal-icons/cusotmer safety.svg';
import SteelStructure from './Modals/SteelStructure';
import SolarPanelComponent from './Modals/SolarPanel';
import Inverter from './Modals/Inverter';
import ElectricalSafety from './Modals/ElectricalSafety';

const SolarComponents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <div className="button-animation my-3">
            <input
              type="button"
              value="Read More"
              className="font-inter"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
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
          <div className="button-animation my-3">
            <input type="button" value="Read More" />
          </div>
          <Image src={SolarPanel} className="w-full h-fit" alt="" />
        </div>

        <div className="px-3 pt-5 rounded-xl border border-stone-300 justify-start items-start gap-3 flex flex-col">
          <h3 className="text-black text-xl font-semibold tracking-wide">
            ELECTRICAL SAFETY
          </h3>
          <p className="text-sm font-light">
            We CARE for our customer, system and personnel safety.
          </p>
          <div className="button-animation my-3">
            <input type="button" value="Read More" />
          </div>
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
      <Modal isOpen={isModalOpen} onChange={setIsModalOpen}>
        {/* <SteelStructure /> */}
        {/* <SolarPanelComponent /> */}
        {/* <Inverter /> */}
        <ElectricalSafety />
      </Modal>
    </div>
  );
};

export default SolarComponents;
