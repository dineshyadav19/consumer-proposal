'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import Investment from '@images/good-investment-bg.png';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import * as Dialog from '@radix-ui/react-dialog';
import LockPrice from './Modals/LockPrice';
import { GoArrowLeft } from 'react-icons/go';
import DownArrow from '@icons/down-arrow.svg';
import Modal from '../../components/Modal';
import EmiModal from './Modals/EmiModal';
import PriceBreakup from './Modals/PriceBreakup';
import { PROPOSAL_OUTPUT } from '../actions/types';

const Pricing = ({
  proposalOutput,
}: {
  proposalOutput: Array<PROPOSAL_OUTPUT>;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emiModalOpen, setEmiModalOpen] = useState(false);
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [planType, setPlanType] = useState<'Basic' | 'Smart' | 'Premium'>(
    'Smart'
  );
  const planTypeButtonStyles =
    'py-2.5 px-6 text-base tracking-wide text-brand-grey-600 leading-none font-semibold';
  return (
    <>
      <h2 className="heading-gradient mt-11">Choose a system</h2>
      <div className="flex justify-center my-4">
        <svg id="rotatingText" viewBox="0 0 200 200" width="120" height="120">
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
      <div className="flex flex-col font-archivo justify-center items-center">
        <p className="text-xl font-medium heading-gradient mb-2">Pricing</p>

        <p className="text-base text-brand-grey-600">
          Valid till 24th Jan 2024
        </p>
      </div>

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

        {/* <button
          className={`${
            planType === 'Basic' && 'bg-brand-blue-200 rounded-full'
          } ${planTypeButtonStyles}`}
          onClick={() => setPlanType('Basic')}
        >
          Basic
        </button>
        <button
          className={`${
            planType === 'Smart' &&
            'green-blue-gradient text-neutral-50 rounded-full'
          } ${planTypeButtonStyles}`}
          onClick={() => setPlanType('Smart')}
        >
          Smart
        </button>
        <button
          className={`${
            planType === 'Premium' && 'bg-brand-blue-200 rounded-full'
          } ${planTypeButtonStyles}`}
          onClick={() => setPlanType('Premium')}
        >
          Premium
        </button> */}
      </div>
      <div className="green-blue-gradient p-0.5 rounded-[12px]">
        <div className="px-4 py-6 rounded-[10px] bg-white flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-5 items-center">
            {/* <div className="text-brand-blue-500 text-sm font-medium tracking-wide py-2 px-4 border border-brand-blue rounded-full text-center w-fit">
              ₹2,500 discount
            </div> */}

            <div className="green-blue-gradient p-0.5 rounded-full w-fit">
              <div className="uppercase bg-black text-center px-[18px] rounded-full text-white text-2xl font-semibold font-archivo">
                Smart
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center font-archivo">
            <p className="green-blue-gradient text-4.5xl font-semibold text-transparent bg-clip-text ">
              ₹ 2,55,269
            </p>
            <p className="text-brand-grey-500 font-semibold">
              Total payable (incl. GST)
            </p>
            <div className="text-xl font-medium font-archivo text-brand-grey-600 py-3 px-1.5 bg-brand-blue-100 text-center my-4 w-full">
              Subsidy : ₹ 12,000
            </div>
            <p className="mt-3 text-center text-base tracking-wide text-brand-grey-600">
              EMI starting from as low as ₹1483.00 per month. Lean more
            </p>
          </div>

          <div
            className="text-brand-blue-600 text-base font-medium font-archivo text-center"
            onClick={() => setPriceModalOpen(true)}
          >
            View detailed price breakup
          </div>

          <div className="flex flex-col gap-y-2.5">
            <div className="flex gap-x-1.5 items-center">
              <IoMdCheckmark
                fill="#009429"
                className="font-bold w-6 h-6 p-0.5"
              />
              <p className="text-lg font-medium">{'High rise structure'}</p>
            </div>
            <div className="inline-flex gap-x-1.5">
              <div className="w-6 h-6 p-0.5" />
              <p className="text-base py-1 px-4 bg-brand-green-100 rounded w-full">
                10 year product warranty
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-2.5">
            <div className="flex gap-x-1.5 items-center">
              <IoMdCheckmark
                fill="#009429"
                className="font-bold w-6 h-6 p-0.5"
              />
              <p className="text-lg font-medium">{'Microinverter'}</p>
            </div>
            <div className="inline-flex gap-x-1.5">
              <div className="w-6 h-6 p-0.5" />
              <p className="text-base py-1 px-4 bg-brand-green-100 rounded w-full">
                10 year product warranty
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-2.5">
            <div className="flex gap-x-1.5 items-center">
              <IoMdCheckmark
                fill="#009429"
                className="font-bold w-6 h-6 p-0.5"
              />
              <p className="text-lg font-medium">{'Workmanship warranty'}</p>
            </div>
            <div className="inline-flex gap-x-1.5">
              <div className="w-6 h-6 p-0.5" />
              <p className="text-base py-1 px-4 bg-brand-green-100 rounded w-full">
                5 years
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-2.5">
            <div className="flex gap-x-1.5 items-center">
              <IoMdCheckmark
                fill="#009429"
                className="font-bold w-6 h-6 p-0.5"
              />
              <p className="text-lg font-medium">
                {'Cleaning & Maintenance visits'}
              </p>
            </div>
            <div className="inline-flex gap-x-1.5">
              <div className="w-6 h-6 p-0.5" />
              <div className="green-blue-gradient p-0.5 rounded-[12px]">
                <p className="text-base px-4 py-1 rounded-[10px] bg-white">
                  Quarterly health check-up & cleaning visits
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2.5">
            <div className="flex gap-x-1.5 items-center">
              <IoMdCheckmark
                fill="#009429"
                className="font-bold w-6 h-6 p-0.5"
              />
              <p className="text-lg font-medium">{'Generation Guarantee'}</p>
            </div>
            <div className="inline-flex gap-x-1.5">
              <div className="w-6 h-6 p-0.5" />
              <div className="green-blue-gradient p-0.5 rounded-[12px]">
                <p className="text-base px-4 py-1 rounded-[10px] bg-white">
                  Upgrade to PREMIUM to get 1 year of generation guarantee.
                  <br /> View PREMIUM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-l from-lime-50 to-lime-200 font-archivo p-3 flex items-center relative w-full h-24 rounded-[10px] z-10">
            <div className="relative z-30 flex gap-y-5 justify-between items-center">
              <h3 className="text-base tracking-wide">
                Wondering if solar is a good investment?{' '}
                <span className="font-medium">(ROI)</span>
              </h3>

              <div className="w-12 h-12 green-blue-gradient rounded-full stroke-none">
                <BsArrowRightCircleFill className="w-12 h-12" fill="white" />
              </div>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image src={Investment} alt="" width={110} height={92} />
            </div>
          </div>

          <p className="text-brand-grey-500 text-base text-center">
            Discounts valid till 24th January only, don’t miss, lock the price
            now
          </p>

          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="p-5 text-xl text-white font-medium leading-none bg-gradient-to-r from-sky-700 via-sky-500 to-sky-700 rounded-[41px] shadow-inner border border-white border-opacity-50"
          >
            Lock this price @ ₹25,000
          </button>

          <p
            className="text-base leading-none text-brand-blue-600 text-center"
            onClick={() => setEmiModalOpen(true)}
          >
            Explore financing options
          </p>
        </div>
      </div>
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-brand-grey-400/90  fixed inset-0" />
          <Dialog.Content className="w-full h-full fixed top-0 bg-white overflow-scroll no-scrollbar px-4 py-6 z-20">
            <div>
              <div
                className="w-12 h-12 bg-neutral-50 rounded-full border border-zinc-300 border-opacity-90 flex justify-center items-center"
                onClick={() => setIsModalOpen(false)}
              >
                <GoArrowLeft className="w-8 h-8" />
              </div>
              <LockPrice />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Modal isOpen={emiModalOpen} onChange={setEmiModalOpen}>
        <EmiModal />
      </Modal>
      <Modal isOpen={priceModalOpen} onChange={setPriceModalOpen}>
        <PriceBreakup />
      </Modal>
    </>
  );
};

export default Pricing;
