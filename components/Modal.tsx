'use client';
import React, { Fragment } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Dialog, Transition } from '@headlessui/react';

type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, children, onChange }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => onChange(false)}>
        <div className="fixed inset-0 bg-black/30" />
        <Transition.Child
          as={Fragment}
          // enter="ease-out duration-300"
          // enterFrom="opacity-0 scale-95"
          // enterTo="opacity-100 scale-100"
          // leave="ease-in duration-200"
          // leaveFrom="opacity-100 scale-100"
          // leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="dialog-content no-scrollbar">
            <div className="mt-10">{children}</div>

            <button
              onClick={() => onChange(false)}
              className="
                text-zinc-900
                hover:text-white
                absolute
                top-[12px]
                right-[16px]
                h-[25px]
                w-[25px]
                appearance-none
                inline-flex
                items-center
                justify-center
                rounded-full
                focus:outline-none
                bg-zinc-300
              "
            >
              <IoMdClose />
            </button>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
