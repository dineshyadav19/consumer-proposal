import React from 'react';
import Header from './Header';
import ListCard from './ListCard';
import InfoCard from './InfoCard';
import MCB from '@images/modal-images/mcb.png';
import CustomerSafety from '@icons/modal-icons/cusotmer safety.svg';
import SystemSafety from '@icons/modal-icons/System Safety.svg';
import PersonalSafety from '@icons/modal-icons/personal safety.svg';

const ElectricalSafety = () => {
  return (
    <div>
      <Header
        image={MCB}
        heading="Electrical Safety"
        subHeading="Learn more about"
      />

      <div className="flex flex-col gap-y-2">
        <div className="mb-5">
          <ListCard
            icon={<CustomerSafety />}
            heading="Customer Safety"
            description="We take utmost care of customer safety during installation and post-handover."
          />
          <InfoCard
            heading="Example"
            subtext="Miniature Circuit Breaker for electrical safety, Harness and polymer rope with a rope grab arrester for the installed point anchor to use post installation."
          />
        </div>

        <div className="mb-5">
          <ListCard
            icon={<SystemSafety />}
            heading="System Safety"
            description="Our system structure and components tested and certified as per applicable standards."
          />
          <InfoCard
            heading="Did you know?"
            subtext="Our Lightning Arrestor and Earthing are compliant with IEC 62305-4/IS 3043-1986; with 3-6 earth pits. Our Wiring Standards are as per IEC60364 to minimize losses"
          />
        </div>

        <div className="mb-5">
          <ListCard
            icon={<PersonalSafety />}
            heading="Personnel Safety"
            description="We use safety equipment to protect working personnel during construction and maintenance."
          />
          <InfoCard
            heading="Example"
            subtext="Roof anchor points to prevent a person’s fall from areas with low/no parapet wall."
          />
        </div>
      </div>
    </div>
  );
};

export default ElectricalSafety;
