'use client';
import React, { useState } from 'react';
import DownArrow from '@icons/down-arrow.svg';
import { PROPOSAL_OUTPUT } from '../../actions/types';
import SystemOfferings from './SystemOfferings';

const Pricing = ({
  proposalOutput,
}: {
  proposalOutput: Array<PROPOSAL_OUTPUT>;
}) => {
  const [planType, setPlanType] = useState<
    'Basic' | 'Smart' | 'Premium' | 'Standard'
  >('Smart');
  const planTypeButtonStyles =
    'py-2.5 px-6 text-base tracking-wide text-brand-grey-600 leading-none font-semibold grow';

  return (
    <>
      <h2 className="heading-gradient mt-11 mx-4">Choose a system</h2>
      <div className="flex my-4">
        <div className="flex flex-col font-archivo justify-center items-end grow">
          <div>
            <p className="text-xl font-medium heading-gradient mb-2">Pricing</p>
            <p className="text-base text-brand-grey-600">
              Valid till 24th Jan 2024
            </p>
          </div>
        </div>
        <svg viewBox="0 0 200 200" width="120" height="120">
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
            strokeWidth="25"
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

      <div className="px-4">
        <div className="mb-2.5 mt-1.5">
          <DownArrow />
        </div>
        <div className="rounded-full bg-brand-grey-100 px-2.5 py-1.5 mb-5 flex items-center gap-x-[18px]">
          {proposalOutput.map((val) => {
            const isActive = val.system_type === planType;

            const activeClass =
              isActive && planType === 'Smart'
                ? 'green-blue-gradient text-neutral-50 rounded-full'
                : isActive
                ? 'bg-brand-blue-200 rounded-full'
                : '';

            return (
              <button
                key={val.system_type}
                className={`${activeClass} ${planTypeButtonStyles}`}
                onClick={() => setPlanType(val.system_type)}
              >
                {val.system_type}
              </button>
            );
          })}
        </div>
        <SystemOfferings plantType={planType} proposalData={proposalOutput} />
      </div>
    </>
  );
};

export default Pricing;
