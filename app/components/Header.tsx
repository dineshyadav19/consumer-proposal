'use client';
import React from 'react';
import CompanyLogo from '@images/company-logo.svg';
import NavToggle from '@icons/nav-toggle.svg';
const Header = () => {
  return (
    <div className="w-full h-14 px-6 bg-white shadow-md justify-between items-center inline-flex">
      <div className="justify-start items-center gap-1.5 flex">
        <CompanyLogo />
      </div>
      <div className="w-10 h-10 px-[6.84px] pt-[6.67px] pb-[7.01px] justify-center items-center flex">
        <NavToggle />
      </div>
    </div>
  );
};

export default Header;
