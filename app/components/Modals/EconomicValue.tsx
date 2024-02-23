import React from 'react';
import Header from './Header';
import GraphImage from '@images/modal-images/evp-graph.png';
import RustIcon from '@icons/modal-icons/Rust.svg';

const values = [
  {
    heading: 'Return on Investement (ROI)',
    data: [
      {
        text: 'With Financing',
        metric: '33%',
      },
      {
        text: 'Without Financing',
        metric: '17%',
      },
    ],
  },
  {
    heading: 'Solar vs others (returns)',
    data: [
      {
        text: 'Solar',
        metric: '33%',
      },
      {
        text: 'FD',
        metric: '7%',
      },
    ],
  },
  {
    heading: 'Electricity tariff',
    data: [
      {
        text: 'With solar',
        metric: '₹ 3.39',
      },
      {
        text: 'Without solar',
        metric: '₹ 8.85',
      },
    ],
  },
];

const EconomicValueModal = () => {
  return (
    <div className="z-20">
      <Header
        image={GraphImage}
        heading="Economic value"
        subHeading="Learn more about"
      />

      <div className="flex flex-col gap-y-2">
        <div className="py-[22px] px-2">
          <RustIcon />
          <p className="text-xl leading-none font-medium mt-4 mb-5">
            First year savings
          </p>
          <p className="text-3xl font-semibold">₹ 20,400</p>
        </div>

        {values.map((val) => {
          return (
            <div key={val.heading} className="py-[22px] px-2">
              <p className="text-xl leading-none font-medium mt-4 mb-5">
                {val.heading}
              </p>
              <div className="flex justify-between gap-x-5">
                {val.data.map((comparison, index) => {
                  const gradientBorder =
                    index % 2 === 0
                      ? 'green-blue-gradient p-[1px]'
                      : 'border border-zinc-300 border-opacity-90';

                  return (
                    <div
                      key={index}
                      className={`${gradientBorder} h-28 rounded-[10px] w-full`}
                    >
                      <div className="px-4 py-2 bg-white rounded-[10px] flex flex-col justify-between items-start h-full">
                        <span className="max-w-24 text-base text-brand-grey-500 leading-snug">
                          {comparison.text}
                        </span>
                        <span className="text-xl font-medium">
                          {comparison.metric}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="py-[22px] px-2">
          <p className="text-xl leading-none font-medium mb-5">
            Payback period
          </p>
          <p className="text-3xl font-semibold">7 years</p>
        </div>

        <div className="flex flex-col gap-y-3 items-center justify-center text-[13px] text-brand-grey-600">
          <p className="text-base text-stone-950">Assumptions</p>

          <p className="text-center">
            Cost of electricity over 25 years considering an escalation of 3%
            every year
          </p>

          <p>Loan repayment period of 5 years</p>

          <p>Rate of interest on loan 9.50%</p>
        </div>
      </div>
    </div>
  );
};

export default EconomicValueModal;
