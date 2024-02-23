import React, { useState } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdCheckmark } from 'react-icons/io';
import { GoArrowLeft } from 'react-icons/go';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Investment from '@images/good-investment-bg.png';
import CrossArrow from '@images/cross-arrow.png';
import LockPrice from '@components/Modals/LockPrice';
import EmiModal from '@components/Modals/EmiModal';
import PriceBreakup from '@components/Modals/PriceBreakup';
import Modal from '../../../components/Modal';
import {
  basicSystemoffering,
  premiumSystemoffering,
  smartSystemoffering,
} from './SystemOfferingsCopy';
import { PROPOSAL_OUTPUT } from '../../actions/types';
import EconomicValueModal from '@components/Modals/EconomicValue';
import { getProposalDates } from '@utils/date-fn';
import { useSearchParams } from 'next/navigation';

type Plant_Type = 'Basic' | 'Smart' | 'Premium' | 'Standard';

type Props = {
  plantType: Plant_Type;
  proposalData: Array<PROPOSAL_OUTPUT>;
};

const SystemOfferings = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emiModalOpen, setEmiModalOpen] = useState(false);
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [economicModalOpen, setEconomicModalOpen] = useState(false);
  const searchParams = useSearchParams();

  const getSystemOffering = (type: Plant_Type) => {
    switch (type) {
      case 'Basic':
      case 'Standard':
        return basicSystemoffering;
      case 'Smart':
        return smartSystemoffering;
      case 'Premium':
        return premiumSystemoffering;
    }
  };

  const systemOfferings = getSystemOffering(props.plantType);

  const offeringStyle =
    props.plantType === 'Smart'
      ? 'green-blue-gradient p-0.5 rounded-[12px]'
      : 'border border-brand-blue-400 rounded-[10px]';

  const systemValues = props.proposalData.find(
    (val) => val.system_type === props.plantType
  );

  const { futureFormattedDate } = getProposalDates(
    searchParams.get('generatedOn') as any
  );
  return (
    <>
      <div className={`${offeringStyle}`}>
        <div className="px-4 py-6 rounded-[10px] bg-white flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-5 items-center">
            <div className="green-blue-gradient p-0.5 rounded-full w-fit">
              <div className="uppercase bg-black text-center px-[18px] rounded-full text-white text-2xl font-semibold font-archivo">
                {props.plantType}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center font-archivo">
            {/* {systemValues?.data.subsidy_value ? (
              <div className="relative justify-center items-center mb-1">
                <p className="green-blue-gradient text-xl font-semibold text-transparent bg-clip-text max-w-max">
                  ₹ {systemValues.data.subsidy_value}
                </p>
                <div className="absolute inset-0 py-2">
                  <Image src={CrossArrow} alt="" />
                </div>
              </div>
            ) : (
              <></>
            )} */}

            <p className="green-blue-gradient text-4.5xl font-semibold text-transparent bg-clip-text ">
              ₹ {systemValues?.data.total_system_price_with_gst}
            </p>
            <p className="text-brand-grey-500 font-semibold">
              Total payable (incl. GST)
            </p>

            {systemValues?.data.subsidy_value ? (
              <div className="text-xl font-medium font-archivo text-brand-grey-600 py-3 px-1.5 bg-brand-blue-100 text-center my-4 w-full">
                Subsidy : ₹ {systemValues?.data.subsidy_value}
              </div>
            ) : (
              <></>
            )}

            {systemValues?.data?.loan_options.length ? (
              <p className="mt-3 text-center text-base tracking-wide text-brand-grey-600">
                EMI starting from as low as ₹{' '}
                {systemValues?.data?.loan_options[0].data[0].emi} per month.{' '}
                <button
                  className="inline-flex text-brand-blue-600"
                  onClick={() => setEmiModalOpen(true)}
                >
                  Lean more
                </button>
              </p>
            ) : (
              <></>
            )}
          </div>

          <div
            className="text-brand-blue-600 text-base font-medium font-archivo text-center"
            onClick={() => setPriceModalOpen(true)}
          >
            View detailed price breakup
          </div>

          {systemOfferings.map((offering, index) => {
            const icon =
              offering.icon === 'check' ? (
                <IoMdCheckmark
                  fill="#009429"
                  className="font-bold w-6 h-6 p-0.5"
                />
              ) : (
                <RxCross1 className="font-bold w-6 h-6 p-0.5bg-white text-[#F02C2C]" />
              );

            const bgStyles =
              offering.backgroud === 'plain'
                ? 'rounded w-full bg-brand-green-100 py-1 px-4'
                : 'green-blue-gradient p-0.5 rounded-[10px]';

            return (
              <div className="flex flex-col gap-y-2.5" key={index}>
                <div className="flex gap-x-1.5 items-center">
                  {icon}
                  <p className="text-lg font-medium">{offering.text}</p>
                </div>
                <div className="inline-flex gap-x-1.5">
                  <div className="w-6 h-6 p-0.5" />
                  <div className={bgStyles}>
                    <div className="text-base bg-transparent">
                      {offering.subText}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className="bg-gradient-to-l from-lime-50 to-lime-200 font-archivo p-3 flex items-center relative w-full h-24 rounded-[10px] z-10"
            onClick={() => setEconomicModalOpen(true)}
          >
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
            Discounts valid till {futureFormattedDate} only, don’t miss, lock
            the price now
          </p>

          {props.plantType === 'Smart' ? (
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="p-5 text-xl text-white font-medium leading-none bg-gradient-to-r from-sky-700 via-sky-500 to-sky-700 rounded-[41px] shadow-inner border border-white border-opacity-50"
            >
              Lock this price @ ₹25,000
            </button>
          ) : (
            <div className="button-animation my-3 w-full h-14">
              <input
                type="button"
                value="Lock this price @ ₹25,000"
                className="font-inter rounded-[41px] text-white font-semibold leading-none"
                onClick={() => setIsModalOpen(!isModalOpen)}
                style={{ fontSize: '20px' }}
              />
            </div>
          )}

          {systemValues?.data.loan_options.length ? (
            <p
              className="text-base leading-none text-brand-blue-600 text-center"
              onClick={() => setEmiModalOpen(true)}
            >
              Explore financing options
            </p>
          ) : (
            <></>
          )}
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
        <EmiModal loanOptions={systemValues?.data.loan_options} />
      </Modal>
      <Modal isOpen={economicModalOpen} onChange={setEconomicModalOpen}>
        <EconomicValueModal />
      </Modal>
      <Modal isOpen={priceModalOpen} onChange={setPriceModalOpen}>
        <PriceBreakup priceBreak={systemValues?.data} />
      </Modal>
    </>
  );
};

export default SystemOfferings;
