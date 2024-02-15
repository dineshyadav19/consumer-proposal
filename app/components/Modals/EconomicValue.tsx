import React from 'react';
import Header from './Header';
import GraphImage from '@images/modal-images/evp-graph.png';
import RustIcon from '@icons/modal-icons/Rust.svg';

type Props = {};

const EconomicValueModal = (props: Props) => {
  return (
    <div>
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

        <div className="py-[22px] px-2">
          <p className="text-xl leading-none font-medium mt-4 mb-5">
            Return on Investement (ROI)
          </p>
          <div className="flex justify-between gap-x-5">
            <div className="px-4 py-2 h-28 rounded-[10px] border border-zinc-300 border-opacity-90 flex flex-col justify-between items-start w-full">
              <span className="max-w-24 text-base text-brand-grey-500 leading-snug">
                With Financing
              </span>
              <span className="text-xl font-medium">33%</span>
            </div>
            <div className="green-blue-gradient p-[1px] rounded-[10px] w-full h-28">
              <div className="px-4 py-2 bg-white rounded-[10px] flex flex-col justify-between items-start h-full">
                <span className="max-w-24 text-base text-brand-grey-500 leading-snug">
                  Without Financing
                </span>
                <span className="text-xl font-medium">33%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[22px] px-2">
          <p className="text-xl leading-none font-medium mt-4 mb-5">
            Solar vs others (returns)
          </p>
          <div className="flex justify-between gap-x-5">
            <div className="green-blue-gradient p-[1px] rounded-[10px] w-full h-28">
              <div className="px-4 py-2 bg-white rounded-[10px] flex flex-col justify-between items-start h-full">
                <span className="max-w-24 text-base text-brand-grey-500 leading-snug">
                  Solar
                </span>
                <span className="text-xl font-medium">33%</span>
              </div>
            </div>
            <div className="px-4 py-2 h-28 rounded-[10px] border border-zinc-300 border-opacity-90 flex flex-col justify-between items-start w-full">
              <span className="max-w-24 text-base text-brand-grey-500 leading-snug">
                FD
              </span>
              <span className="text-xl font-medium">33%</span>
            </div>
          </div>
        </div>

        <div className="py-[22px] px-2">
          <p className="text-xl leading-none font-medium mt-4 mb-5">
            Electricity tariff
          </p>
          <div className="flex justify-between gap-x-5">
            <div className="green-blue-gradient p-[1px] rounded-[10px] w-full h-28">
              <div className="px-4 py-2 bg-white rounded-[10px] flex flex-col justify-between items-start h-full">
                <span className="max-w-24 text-base text-brand-grey-500 leading-snug">
                  With solar
                </span>
                <span className="text-xl font-medium">₹ 33</span>
              </div>
            </div>
            <div className="px-4 py-2 h-28 rounded-[10px] border border-zinc-300 border-opacity-90 flex flex-col justify-between items-start w-full">
              <span className="max-w-24 text-base text-brand-grey-500 leading-snug">
                Without solar
              </span>
              <span className="text-xl font-medium">₹ 33</span>
            </div>
          </div>
        </div>

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
