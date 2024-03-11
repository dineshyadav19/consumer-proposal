import { PROPOSAL_API_RESPONSE } from './types';

const API_URL = process.env.NEXT_BACKEND_DEV_ENDPOINT;

export async function getProposalData({ dealId }: { dealId: string }) {
  const res = await fetch(
    `${API_URL}/green-partners/web-proposal/consumer/?dealId=${dealId}`,
    {
      headers: {
        'Content-type': 'application/json',
      },
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data: PROPOSAL_API_RESPONSE = await res.json();
  return data.data;
}
