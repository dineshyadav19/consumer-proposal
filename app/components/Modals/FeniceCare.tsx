import React from 'react';
import Header from './Header';
import FeniceCareImg from '@images/modal-images/fenice-care.png';
import CustomerSupport from '@icons/modal-icons/customer support.svg';
import Monitoring from '@icons/modal-icons/monitoring.svg';
import Cleaning from '@icons/modal-icons/cleaning.svg';
import ListCard from './ListCard';

const data = [
  {
    icon: <Monitoring />,
    text: 'Easy monitoring',
    subtext:
      'Check the real-time performance, historical power output, and environmental benefits of your PV system from your mobile device. You can track your system’s output at an hourly, daily, weekly, monthly, yearly or even lifetime level.',
  },
  {
    icon: <CustomerSupport />,
    text: 'Quick support',
    subtext:
      'Raise a query anytime, anywhere. Experts are ready to support you just a click away.',
  },
  {
    icon: <Cleaning />,
    text: 'AMC monitoring',
    subtext:
      'Check your cleaning and maintenance plan to view completed and due visits.',
  },
];

const FeniceCare = () => {
  return (
    <>
      <Header
        image={FeniceCareImg}
        heading="Fenice Care App"
        subHeading="Learn more about"
      />

      <div className="flex flex-col gap-y-2">
        {data.map((val) => {
          return (
            <ListCard
              icon={val.icon}
              heading={val.text}
              description={val.subtext}
              key={val.text}
            />
          );
        })}
      </div>
    </>
  );
};

export default FeniceCare;
