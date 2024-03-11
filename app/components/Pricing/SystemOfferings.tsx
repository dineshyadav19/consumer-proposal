import React, { useState } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdCheckmark } from 'react-icons/io';
import { GoArrowLeft } from 'react-icons/go';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Investment from '@images/good-investment-bg.png';
import LockPrice from '@components/Modals/LockPrice';
import EmiModal from '@components/Modals/EmiModal';
import PriceBreakup from '@components/Modals/PriceBreakup';
import Modal from '../../../components/Modal';
import EconomicValueModal from '@components/Modals/EconomicValue';
import { getProposalDates } from '@utils/date-fn';
import CrossArrow from '@images/cross-arrow.png';
import {
  Modal_States,
  Props,
  getStructureHeight,
  getSystemOffering,
} from './utils';
import { getPriceBreakupValues } from '@utils/price-calc';

const SystemOfferings = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<Modal_States>(undefined);

  const systemOfferings = getSystemOffering(props.plantType);
  const structureHeight = getStructureHeight(props.structure);

  const offeringStyle =
    props.plantType === 'Smart'
      ? 'green-blue-gradient p-0.5 rounded-[12px]'
      : 'border border-brand-blue-400 rounded-[10px]';

  const systemValues = props.proposalData.find(
    (val) => val.system_type === props.plantType
  );

  const { futureFormattedDate } = getProposalDates(props.date);

  const getModalChild = (modalOpen: Modal_States) => {
    switch (modalOpen) {
      case 'emi-modal':
        return <EmiModal loanOptions={systemValues?.data.loan_options} />;
      case 'economic-modal':
        return <EconomicValueModal />;
      case 'price-breakup-modal':
        return <PriceBreakup priceBreak={systemValues?.data as any} />;
      default:
        return <></>;
    }
  };

  const { discount, totalPriceBeforeDiscount } = getPriceBreakupValues({
    spp: systemValues?.data.spp as any,
    addOnPrice: systemValues?.data?.add_on_price as any,
    addOnSpp: systemValues?.data?.add_on_spp as string,
    systemPrice: systemValues?.data?.system_price as string,
    totalPrice: systemValues?.data
      .total_system_and_service_including_gst as string,
  });
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
            {discount ? (
              <div className="relative justify-center items-center mb-1">
                <p className="green-blue-gradient text-xl font-semibold text-transparent bg-clip-text max-w-max">
                  {totalPriceBeforeDiscount}
                </p>
                <div className="absolute inset-0 py-2">
                  <Image src={CrossArrow} alt="" />
                </div>
              </div>
            ) : (
              <></>
            )}

            <p className="green-blue-gradient text-4.5xl font-semibold text-transparent bg-clip-text ">
              ₹ {systemValues?.data.total_system_and_service_including_gst}
            </p>
            <p className="text-brand-grey-500 font-semibold">
              Total payable (incl. GST)
            </p>

            {parseInt(systemValues?.data.subsidy_value || '') ? (
              <div className="text-xl font-medium font-archivo text-brand-grey-600 py-3 px-1.5 bg-brand-blue-100 text-center my-4 w-full">
                Subsidy : ₹ {systemValues?.data.subsidy_value}
              </div>
            ) : (
              <></>
            )}

            {systemValues?.data?.loan_options.some((val) => val.data.length) ? (
              <p className="mt-3 text-center text-base tracking-wide text-brand-grey-600">
                EMI starting from as low as ₹{' '}
                {systemValues?.data?.loan_options[0].data[0].emi} per month.{' '}
                <button
                  className="inline-flex text-brand-blue-600"
                  onClick={() => setModalOpen('emi-modal')}
                >
                  Lean more
                </button>
              </p>
            ) : (
              <></>
            )}
          </div>

          <button
            className="text-brand-blue-600 text-base font-medium font-archivo text-center"
            onClick={() => setModalOpen('price-breakup-modal')}
          >
            View detailed price breakup
          </button>

          <div className="flex flex-col gap-y-2.5">
            <div className="flex gap-x-1.5 items-center">
              <IoMdCheckmark
                fill="#009429"
                className="font-bold w-6 h-6 p-0.5"
              />
              <p className="text-lg font-medium">{props.structure} structure</p>
            </div>
            <div className="inline-flex gap-x-1.5">
              <div className="w-6 h-6 p-0.5" />
              <div className={'rounded w-full bg-brand-green-100 py-1 px-4'}>
                <div className="text-base bg-transparent">
                  {structureHeight} meter height
                </div>
              </div>
            </div>
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
                : 'green-blue-gradient p-0.5 rounded-[10px] w-full';

            return (
              <div key={index} className="flex flex-col gap-y-2.5">
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
            onClick={() => setModalOpen('economic-modal')}
          >
            <div className="relative z-30 flex gap-y-5 justify-between items-center w-full">
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
              onClick={() => setModalOpen('lock-price-modal')}
              className="p-5 text-xl text-white font-medium leading-none bg-gradient-to-r from-sky-700 via-sky-500 to-sky-700 rounded-[41px] shadow-inner border border-white border-opacity-50"
            >
              Lock this price @ ₹
              {props.city === 'Varanasi' ? '11,000' : '25,000'}
            </button>
          ) : (
            <div className="button-animation my-3 w-full h-14">
              <input
                type="button"
                value="Lock this price @ ₹25,000"
                className="font-inter rounded-[41px] text-white font-semibold leading-none"
                onClick={() => setModalOpen('lock-price-modal')}
                style={{ fontSize: '20px' }}
              />
            </div>
          )}

          {systemValues?.data.loan_options.length ? (
            <p
              className="text-base leading-none text-brand-blue-600 text-center"
              onClick={() => setModalOpen('emi-modal')}
            >
              Explore financing options
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Dialog.Root
        open={modalOpen && modalOpen === 'lock-price-modal'}
        onOpenChange={() => setModalOpen(undefined)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="bg-brand-grey-400/90  fixed inset-0" />
          <Dialog.Content className="w-full h-full fixed top-0 bg-white overflow-scroll no-scrollbar px-4 py-6 z-20">
            <div>
              <div
                className="w-12 h-12 bg-neutral-50 rounded-full border border-zinc-300 border-opacity-90 flex justify-center items-center"
                onClick={() => setModalOpen(undefined)}
              >
                <GoArrowLeft className="w-8 h-8" />
              </div>
              <LockPrice city={props.city} />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Modal
        isOpen={modalOpen !== undefined && modalOpen !== 'lock-price-modal'}
        onChange={() => setModalOpen(undefined)}
      >
        {getModalChild(modalOpen)}
      </Modal>
    </>
  );
};

export default SystemOfferings;
