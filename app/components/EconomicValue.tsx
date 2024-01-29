import Image from 'next/image';
import React from 'react';
import Investment from '@images/good-investment-bg.png';

type Props = {};

const EconomicValue = (props: Props) => {
  return (
    <div className="bg-brand-green-100 font-archivo py-6 px-4 relative w-full h-[220px] mb-8">
      <div className="relative z-30 flex flex-col gap-y-5">
        <span className="uppercase font-light text-sm">ECONOMIC VALUE</span>
        <h3 className="text-xl font-medium max-w-[60%]">
          Wondering if solar is a good investment?
        </h3>

        <button
          className="rounded-full py-3 px-5 text-sm font-medium font-inter w-fit text-white mb-6"
          style={{
            background:
              'linear-gradient(103deg, #5FEE86 -15.41%, #23853E 109.24%)',
          }}
        >
          Read More
        </button>
      </div>
      <div className="absolute right-0 bottom-0">
        <Image src={Investment} alt="" width={194} height={194} />
      </div>
    </div>
  );
};

export default EconomicValue;
