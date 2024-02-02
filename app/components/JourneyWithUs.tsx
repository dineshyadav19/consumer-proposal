import React from 'react';

type Props = {};

const JourneyWithUs = (props: Props) => {
  return (
    <div className="my-16 relative">
      <div className="relative">
        <div className="w-full h-[22px] bg-slate-800 flex items-center">
          <div className="w-full h-0 border border-dashed border-white"></div>
        </div>
        <div className="h-[200px] w-full bg-white"></div>
      </div>
      <div className="flex overflow-scroll w-full no-scrollbar absolute -top-2.5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="min-w-full px-16 flex flex-col gap-y-3">
            <div className="flex justify-center items-center">
              <div className="w-[45px] h-[45px] bg-gradient-to-b from-teal-200 to-teal-400 rounded-full" />
            </div>
            <div className="border border-brand-blue bg-red-500 h-[150px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyWithUs;
