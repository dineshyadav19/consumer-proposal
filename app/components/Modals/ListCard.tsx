import React, { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  heading: string;
  description: string;
};

const ListCard = ({ icon, heading, description }: Props) => {
  return (
    <div className="px-2 py-[22px] flex flex-col gap-y-4">
      <div>{icon}</div>
      <h5 className="text-xl font-medium leading-none">{heading}</h5>
      <p className="text-sm font-normal text-brand-grey-600">{description}</p>
    </div>
  );
};

export default ListCard;
