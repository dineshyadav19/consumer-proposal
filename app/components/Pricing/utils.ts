import { PROPOSAL_OUTPUT, STRUCTURE } from '../../actions/types';
import {
  basicSystemoffering,
  premiumSystemoffering,
  smartSystemoffering,
} from './SystemOfferingsCopy';

type Plant_Type = 'Basic' | 'Smart' | 'Premium' | 'Standard';

export type Modal_States =
  | 'emi-modal'
  | 'price-breakup-modal'
  | 'economic-modal'
  | 'lock-price-modal'
  | undefined;

export type Props = {
  plantType: Plant_Type;
  proposalData: Array<PROPOSAL_OUTPUT>;
  structure: STRUCTURE;
  city: string;
  date: Date;
};

const getSystemOffering = (type: Plant_Type) => {
  switch (type) {
    case 'Basic':
    case 'Standard':
      return basicSystemoffering;
    case 'Smart':
      return smartSystemoffering;
    case 'Premium':
      return premiumSystemoffering;
  }
};

const getStructureHeight = (structure: STRUCTURE) => {
  switch (structure) {
    case 'High Rise':
    case 'High Rise-1P':
      return '2.60 - 3.0';
    case 'Low Rise':
      return '0.42 - 1.12';
    case 'Mid Rise':
      return '1.12 - 1.68';
    case 'Flush Mount':
      return '0.1';
  }
};

const getSystemTypeValue = (systemType: Plant_Type) => {
  switch (systemType) {
    case 'Basic':
      return 0;
    case 'Smart':
      return 1;
    case 'Premium':
      return 2;
    default:
      return 3; // For any other system_type not in the order
  }
};

const sortProposalOutputArrayBySystemType = (
  output: Array<PROPOSAL_OUTPUT>
) => {
  return [...output].sort((a, b) => {
    const systemTypeA = getSystemTypeValue(a.system_type);
    const systemTypeB = getSystemTypeValue(b.system_type);
    return systemTypeA - systemTypeB;
  });
};

export {
  getStructureHeight,
  getSystemOffering,
  sortProposalOutputArrayBySystemType,
};
