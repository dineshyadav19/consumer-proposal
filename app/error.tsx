'use client';

import Image from 'next/image';
import NotFoundImg from '@images/not-found.png';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <Image
        src={NotFoundImg}
        alt="page-not-found"
        className="object-contain mt-6"
        width={213}
        height={261}
      />
      <div className="max-w-56">
        <h2 className="text-center text-3.5xl font-bold font-archivo">Oops!</h2>
        <p className="font-archivo text-base text-center mt-4">
          Something went wrong !
        </p>
      </div>
    </div>
  );
}
