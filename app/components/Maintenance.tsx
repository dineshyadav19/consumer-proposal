import React, { ReactNode } from 'react';
import Image from 'next/image';
import MaintenanceFeature from '@images/maintennace-feature.png';
import InspectionIcon from '@images/icons/inspection-visits.svg';
import CleaningIcon from '@images/icons/cleaning-visits.svg';
import WarrantyClaim from '@images/icons/warranty-claim.svg';
import SolarEngineer from '@images/engineer.png';

const IconCard = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="rounded-[10px] border border-zinc-300 border-opacity-90 flex flex-col items-center justify-center gap-y-3 max-w-36 p-4">
      {icon}
      <span className="text-base font-archivo font-medium text-center">
        {text}
      </span>
    </div>
  );
};

const Maintenance = () => {
  return (
    <div className="mt-4 mb-16">
      <h2 className="heading-gradient mb-8 p-4">
        Why maintenance is key to get the promised return on investment
      </h2>
      <Image src={MaintenanceFeature} alt="" className="w-full h-fit" />

      <div className="relative flex">
        <div className="pl-4 w-full mt-4 flex flex-col gap-y-4 relative">
          <div className="max-w-[60%] mb-2 px-3 py-5 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-sm border border-zinc-300 border-opacity-90 justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-brand-grey-600 text-xs font-archivo">
              Hello!
              <br />I am a solar engineer. You can reach out to our maintenance
              team if you face any difficulties with your system
            </div>
          </div>

          <IconCard icon={<InspectionIcon />} text="Inspection visits" />
          <IconCard icon={<WarrantyClaim />} text="Warranty claim support" />
          <IconCard icon={<CleaningIcon />} text="Cleaning visits" />
        </div>

        <div className="absolute right-0 top-0 h-full w-full">
          <div className="h-12"></div>
          <Image
            src={SolarEngineer}
            alt=""
            className="h-full object-fill w-fit absolute right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
