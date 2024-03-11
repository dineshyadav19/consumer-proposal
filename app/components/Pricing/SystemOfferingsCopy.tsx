// If Market = Free,
//  For Basic, Workmanship = 1, Inverter = 5
//  For Smart, Workmanship = 5, Inverter = 10
//  For Premium, Workmanship = 7, Inverter = 20

// If Market = MNRE or Tender,
//  For Basic, Workmanship = 5, Inverter = 5
//  For Smart, Workmanship = 5, Inverter = 10
//  For Premium, Workmanship = 7, Inverter = 20

import { Market } from './utils';

const smartSystemoffering = (market: Market) => [
  {
    icon: 'check',
    text: 'Micro Inverter',
    subText: '10 years warranty',
    backgroud: 'plain',
  },
  {
    icon: 'check',
    text: 'Workmanship warranty',
    subText: `${market === 'Free Market' ? 1 : 5} years`,
    backgroud: 'plain',
  },
  {
    icon: 'check',
    text: 'Cleaning & Maintenance visits ',
    subText: (
      <p className="bg-white py-1 px-4 rounded-[8px]">
        Quarterly health checkup & cleaning visits for 5 years
      </p>
    ),
    backgroud: 'gradient',
  },
  {
    icon: 'cross',
    text: 'Generation Guarantee',
    subText: (
      <p className="bg-white py-1 px-4 rounded-[8px] text-sm text-brand-grey-600 w-full">
        Upgrade to PREMIUM to get 1 year of generation guarantee.
      </p>
    ),
    backgroud: 'gradient',
  },
];

const basicSystemoffering = (market: Market) => [
  {
    icon: 'check',
    text: 'String Inverter',
    subText: '5 years warranty',
    backgroud: 'plain',
  },
  {
    icon: 'check',
    text: 'Workmanship warranty',
    subText: `5 years`,
    backgroud: 'plain',
  },
  {
    icon: 'cross',
    text: 'Cleaning & Maintenance visits ',
    subText: (
      <p className="bg-white py-1 px-4 rounded-[8px] text-sm text-brand-grey-600 w-full">
        Pay just ₹5000 more and upgrade to SMART system, get 5 years of cleaning
        & health checkup visits.
      </p>
    ),
    backgroud: 'gradient',
  },
  {
    icon: 'cross',
    text: 'Generation Guarantee',
    subText: (
      <p className="bg-white py-1 px-4 rounded-[8px] text-sm text-brand-grey-600 w-full">
        Upgrade to PREMIUM to get 1 year of generation guarantee.
      </p>
    ),
    backgroud: 'gradient',
  },
];

const premiumSystemoffering = (market: Market) => [
  {
    icon: 'check',
    text: 'Micro Inverter',
    subText: '20 years warranty',
    backgroud: 'plain',
  },
  {
    icon: 'check',
    text: 'Workmanship warranty',
    subText: '7 years',
    backgroud: 'plain',
  },
  {
    icon: 'check',
    text: 'Cleaning & Maintenance visits ',
    subText: 'Quarterly health checkup & cleaning visits for 7 years',
    backgroud: 'plain',
  },
  {
    icon: 'check',
    text: 'Generation Guarantee',
    subText: '1 year no extra cost visit to ensure generation target is met',
    backgroud: 'plain',
  },
];

export { basicSystemoffering, premiumSystemoffering, smartSystemoffering };
