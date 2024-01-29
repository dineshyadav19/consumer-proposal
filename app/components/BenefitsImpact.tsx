import React from 'react';
import Earth from '@images/icons/Earth.svg';
type Props = {};

const BenefitsImpact = (props: Props) => {
  return (
    <div className="p-4">
      <h2 className="heading-gradient">Benefits & Impact</h2>
      <div className="rounded-[10px] border border-[#79BCFF] p-4 mt-6">
        <p className="text-base font-light">Average monthly saving</p>
        <p className="mt-5 mb-6 heading--h2">₹ 1,700</p>
        <div className="p-2.5 bg-gradient-to-r from-[#DFFFCC] to-white flex gap-x-2 rounded-full items-center">
          <Earth /> <span>upto 70% bill reduction</span>
        </div>
      </div>
      <div className="rounded-[10px] border border-[#79BCFF] p-4 mt-6">
        <p className="text-base font-light">Estimated monthly generation</p>
        <p className="mt-5 mb-6 heading--h2">
          250{' '}
          <span className="text-base text-brand-grey-600 font-medium">
            units/ month
          </span>
        </p>
        <div className="p-2.5 bg-gradient-to-r from-[#DFFFCC] to-white flex gap-x-2 rounded-full items-center">
          <Earth /> <span>upto 70% bill reduction</span>
        </div>
      </div>
    </div>
  );
};

export default BenefitsImpact;
