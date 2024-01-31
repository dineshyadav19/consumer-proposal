import Image from 'next/image';
import React from 'react';

type Props = {
  image: any;
  heading: string;
  subHeading: string;
};

const Header = ({ heading, subHeading, image }: Props) => {
  return (
    <div className="my-3">
      <p className="font-archivo text-[13px] text-brand-grey-500 font-light">
        {subHeading}
      </p>
      <h4 className="mt-4 mb-3 text-3xl font-semibold font-archivo leading-[45px] max-w-[90%]">
        {heading}
      </h4>
      <div className="py-4">
        <Image src={image} alt="" />
      </div>
    </div>
  );
};

export default Header;
