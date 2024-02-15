import React, { useState } from 'react';
import Lifeline from '@icons/modal-icons/lifeline.svg';
import Warranty from '@icons/modal-icons/warranty.svg';
import LowFailure from '@icons/modal-icons/low faliure.svg';
import FutureReady from '@icons/modal-icons/future ready.svg';
import Efficient from '@icons/modal-icons/efficient.svg';
import Native from '@icons/modal-icons/native.svg';
import Modular from '@icons/modal-icons/modular.svg';
import Compact from '@icons/modal-icons/compact.svg';
import Safe from '@icons/modal-icons/System Safety.svg';
import CustomerSupport from '@icons/modal-icons/customer support.svg';
import Quality from '@icons/modal-icons/quality.svg';
import ReduceDowntime from '@icons/modal-icons/Reduce downtime.svg';
import Header from './Header';
import ListCard from './ListCard';
import MicroInverterImage from '@images/modal-images/micro-inverter.png';

const microInverter = [
  {
    icon: <Lifeline />,
    text: 'Superior Lifespan and Warranty',
    subtext:
      'With 10 years’ warranty, extendable up to 20 years, our microinverters come with >25 years’ design life!',
  },
  {
    icon: <Warranty />,
    text: 'Easy warranty',
    subtext:
      'Our Microinverters are Fenice Energy (SILRES) branded, making warranty claims simple!',
  },
  {
    icon: <LowFailure />,
    text: 'Low failure rate',
    subtext:
      'Microinverters perform better and have a longer efficient life, because panels can be monitored at an individual level, making it easy to detect issues and fix them quickly.',
  },
  {
    icon: <FutureReady />,
    text: 'Future ready',
    subtext:
      'Worried you will require more electricity after a decade? No worries!! You can easily expand system size to meet future requirements because of our microinverters.',
  },
  {
    icon: <Efficient />,
    text: 'Efficient',
    subtext:
      'Microinverters provide a boosted system performance in low light conditions, usually generating 5-20% more energy output compared to string inverter systems.',
  },
  {
    icon: <Native />,
    text: 'Native',
    subtext:
      'Both our single and three phase inverters do not require any additional devices to operate, they are self sufficient, that is, native!',
  },
  {
    icon: <Modular />,
    text: 'Modular',
    subtext:
      'Easy installation on virtually any available surface as well as various configurations and orientations for panel arrangement are possible, without any losses.',
  },
  {
    icon: <Compact />,
    text: 'Compact and Minimalistic',
    subtext:
      'With microinverters, DC wiring is minimized as microinverters sit underneath the panels on the structure, and therefore, they don’t require a separate covered space.',
  },
  {
    icon: <Safe />,
    text: 'Safe',
    subtext:
      'Compared to a string inverter (DC Voltage can be as high as 800V/ 1100V/1500V), Microinverter DC Voltage is <120V, making it safer.',
  },
];

const stringInverter = [
  {
    icon: <Warranty />,
    text: 'Warranty',
    subtext: 'String inverters come with 5 years of warranty.',
  },
  {
    icon: <CustomerSupport />,
    text: 'After Sales Service',
    subtext:
      'Most inverters are imported, and parts are exclusive to inverters, making service particularly difficult. However, we have created Service Level Agreements (SLAs) with our inverter suppliers to provide our customers with the best service network.',
  },
  {
    icon: <Quality />,
    text: 'Quality',
    subtext:
      'We procure string inverters from top tier companies only and ensure that a Factory Acceptance Test is performed before dispatch.',
  },
  {
    icon: <ReduceDowntime />,
    text: 'Reduce downtime',
    subtext:
      'We keep spares at local warehouses for repairs / replacements, ensuring our customers face minimal downtime.',
  },
];

const Inverter = () => {
  const [isMicroSelected, setIsMicroSelected] = useState(true);

  const getData = () => {
    if (isMicroSelected) {
      return {
        key: 'micro',
        selectedClass:
          'bg-brand-blue-200 text-brand-blue-500 rounded-full py-2.5 px-6 text-base font-semibold leading-none',
        className:
          'bg-transparent text-brand-grey-500 py-2.5 px-6 text-base font-semibold leading-none',
        heading: 'Micro-Inverter',
        data: microInverter,
      };
    }
    return {
      key: 'string',
      selectedClass:
        'bg-brand-blue-200 text-brand-blue-500 rounded-full py-2.5 px-6 text-base font-semibold leading-none',
      className:
        'bg-transparent text-brand-grey-500 py-2.5 px-6 text-base font-semibold leading-none',
      heading: 'String Inverter',
      data: stringInverter,
    };
  };

  const getCurrentInverterData = getData();

  return (
    <>
      <div className="flex mt-3 py-1.5 justify-between">
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

      <Header
        image={MicroInverterImage}
        heading={getCurrentInverterData.heading}
        subHeading="Learn more about"
      />

      <div className="flex flex-col gap-y-2">
        {getCurrentInverterData.data.map((val) => {
          return (
            <ListCard
              icon={val.icon}
              heading={val.text}
              description={val.subtext}
              key={val.text}
            />
          );
        })}
      </div>
    </>
  );
};

export default Inverter;
