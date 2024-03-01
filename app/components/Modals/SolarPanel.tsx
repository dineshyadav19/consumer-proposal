import React from 'react';
import Header from './Header';
import SolarPanelImg from '@images/modal-images/solar-panel.png';
import ListCard from './ListCard';
import Panel from '@icons/modal-icons/A geade.svg';
import Certified from '@icons/modal-icons/certified.svg';
import Warranty from '@icons/modal-icons/warranty.svg';
import Technology from '@icons/modal-icons/technology.svg';
import InfoCard from './InfoCard';

const SolarPanelComponent = () => {
  return (
    <>
      <Header
        image={SolarPanelImg}
        heading="Certified solar panels with 25 year warranty"
        subHeading="Learn more about"
      />

      <div className="flex flex-col gap-y-2">
        <ListCard
          icon={<Panel />}
          heading="A Grade panels"
          description="Modules can be of different grades based on the number of microcracks they have. While we cannot see the cracks with naked eye, they are clearly visible during the Electroluminescence Testing and giving grade rating such as A, B (rejects of A) and C (rejects of C). We only ever use 100% certified A-grade modules to ensure superior module performance over 25+ years."
        />

        <div className="mb-5">
          <ListCard
            icon={<Certified />}
            heading="Certified"
            description="100% of our panels are certified with IEC 61215 – 1 & 2 / IS 14286 – 1 & 2, IEC 61730 – 1 & 2 / IS 61730 – 1 & 2, IEC TS 62804 – 1, IEC 61701 / IS 61701: Salt mist corrosion testing and IEC 62716: Ammonia corrosion testing."
          />
          <InfoCard
            heading="Tip"
            subtext="When selecting components for your solar system, it’s important not to prioritize small cost savings over component quality. Carefully choose reputable suppliers when it comes to system components."
          />
        </div>

        <ListCard
          icon={<Warranty />}
          heading="Warranty"
          description="Our panels come with 25 years of linear output warranty and 10 years of product warranty. We help you in the warranty claim process."
        />
        <ListCard
          icon={<Technology />}
          heading="Technology"
          description="We use Mono-PERC half cut cell panels. These panels are efficient for the space they consume and generate better in case of shading."
        />
      </div>
    </>
  );
};

export default SolarPanelComponent;
