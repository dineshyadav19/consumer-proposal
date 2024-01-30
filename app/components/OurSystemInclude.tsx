import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const offerings = [
  {
    text: 'System Warranty - 5 Years',
  },
  {
    text: '3D rooftop design report',
  },
  {
    text: 'Certified Structure',
  },
  {
    text: 'Professional and Trained Installers',
  },
  {
    text: 'Civil construction work',
  },
  {
    text: 'Premium wiring & electrical components',
  },
  {
    text: 'Monocrystalline Panels',
  },
];

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-x-1.5 items-center">
      <IoMdCheckmark fill="#009429" className="font-bold w-6 h-6 p-0.5" />
      <p className="text-base">{text}</p>
    </div>
  );
};

const OurSystemInclude = () => {
  return (
    <div className="p-4">
      <h2 className="heading-gradient mb-9 px-4 text-center">
        All our systems include
      </h2>
      <div className="relative rounded-[10px] border border-[#DDD]">
        <div className="w-full h-16 flex justify-center items-center absolute -top-8">
          <div className="w-fit border-none rounded-lg p-3 flex items-center bg-white">
            <p className="text-base font-medium">All our systems include</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 py-9 px-4">
          {offerings.map((val, index) => {
            return <ListItem key={index} text={val.text} />;
          })}

          <div className="flex gap-x-1.5 items-center">
            <div className="w-6 h-6 p-0.5" />
            <p className="text-base py-1 px-4 border bg-brand-green-100 rounded flex-[0.8]">
              10 year product warranty
            </p>
          </div>

          <div className="flex gap-x-1.5 items-center">
            <div className="w-6 h-6 p-0.5" />
            <p className="text-base py-1 px-4 border bg-brand-green-100 rounded">
              25 year linear output warranty
            </p>
          </div>

          <ListItem text="Monitoring hardware and software" />
          <ListItem text="Net metering" />
        </div>
      </div>
    </div>
  );
};

export default OurSystemInclude;
