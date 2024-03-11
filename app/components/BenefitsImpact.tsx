'use client';
import React, { useState } from 'react';
import Earth from '@icons/Earth.svg';

type Metrics = Array<{
  key: keyof Props;
  title: string;
  count: { monthly: number; yearly: number } | any;
  metric: string;
}>;

type Props = {
  numberOfTreesPlanted: {
    monthly: number;
    yearly: number;
  };
  co2Offset: {
    monthly: number;
    yearly: number;
  };
  avgMonthlySaving: number;
  avgYearlySaving: number;
  monthlyGeneration: number;
  yearlyGeneration: number;
};

const metrics: Metrics = [
  {
    key: 'numberOfTreesPlanted',
    title: 'Equivalent number of Trees planted',
    count: {
      monthly: 40.73,
      yearly: 40.73,
    },
    metric: 'trees',
  },
  {
    key: 'co2Offset',
    title: 'CO2 Offset',
    count: {
      monthly: 40.73,
      yearly: 40.73,
    },
    metric: 'kg',
  },
];

const BenefitsImpact = (props: Props) => {
  const [toggle, setToggle] = useState(true);
  const toggleClass = ' transform translate-x-5';

  const metricsArray: Metrics = metrics.map((val) => {
    return { ...val, count: props[val.key as keyof Props] };
  });

  return (
    <div className="mb-14">
      <div className="p-4">
        <h2 className="heading-gradient">Benefits & Impact</h2>
        <div className="mt-3 flex justify-center">
          <div className="flex items-center gap-x-[9px]">
            <p className="font-archivo text-sm font-light">Monthly</p>
            <div
              className="w-11 h-6 flex items-center bg-white border border-brand-grey-300 rounded-full px-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  'bg-[#00AEEF] h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out' +
                  (toggle ? null : toggleClass)
                }
              ></div>
            </div>
            <p className="font-archivo text-sm font-light">Yearly</p>
          </div>
        </div>
        <div className="rounded-[10px] border border-[#79BCFF] p-4 mt-6">
          <p className="text-base font-light">
            Average {toggle ? 'monthly' : 'yearly'} saving
          </p>
          <p className="mt-5 mb-6 heading--h2">
            ₹{' '}
            {toggle
              ? Math.round(props.avgMonthlySaving)
              : Math.round(props.avgYearlySaving)}
          </p>
          <div className="p-2.5 bg-gradient-to-r from-[#DFFFCC] to-white flex gap-x-2 rounded-full items-center">
            <Earth />{' '}
            <span className="text-sm text-brand-grey-600">
              upto 90% bill reduction
            </span>
          </div>
        </div>
        <div className="rounded-[10px] border border-[#79BCFF] p-4 mt-6">
          <p className="text-base font-light">
            Estimated {toggle ? 'monthly' : 'yearly'} generation
          </p>
          <p className="mt-5 mb-6 heading--h2">
            {toggle
              ? Math.round(props.monthlyGeneration)
              : Math.round(props.yearlyGeneration)}{' '}
            <span className="text-base text-brand-grey-600 font-medium">
              {toggle ? 'units/month' : 'units/year'}
            </span>
          </p>
          <div className="p-2.5 bg-gradient-to-r from-[#DFFFCC] to-white flex gap-x-2 rounded-full items-center">
            <Earth />{' '}
            <span className="text-sm text-brand-grey-600">
              meets upto 95% of your energy requirement
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-x-4 overflow-scroll w-full no-scrollbar mt-7 px-4">
        {metricsArray.map((val, index) => {
          return (
            <div
              key={index}
              className="min-w-[154px] h-[164px] p-4 rounded-lg border border-brand-green-200 flex flex-col justify-between items-start"
            >
              <span className="text-brand-grey-500 text-base leading-snug max-w-36">
                {val.title}
              </span>
              <div className="flex text-black font-medium items-end gap-x-1">
                <span className="text-2xl">
                  {toggle
                    ? Math.round(val.count.monthly)
                    : Math.round(val.count.yearly)}{' '}
                </span>
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
