import Image from 'next/image';
import React from 'react';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import QRCode from '@images/modal-images/payments-qr-code.png';

const LockPrice = () => {
  return (
    <>
      <h5 className="heading-gradient text-left my-5">Lock the price</h5>
      <div className="mb-7">
        <div className="flex h-full">
          <div className="h-full pt-1">
            <MdRadioButtonChecked className="w-4 h-4" fill="#009429" />
            <div className="flex items-center justify-center h-full">
              <div className="w-[1px] h-[80px] bg-brand-grey-400"></div>
            </div>
          </div>

          <div className="ml-4 font-archivo">
            <h2 className="text-base">Pay ₹25,000 as booking advance.</h2>
            <p className="text-sm text-gray-600 mt-1.5">
              Don’t worry, this amount will be adjusted in the final payment{' '}
            </p>
          </div>
        </div>
        <div className="flex h-full">
          <div className="h-full pt-1">
            <MdRadioButtonUnchecked className="w-4 h-4" fill="#009429" />
            <div className="flex items-center justify-center h-full">
              <div className="w-[1px] h-[80px] bg-brand-grey-400"></div>
            </div>
          </div>

          <div className="ml-4 font-archivo">
            <h2 className="text-base">
              Share payment proof with Fenice partner{' '}
            </h2>
            <p className="text-sm text-gray-600 mt-1.5">
              Share screenshot of the payment and other details with your
              assigned fenice partner
            </p>
          </div>
        </div>
        <div className="flex h-full">
          <div className="h-full pt-1">
            <MdRadioButtonUnchecked className="w-4 h-4" fill="#009429" />
            <div className="flex items-center justify-center h-full"></div>
          </div>

          <div className="ml-4 font-archivo">
            <h2 className=" text-base">
              Confirm the design and sign-off on the order.
            </h2>
            <p className="text-sm text-gray-600 mt-1.5">
              Connect with your partner details and proceed with the order by
              signing off on the design and order details.
            </p>
          </div>
        </div>
      </div>
      <h5 className="heading-gradient text-left my-5">Payment options</h5>
      <div className="rounded-[10px] border border-zinc-300 border-opacity-90 flex gap-y-4 flex-col py-3 px-4 my-6">
        <p className="text-xl font-archivo text-center">UPI</p>
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <p className="text-brand-grey-600 text-base font-archivo">
            silrescom@hdfcbank
          </p>
          <Image
            src={QRCode}
            alt=""
            width={145}
            height={147}
            className="mix-blend-hard-light"
          />
        </div>
        <a
          download={'Fenice-Payments-QR'}
          href="images/modal-images/payments-qr-code.png"
          className="block text-neutral-50 text-base font-semibold p-5 bg-brand-blue rounded-full leading-none text-center"
        >
          Download QR code & pay
        </a>
      </div>
      <div className="rounded-[10px] border border-zinc-300 border-opacity-90 flex gap-y-4 flex-col py-3 px-4">
        <p className="text-xl font-archivo">Net Banking</p>
        <div className="font-archivo text-base text-brand-grey-600 flex flex-col gap-y-2">
          <p>Bank Name: HDFC Bank, R A Puram Chennai,Tamilnadu–600026</p>
          <p>Bank Account Holder: SILRES Energy Solutions Pvt Ltd</p>
          <p>
            Bank Account Number: <br />
            50200063968810
          </p>
          <p>IFSC Code: HDFC0000141</p>
        </div>
      </div>
      <h5 className="heading-gradient text-left my-6">Cancellation policy</h5>

      <ul className="px-6 flex list-disc flex-col gap-y-3 font-archivo text-brand-grey-600 text-base">
        <li>
          You may cancel the Order within 7 (seven) days from the date of
          remittance of the booking advance amount.
        </li>
        <li>
          No Refund after the material is dispatched for the customer’s site.
        </li>
        <li>
          The price mentioned is valid for 7 days from the date of this
          proposal.
        </li>
      </ul>
    </>
  );
};

export default LockPrice;
