import React from 'react';
import Header from './Header';
import Structure from '@images/modal-images/structure.png';
import Certification from '@icons/modal-icons/certified.svg';
import RustProof from '@icons/modal-icons/Rust.svg';
import SteelBar from '@icons/modal-icons/steelbar.svg';
import Waterproof from '@icons/modal-icons/waterproof.svg';
import ListCard from './ListCard';

const data = [
  {
    icon: <Certification />,
    text: 'STAAD Certification ',
    subtext:
      'Our structures are certified by 3rd party engineer for sturdiness to withstand up to 180 kmph or category 2 cyclone.',
  },
  {
    icon: <RustProof />,
    text: 'Rust Proof ',
    subtext:
      'We use prefabricated HDGI structures with minimum 80 mm galvanization thickness. These structures don`t require welding as it can lead to rusting in a few years, impacting solar system life, cost and reduce return on investment.',
  },
  {
    icon: <SteelBar />,
    text: 'Galvanized Steel',
    subtext:
      'The braceless design of our High Rise structures is perfect to use the area below the solar system. No more losing terrace space!',
  },
  {
    icon: <Waterproof />,
    text: 'Waterproof',
    subtext:
      'Only the best quality materials are used for waterproofing and civil work, to ensure minimal roof impact.',
  },
];

const SteelStructure = () => {
  return (
    <>
      <Header
        image={Structure}
        heading="Hot Dip Galvanized Iron Structure"
        subHeading="Learn more about"
      />

      <div className="flex flex-col gap-y-2">
        {data.map((val) => {
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

export default SteelStructure;
