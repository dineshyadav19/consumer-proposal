import SolarComponents from '@components/SolarComponents';
import Intro from '@components/Intro';
import Maintenance from '@components/Maintenance';
import TrackPlant from '@components/TrackPlant';
import BenefitsImpact from '@components/BenefitsImpact';
import EconomicValue from '@components/EconomicValue';
import ConnectWithUs from '@components/ConnectWithUs';
import SystemConfig from '@components/SystemConfig';
import PastClients from '@components/PastClients';
import WhoWeAre from '@components/WhoWeAre';
import OurSystemInclude from '@components/OurSystemInclude';
import ViewIn3D from '@components/ViewIn3D';
import Testimonials from '@components/Testimonials';
import Image from 'next/image';
import MapImage from '@images/map-site-pins.png';

export default function Home() {
  return (
    <main className="mt-5">
      <Intro />
      <Testimonials />
      <ViewIn3D />
      <SystemConfig />
      <BenefitsImpact />
      <EconomicValue />
      <SolarComponents />

      <div className="px-4 py-6 bg-brand-blue-100 border justify-start items-center">
        <div className="flex-col justify-start items-center gap-4 inline-flex text-brand-grey-600 font-archivo">
          <div className="text-xl font-medium font-archivo">
            Our Quality Promise to you
          </div>
          <div className="text-base text-center">
            If you find any other system better than us, that will generate more
            solar energy for the given system capacity, We will give you 10%
            rebate on your system!
          </div>
        </div>
      </div>

      <Maintenance />
      <TrackPlant />
      <OurSystemInclude />
      <WhoWeAre />
      <h2 className="heading-gradient my-8 px-4">India-wide presence</h2>
      <Image src={MapImage} alt="" />
      <PastClients />
      <ConnectWithUs />
    </main>
  );
}
