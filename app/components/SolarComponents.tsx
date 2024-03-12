'use client';

import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import Structure from '@images/structure.jpeg';
import SolarPanel from '@images/solar-panel.png';
import MCB from '@images/mcb.png';
import MicroInverter from '@images/micro-inverter.png';
import StringInverter from '@images/string-inverter.png';
import Modal from '../../components/Modal';
import SteelStructure from './Modals/SteelStructure';
import SolarPanelComponent from './Modals/SolarPanel';
import Inverter from './Modals/Inverter';
import ElectricalSafety from './Modals/ElectricalSafety';
import { useSearchParams } from 'next/navigation';

type ComponentCardProps = {
  heading: string;
  subtext: string;
  image: any;
  onClickFn: () => void;
};

const ComponentCard = ({
  heading,
  subtext,
  image,
  onClickFn,
}: ComponentCardProps) => {
  return (
    <div className="px-3 py-5 rounded-xl border border-stone-300 justify-start items-start gap-3 flex flex-col">
      <h3 className="text-black text-xl font-semibold tracking-wide">
        {heading}
      </h3>
      <p className="text-sm font-light">{subtext}</p>
      <div className="button-animation my-3">
        <input
          type="button"
          value="Read More"
          className="font-inter"
          onClick={onClickFn}
        />
      </div>
      <Image src={image} className="w-full h-fit" alt="" />
    </div>
  );
};

const SolarComponents = () => {
  const searchParams = useSearchParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ReactNode>(<></>);
  const [isMicroSelected, setIsMicroSelected] = useState(true);

  const autoPlayVideo =
    searchParams.get('autoPlayVideo') === 'false' ? false : true;
  const getData = () => {
    if (isMicroSelected) {
      return {
        key: 'micro',
        selectedClass:
          'bg-brand-blue-200 text-brand-blue-500 rounded-full py-2.5 px-6 text-base font-semibold leading-none',
        className:
          'bg-transparent text-brand-grey-500 py-2.5 px-6 text-base font-semibold leading-none',
        heading: 'For SMART & PREMIUM Systems',
        image: MicroInverter,
        subText:
          'Fenice Energy branded state-of-the-art, compact, modular and future ready inverters that monitor panel level generation, reducing losses and cases of single point failures',
      };
    }
    return {
      key: 'string',
      selectedClass:
        'bg-brand-blue-200 text-brand-blue-500 rounded-full py-2.5 px-6 text-base font-semibold leading-none',
      className:
        'bg-transparent text-brand-grey-500 py-2.5 px-6 text-base font-semibold leading-none',
      heading: 'FOR BASIC SYSTEMS ONLY',
      image: StringInverter,
      subText:
        'Brain of a Solar PV system, a solar inverter converts DC to AC, that is, solar energy into electricity.',
    };
  };

  const getCurrentInverterData = getData();

  return (
    <div className="px-4 mb-9">
      <div className="my-7 flex justify-center">
        <svg id="rotatingText" viewBox="0 0 200 200" width="150" height="150">
          <defs>
            <path
              id="circle"
              d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                "
            ></path>
          </defs>

          <circle
            cx="100"
            cy="100"
            r="70"
            stroke="#E8F2FC"
            strokeWidth="35"
            fill="white"
          />

          <text width="50">
            <textPath
              alignmentBaseline="baseline"
              xlinkHref="#circle"
              className="svg-text"
            >
              Free Electricity | 25+ year savings |
            </textPath>
          </text>
        </svg>
      </div>

      <h2 className="heading-gradient ">
        Why our systems generate continuous power for 25+ years
      </h2>
      <p className="my-7 text-brand-grey-600 text-base text-center">
        We have carefully curated every component in your system to give you
        maximum generation over a long time. Find out details about key
        components and our checks to ensure quality and safety below.
      </p>

      <div className="flex flex-col gap-y-[30px]">
        <ComponentCard
          heading="RUST-PROOF STRUCTURE"
          subtext="Hot dipped galvanized iron structure, sturdy & cyclone-proof upto
            180 kmph, to keep your solar panels grounded & safe."
          image={Structure}
          onClickFn={() => {
            setIsModalOpen(true);
            setModalData(<SteelStructure />);
          }}
        />
        <ComponentCard
          heading="CERTIFIED SOLAR PANELS WITH 25 YEAR WARRANTY"
          subtext="100% A Grade panels sourced directly from manufacturers, Highly
            efficient and BIS certified for long lasting performance"
          image={SolarPanel}
          onClickFn={() => {
            setIsModalOpen(true);
            setModalData(<SolarPanelComponent />);
          }}
        />

        {/* Inverter */}

        <div className="px-3 py-5 rounded-xl border border-stone-300 justify-start items-start gap-3 flex flex-col">
          <div>
            <h3 className="text-black text-base font-semibold tracking-wide">
              INVERTER
            </h3>
            <p className="text-base leading-snug">2 options to choose from</p>
          </div>

          <div className="flex my-2 py-1.5 justify-between w-full">
            <button
              className={
                isMicroSelected
                  ? getCurrentInverterData.selectedClass
                  : getCurrentInverterData.className
              }
              onClick={() => setIsMicroSelected(true)}
            >
              Microinverter
            </button>
            <button
              className={
                isMicroSelected
                  ? getCurrentInverterData.className
                  : getCurrentInverterData.selectedClass
              }
              onClick={() => setIsMicroSelected(false)}
            >
              String Inverter
            </button>
          </div>

          <p className="text-sm font-medium tracking-wide text-brand-blue-600">
            {getCurrentInverterData.heading}
          </p>
          <p className="text-sm font-light">{getCurrentInverterData.subText}</p>
          <div className="button-animation my-3">
            <input
              type="button"
              value="Read More"
              className="font-inter"
              onClick={() => {
                setIsModalOpen(true);
                setModalData(<Inverter />);
              }}
            />
          </div>
          <Image
            src={getCurrentInverterData.image}
            className="w-full h-fit"
            alt=""
          />
        </div>

        <ComponentCard
          heading="ELECTRICAL SAFETY"
          subtext="We CARE for our customer, system and personnel safety."
          image={MCB}
          onClickFn={() => {
            setIsModalOpen(true);
            setModalData(<ElectricalSafety />);
          }}
        />
      </div>

      <div className="mt-20" id="installation">
        <h3 className="heading-gradient">
          Our solar installation process at a glance
        </h3>
        <p className="text-base font-light text-brand-grey-600 font-archivo mt-5 mb-8 text-center">
          We do 50+ Quality checkpoints that will ensure best-in-class
          performance of your solar system.
        </p>

        <video
          className="w-full h-auto object-fill rounded-xl border border-stone-300"
          controls={!autoPlayVideo}
          autoPlay={autoPlayVideo}
          muted
          playsInline
          src="/Solar-Installation.mp4"
          loop
        ></video>
      </div>
      <Modal isOpen={isModalOpen} onChange={setIsModalOpen}>
        {modalData}
      </Modal>
    </div>
  );
};

export default SolarComponents;
