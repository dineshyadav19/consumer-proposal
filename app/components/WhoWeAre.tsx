import React from 'react';

import CustomerFirst from '@images/icons/customer-success.svg';
import Reliable from '@images/icons/Reliable.svg';
import Affordable from '@images/icons/Affordable.svg';
import Efficient from '@images/icons/Efficient.svg';

const data = [
  {
    icon: <CustomerFirst />,
    heading: 'Customer First',
    text: 'Customer is at the core of our business. We strive to provide customer experience par excellence.',
  },
  {
    icon: <Reliable />,
    heading: 'Reliable',
    text: 'Thoughtful, intelligent and responsible design made simple and customized for your rooftop.',
  },
  {
    icon: <Affordable />,
    heading: 'Affordable',
    text: 'Optimal design assures an enhanced performance and cost saving over a period of time.',
  },
  {
    icon: <Efficient />,
    heading: 'Efficient',
    text: 'Robust solar solutions built on advanced technologies to ensure higher, consistent power generation.',
  },
];

const WhoWeAre = () => {
  return (
    <div>
      <h2 className="heading-gradient my-9 px-4 text-center">Who we are</h2>

      <div className="flex gap-x-6 overflow-scroll w-full no-scrollbar px-4">
        {data.map((val, index) => {
          return (
            <div
              key={index}
              className="min-w-48 rounded-[22px] green-blue-gradient p-0.5"
            >
              <div className="bg-white flex flex-col items-center gap-y-3 rounded-[20px] p-3 h-full">
                <div className="flex justify-center">{val.icon}</div>
                <h4 className="text-black text-lg font-medium">
                  {val.heading}
                </h4>
                <p className="text-brand-grey-600 text-base text-center">
                  {val.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhoWeAre;
