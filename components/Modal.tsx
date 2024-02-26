import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, children, onChange }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange} defaultOpen={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-brand-grey-400/90  fixed inset-0" />
        <Dialog.Content
          className="
          fixed 
          drop-shadow-md 
          border 
          border-zinc-300 
          border-opacity-90
          top-[50%] 
          left-[50%] 
          h-full 
          w-[95%] 
          max-h-[90%]
          max-w-[640px]
          translate-x-[-50%]
          translate-y-[-45%]
          rounded-[20px]
          px-4 
          pt-2 
          pb-6 
          bg-neutral-50
          focus:outline-none 
          z-50
          overflow-scroll
          no-scrollbar
        "
        >
          <div className="mt-10">{children}</div>

          <Dialog.Close asChild>
            <button
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
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
