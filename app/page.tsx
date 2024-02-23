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
import Pricing from '@components/Pricing';
import JourneyWithUs from '@components/JourneyWithUs';
import { getProposalData } from './actions/action';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const data = await getProposalData({ dealId: searchParams?.dealId });
  return (
    <main className="mt-5">
      <Intro
        {...{
          customerName: data.contact_data.customer_name,
          plantType: data.design_data.product_line,
          systemSize: data.design_data.dc_capacity,
        }}
      />

      <Testimonials />

      <ViewIn3D
        {...{
          averageBill: data.design_data.avg_monthly_bill,
          capacity: data.design_data.dc_capacity,
          rooftopArea: data.design_data.roof_top_area,
          solarLabsImage: data.design_data.solarlabs_screenshot,
          solarLabsLink: data.design_data.solarlabs_link,
          structure: data.design_data.preferred_mms,
          noOfpanels: data.proposal_data.proposal_output[0].no_of_modules,
        }}
      />

      <SystemConfig
        {...{
          capacity: `${data.design_data.dc_capacity} kWp`,
          structure: data.design_data.preferred_mms,
          noOfPanels: data.proposal_data.proposal_output[0].no_of_modules,
          phase: data.design_data.electricity_phase,
        }}
      />

      <BenefitsImpact
        {...{
          co2Offset: data.design_data.coal_burn_avoided,
          numberOfTreesPlanted: data.design_data.no_of_trees_planted,
          monthlyGeneration: data.design_data.estimated_monthly_generation,
          yearlyGeneration: data.design_data.estimated_yearly_generation,
          avgMonthlySaving: data.design_data.avg_monthly_savings,
          avgYearlySaving: data.design_data.yearly_savings,
        }}
      />

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

      <Pricing proposalOutput={data.proposal_data.proposal_output} />

      <WhoWeAre />

      <>
        <h2 className="heading-gradient my-8 px-4">India-wide presence</h2>
        <Image src={MapImage} alt="" />
      </>

      <JourneyWithUs />

      <PastClients />

      <ConnectWithUs
        {...{
          gpName: data.deal_data.gp_name,
          gpContact: data.deal_data.gp_mobile,
          gpAddress: '',
        }}
      />
    </main>
  );
}
