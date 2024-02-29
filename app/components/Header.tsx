'use client';
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { GoChevronRight } from 'react-icons/go';
import * as Dialog from '@radix-ui/react-dialog';
import CompanyLogo from '@images/company-logo.svg';
import NavToggle from '@icons/nav-toggle.svg';

const navigationMenu = [
  {
    navText: 'Design',
    link: 'design',
  },
  {
    navText: 'System components',
    link: 'system-component',
  },
  {
    navText: 'Installation',
    link: 'installation',
  },
  {
    navText: 'Maintenance & AMC',
    link: 'maintenance-amc',
  },
  {
    navText: 'Fenice Care app',
    link: 'fenice-care-app',
  },
  {
    navText: 'Choose a system',
    link: 'choose-system',
  },
  {
    navText: 'What next',
    link: 'what-next',
  },
  // {
  //   navText: 'About us',
  //   link: 'about-us',
  // },
  {
    navText: 'Contact us',
    link: 'contact-us',
  },
];

const Header = () => {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const getAnchorTag = document.querySelector(`#${id}`);
    getAnchorTag?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="w-full h-14 px-6 bg-white shadow-md justify-between items-center inline-flex">
        <div className="justify-start items-center gap-1.5 flex">
          <CompanyLogo />
        </div>
        <div
          className="w-10 h-10 px-[6.84px] pt-[6.67px] pb-[7.01px] justify-center items-center flex"
          onClick={() => setIsNavModalOpen(true)}
        >
          <NavToggle />
        </div>
      </div>
      <Dialog.Root open={isNavModalOpen} onOpenChange={setIsNavModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-brand-grey-400/90  fixed inset-0" />
          <Dialog.Content className="w-full h-[93vh] fixed top-0 bg-white overflow-scroll no-scrollbar z-20">
            <div>
              <div className="w-full h-14 px-6 bg-white shadow-md justify-between items-center inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <CompanyLogo />
                </div>
                <div className="w-10 h-10 px-[6.84px] pt-[6.67px] pb-[7.01px] justify-center items-center flex">
                  <RxCross1
                    className="font-bold w-6 h-6 p-0.5 bg-white text-[#1C1B1F]"
                    onClick={() => setIsNavModalOpen(false)}
                  />
                </div>
              </div>

              <ul className="flex flex-col gap-y-6 p-6">
                {navigationMenu.map((nav) => {
                  return (
                    <div
                      className="flex justify-between border-b border-zinc-300 pb-3"
                      onClick={() => {
                        setIsNavModalOpen(false);
                        scrollToSection(nav.link);
                      }}
                      key={nav.link}
                    >
                      <li className="text-center text-neutral-600 text-xl tracking-wide list-none">
                        {nav.navText}
                      </li>
                      <GoChevronRight className="font-bold w-6 h-6 p-0.5 bg-white text-brand-blue-600" />
                    </div>
                  );
                })}
              </ul>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Header;
