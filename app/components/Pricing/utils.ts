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

export { getStructureHeight, getSystemOffering };
