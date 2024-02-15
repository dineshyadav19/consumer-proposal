const PriceBreakup = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <h4 className="text-3xl font-semibold font-archivo text-center">
        Price Breakup
      </h4>
      <div>
        <span className="text-center block">System price</span>
        <p className="text-center mb-3">
          ₹ 2,34,147{' '}
          <span className="text-sm text-brand-grey-600">(incl. GST)</span>
        </p>
        <div className="text-sm text-brand-grey-500 flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <p>System price(excl. GST)</p>
            <p>₹2,06,220</p>
          </div>
          <div className="flex justify-between items-center">
            <p>System add-on price</p>
            <p>₹2,06,220</p>
          </div>
          <div className="flex justify-between items-center text-brand-green-400">
            <p>Discount</p>
            <p>₹2,06,220</p>
          </div>
          <div className="flex justify-between items-center">
            <p>GST @ 13.8%</p>
            <p>₹2,06,220</p>
          </div>
        </div>
      </div>
      <div>
        <span className="text-center block">Service & addon-ons</span>
        <p className="text-center mb-3">
          ₹ 2,34,147{' '}
          <span className="text-sm text-brand-grey-600">(incl. GST)</span>
        </p>
        <div className="text-sm text-brand-grey-500 flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <p>Name change charges</p>
            <p>₹2,06,220</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Load enhancement charges</p>
            <p>₹2,06,220</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Net metering charges</p>
            <p>₹2,06,220</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total Service add-ons charges (excl. GST)</p>
            <p>₹2,06,220</p>
          </div>
          <div className="flex justify-between items-center">
            <p>GST @ 18%</p>
            <p>₹2,06,220</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xl font-medium text-center">
          Total payable (incl. GST)
        </p>
        <p className="text-2xl font-medium mt-2 text-center">₹ 2,55,269</p>
      </div>

      <div className="text-xl font-medium font-archivo text-brand-grey-600 py-3 px-1.5 bg-brand-blue-100 text-center">
        Subsidy : ₹ 12,000
      </div>

      <div className="text-sm text-brand-grey-500">
        <span className="font-medium">Pricing Exclusions</span>
        <ul>
          <li>• Cost of SIM/internet for GSM access</li>
          <li>• Cost of additional cables (AC/DC/Earthing)</li>
        </ul>
      </div>
    </div>
  );
};

export default PriceBreakup;
