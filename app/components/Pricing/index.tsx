'use client';
import React, { useEffect, useState } from 'react';
import DownArrow from '@icons/down-arrow.svg';
import { PROPOSAL_OUTPUT, STRUCTURE } from '../../actions/types';
import SystemOfferings from './SystemOfferings';
import { getProposalDates } from '@utils/date-fn';
import { sortProposalOutputArrayBySystemType } from './utils';

const Pricing = ({
  proposalOutput,
  date,
  structure,
  city,
}: {
  proposalOutput: Array<PROPOSAL_OUTPUT>;
  date: Date;
  structure: STRUCTURE;
  city: string;
}) => {
  const sortedProposalOutput =
    sortProposalOutputArrayBySystemType(proposalOutput);

  const checkIfSmartExist = sortedProposalOutput.find(
    (val) => val.system_type === 'Smart'
  );

  const getFirstSelectedValue =
    checkIfSmartExist?.system_type || sortedProposalOutput[0].system_type;

  const [plantType, setPlantType] = useState<
    'Basic' | 'Smart' | 'Premium' | 'Standard'
  >(getFirstSelectedValue);

  const planTypeButtonStyles =
    'py-2.5 px-6 text-base tracking-wide text-brand-grey-600 leading-none font-semibold grow';

  const { futureFormattedDate } = getProposalDates(date);

  return (
    <>
      <h2 className="heading-gradient mt-11 mx-4">Choose a system</h2>
      <div className="flex justify-end">
        <div className="flex flex-col font-archivo justify-end items-end grow">
          <div>
            <p className="text-xl font-medium heading-gradient mb-2">Pricing</p>
            <p className="text-base text-brand-grey-600">
              Valid till {futureFormattedDate} {new Date().getFullYear()}
            </p>
          </div>
        </div>
        <div className="pr-2">
          <svg viewBox="0 0 180 200" width="100" height="100">
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
      </div>

      <div className="px-4 -mt-4">
        <div className="mb-2.5 mt-1.5">
          <DownArrow />
        </div>
        <div className="rounded-full bg-brand-grey-100 px-2.5 py-1.5 mb-5 flex items-center gap-x-[18px]">
          {sortedProposalOutput.map((val) => {
            const isActive = val.system_type === plantType;

            const activeClass =
              isActive && plantType === 'Smart'
                ? 'green-blue-gradient text-neutral-50 rounded-full'
                : isActive
                ? 'bg-brand-blue-200 rounded-full'
                : '';

            return (
              <button
                key={val.system_type}
                className={`${activeClass} ${planTypeButtonStyles}`}
                onClick={() => setPlantType(val.system_type)}
              >
                {val.system_type}
              </button>
            );
          })}
        </div>
        <SystemOfferings
          plantType={plantType}
          proposalData={sortedProposalOutput}
          structure={structure}
          city={city}
        />
      </div>
    </>
  );
};

export default Pricing;
