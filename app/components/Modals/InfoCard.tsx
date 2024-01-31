import React from 'react';

type Props = {
  heading: string;
  subtext: string;
};

const InfoCard = ({ heading, subtext }: Props) => {
  return (
    <div className="px-3 py-5 bg-brand-green-100 rounded-[10px]">
      <span className="text-sm font-medium mb-3.5">{heading}</span>
      <p className="text-brand-grey-600 text-sm">{subtext}</p>
    </div>
  );
};

export default InfoCard;
