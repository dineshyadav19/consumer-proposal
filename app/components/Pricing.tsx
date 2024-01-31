import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
type Props = {};

const Pricing = () => {
  return (
    <div className="green-blue-gradient p-0.5 rounded-[12px]">
      <div className="px-4 py-6 rounded-[10px] bg-white flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-5 items-center">
          <div className="text-brand-blue-500 text-sm font-medium tracking-wide py-2 px-4 border border-brand-blue rounded-full text-center w-fit">
            ₹2,500 discount
          </div>

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
            Total payable (incl. GST). GST
          </p>

          <p className="mt-3 text-center text-base tracking-wide text-brand-grey-600">
            EMI starting from as low as ₹1483.00 per month. Lean more
          </p>
        </div>

        <div className="text-brand-blue-600 text-base font-medium font-archivo text-center">
          View detailed price breakup
        </div>

        <div className="flex flex-col gap-y-2.5">
          <div className="flex gap-x-1.5 items-center">
            <IoMdCheckmark fill="#009429" className="font-bold w-6 h-6 p-0.5" />
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
            <IoMdCheckmark fill="#009429" className="font-bold w-6 h-6 p-0.5" />
            <p className="text-lg font-medium">{'Micro Inverter'}</p>
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
            <IoMdCheckmark fill="#009429" className="font-bold w-6 h-6 p-0.5" />
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
            <IoMdCheckmark fill="#009429" className="font-bold w-6 h-6 p-0.5" />
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
            <IoMdCheckmark fill="#009429" className="font-bold w-6 h-6 p-0.5" />
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
      </div>
    </div>
  );
};

export default Pricing;
