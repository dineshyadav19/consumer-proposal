'use client';
import React, { useState } from 'react';
import Testimonial1 from '@images/Testimonials/Testimonial-1.png';
import Testimonial2 from '@images/Testimonials/Testimonial-2.png';
import Testimonial3 from '@images/Testimonials/Testimonial-3.png';
import Testimonial4 from '@images/Testimonials/Testimonial-4.png';
import Testimonial5 from '@images/Testimonials/Testimonial-5.png';
import Testimonial6 from '@images/Testimonials/Testimonial-6.png';
import Image, { StaticImageData } from 'next/image';
import People from '@images/people-group.png';
import { IoMdPlay } from 'react-icons/io';
import Modal from '../../components/Modal';

const RunningLine = () => {
  return (
    <div
      className="font-medium leading-loose gap-x-1.5 items-center flex text-xl mr-4 min-w-max"
      id="scroll-text"
    >
      <span className="text-brand-grey-500 ">Trusted by</span>
      <span className="text-[#729528]">3000+ customers</span>
      <Image src={People} alt="" height={20} width={30} />
    </div>
  );
};

const VideoTestimonial = ({
  image,
  link,
}: {
  image: StaticImageData;
  link: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="min-w-[236px] h-[303px] relative">
        <Image src={image} alt={'Testimonial-'} className="w-full h-full" />
        <div className="absolute top-0 rounded-lg w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="h-[78px] w-[78px] rounded-full bg-indigo-50 shadow flex justify-center items-center">
            <div
              className="relative left-1"
              onClick={() => setIsModalOpen(true)}
            >
              <IoMdPlay fill="#1690DF" size={24} className="scale-150" />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onChange={setIsModalOpen}>
        <div className="w-full mt-24">
          <iframe
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-auto min-h-96 rounded-lg"
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-brand-green-100">
      <div className="overflow-hidden w-full flex pt-8">
        <RunningLine />
        <RunningLine />
        <RunningLine />
      </div>

      <div className="flex gap-x-4 overflow-scroll w-full no-scrollbar px-4 pt-8 pb-11">
        <VideoTestimonial
          image={Testimonial1}
          link="https://www.youtube.com/embed/3qmB7MYnZd0?si=3wXRV_PB47XDXKTO"
        />
        <Image
          src={Testimonial2}
          alt={'Testimonial-2'}
          width={236}
          height={303}
        />
        <VideoTestimonial
          image={Testimonial3}
          link="https://www.youtube.com/embed/IEJ00Qom2iQ?si=j3wSMxk85zunvw6c"
        />
        <VideoTestimonial
          image={Testimonial4}
          link="https://www.youtube.com/embed/B3vFJf90wx8?si=G3hsnIljRarCUzDC"
        />
        <Image
          src={Testimonial5}
          alt={'Testimonial-5'}
          width={236}
          height={303}
        />
        <VideoTestimonial
          image={Testimonial6}
          link="https://www.youtube.com/embed/jMT_UjNmQqM?si=9AUGtXlwhv3GhT4f"
        />
      </div>
    </div>
  );
};

export default Testimonials;
