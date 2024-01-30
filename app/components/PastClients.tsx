import React from 'react';
import Client1 from '@images/clients/Rectangle 684.png';
import Client2 from '@images/clients/Rectangle 685.png';
import Client3 from '@images/clients/Rectangle 686.png';
import Client4 from '@images/clients/Rectangle 688.png';
import Client5 from '@images/clients/Rectangle 689.png';
import Image from 'next/image';

type Props = {};

const PastClients = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="heading-gradient mb-3 mt-9 px-4 text-center">
          Our Past Clients
        </h2>
      </div>

      <div className="flex gap-x-2 overflow-scroll w-full no-scrollbar px-4">
        {[Client1, Client2, Client3, Client4, Client5].map((val, index) => {
          return <Image src={val} alt="" key={index} />;
        })}
      </div>
    </div>
  );
};

export default PastClients;
