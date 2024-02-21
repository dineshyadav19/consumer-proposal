import React from 'react';
import CompanyLogo from '@images/fenice-logo.png';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

const Footer = () => {
  const generatedOn = new Date().toDateString();
  const validTill = new Date(
    Date.now() + 15 * 24 * 60 * 60 * 1000
  ).toDateString();
  return (
    <div className="p-4 bg-black text-brand-grey flex flex-col gap-y-7">
      <Image src={CompanyLogo} alt="Company Logo" width={110} height={44} />
      <div className="gap-y-2 flex flex-col">
        <a
          className="underline font-archivo text-brand-blue-100"
          href="https://feniceenergy.com/"
          target="_blank"
        >
          feniceenergy.com
        </a>
        <p className="leading-tight tracking-wide text-sm">
          SILRES Energy Solutions Private Limited 30/5, First Floor, 1st Cross
          Street, RA Puram, Chennai, Tamil Nadu-600 028.
        </p>
        <span className="leading-tight tracking-wide font-semibold text-sm">
          Contact us: 1800 889 8457
        </span>
      </div>

      <div className="gap-y-2 flex flex-col ">
        <span className="text-sm font-medium text-white">Our presence</span>
        <div className="flex gap-x-3">
          <FaFacebook className="w-7 h-7" fill="#EAEAEA" />
          <FaLinkedin className="w-7 h-7" fill="#EAEAEA" />
          <FaXTwitter className="w-7 h-7" fill="#EAEAEA" />
          <FaInstagram className="w-7 h-7" fill="#EAEAEA" />
          <FaYoutube className="w-7 h-7" fill="#EAEAEA" />
        </div>
      </div>

      <div className="flex flex-col gap-y-3 text-sm font-medium text-white">
        <span>Learn more about solar. Read our blog</span>
        <a
          className="underline"
          href="https://feniceenergy.com/rooftop-solar/solar-guide/"
          target="_blank"
        >
          Download Solar Guide
        </a>
      </div>

      <span className="block text-brand-grey-400 text-sm font-medium">
        Terms & conditions
      </span>
      <div className="flex justify-between text-brand-grey-400 text-sm font-medium">
        <div className="flex flex-col">
          <span>Generated On</span>
          <span className="text-base">{generatedOn}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-right">Valid till</span>
          <span className="text-base">{validTill}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
