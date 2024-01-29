import React from 'react';
import TrackPlantImage from '@images/fenice-digital-apps.png';
import Image from 'next/image';

type Props = {};

const TrackPlant = (props: Props) => {
  return (
    <div className="my-14 p-4">
      <h2 className="heading-gradient mb-8 p-4">
        Track & monitor your solar plant from anywhere
      </h2>

      <p className="text-brand-grey-600 text-base font-light font-archivo text-center">
        FeniceCare - our customer app - allows you to check the amount of solar
        power your system produces on a real-time basis!
      </p>

      <Image src={TrackPlantImage} alt="" />

      <div className="flex flex-col text-brand-grey-500 items-center justify-center text-sm font-archivo">
        <span>Available for</span>
        <span>Android & iOS devices</span>
      </div>
    </div>
  );
};

export default TrackPlant;
