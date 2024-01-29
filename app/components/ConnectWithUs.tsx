import React from 'react';
import { MdOutlinePhone } from 'react-icons/md';
type Props = {};

const ConnectWithUs = (props: Props) => {
  return (
    <div className="p-4 mb-12">
      <h2 className="heading-gradient">Connect with us</h2>
      <p className="mt-4 mb-10 text-base font-archivo text-center">
        Your authorized Fenice Energy partner details
      </p>
      <div className="relative rounded-[10px] border border-zinc-300 border-opacity-90 h-[172px]">
        <div className="w-full h-16 flex justify-center items-center absolute -top-8">
          <div className="bg-zinc-300 rounded-full w-16 h-full"></div>
        </div>
        <div className="w-full h-16 flex justify-center items-center absolute -bottom-8">
          <div className="w-fit border border-brand-blue rounded-lg p-3 flex items-center bg-white gap-x-1">
            <MdOutlinePhone className="bg-brand-blue text-white rounded-full w-8 h-8 p-1" />
            <p className="text-base font-medium">
              <span className="font-normal text-brand-grey-500">+91</span>{' '}
              9182837464
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
