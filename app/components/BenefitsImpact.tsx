import React from 'react';
import Earth from '@icons/Earth.svg';
type Props = {};

const metrics = [
  {
    title: 'Equivalent number of Trees planted',
    number: '1,234',
    metric: 'trees',
  },
  {
    title: 'Petrol consumption avoided',
    number: '40.73',
    metric: 'liters',
  },
  {
    title: 'Equivalent number of Trees planted',
    number: '1,234',
    metric: 'trees',
  },
];

const BenefitsImpact = (props: Props) => {
  return (
    <div className="mb-14">
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

      <div className="flex gap-x-4 overflow-scroll w-full no-scrollbar mt-7 px-4">
        {metrics.map((val, index) => {
          return (
            <div
              key={index}
              className="min-w-[154px] h-[164px] p-4 rounded-lg border border-brand-green-200 flex flex-col justify-between items-start"
            >
              <span className="text-brand-grey-500 text-base leading-snug">
                {val.title}
              </span>
              <div className="flex text-black font-medium items-end gap-x-1">
                <span className="text-2xl">{val.number} </span>
                <span className="text-base">{val.metric}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsImpact;
