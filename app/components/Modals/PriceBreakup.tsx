import { getPriceBreakupValues } from '@utils/price-calc';
import { SYSTEM_PRICE_DATA } from '../../actions/types';

type Props = {
  priceBreak: SYSTEM_PRICE_DATA;
};

const PriceBreakup = ({ priceBreak }: Props) => {
  const { msp, addOnMsp, discount } = getPriceBreakupValues({
    spp: priceBreak?.spp,
    addOnSpp: priceBreak?.add_on_spp,
    addOnPrice: priceBreak?.add_on_price,
    systemPrice: priceBreak?.system_price,
  });
  return (
    <div className="flex flex-col gap-y-6">
      <h4 className="text-3xl font-semibold font-archivo text-center">
        Price Breakup
      </h4>
      <div>
        <span className="text-center block">System price</span>
        <p className="text-center mb-3">
          ₹ {priceBreak?.total_system_price_with_gst}{' '}
          <span className="text-sm text-brand-grey-600">(incl. GST)</span>
        </p>
        <div className="text-sm text-brand-grey-500 flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <p>System price(excl. GST)</p>
            <p>{msp}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>System add-on price</p>
            <p>{addOnMsp}</p>
          </div>
          <div className="flex justify-between items-center text-brand-green-400">
            <p>Discount</p>
            <p>{discount}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>GST @ 13.8%</p>
            <p>₹ {priceBreak?.gst}</p>
          </div>
        </div>
      </div>
      <div>
        <span className="text-center block">Service & addon-ons</span>
        <p className="text-center mb-3">
          ₹ {priceBreak?.total_service_add_on_with_gst}{' '}
          <span className="text-sm text-brand-grey-600">(incl. GST)</span>
        </p>
        <div className="text-sm text-brand-grey-500 flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <p>Name change charges</p>
            <p>₹ {priceBreak?.name_change_charges}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Load enhancement charges</p>
            <p>₹ {priceBreak?.load_enhancement_charges}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Net metering charges</p>
            <p>₹ {priceBreak?.net_metering_charges}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="grow-[0.6]">
              Total Service add-ons charges (excl. GST)
            </p>
            <p>₹ {priceBreak?.total_service_addon_without_gst}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>GST @ 18%</p>
            <p>₹ {priceBreak?.gst_on_service}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xl font-medium text-center">
          Total payable (incl. GST)
        </p>
        <p className="text-2xl font-medium mt-2 text-center">
          ₹ {priceBreak?.total_system_and_service_including_gst}
        </p>
      </div>

      {priceBreak?.subsidy_value ? (
        <div className="text-xl font-medium font-archivo text-brand-grey-600 py-3 px-1.5 bg-brand-blue-100 text-center">
          Subsidy : ₹ {priceBreak?.subsidy_value}
        </div>
      ) : (
        <></>
      )}

      <div className="text-sm text-brand-grey-500">
        <span className="font-medium">Pricing Exclusions</span>
        <ul>
          <li>• Cost of SIM/internet for GSM access</li>
          <li>• Cost of additional cables (AC/DC/Earthing)</li>
        </ul>

        <p className="mt-4">
          *Discom service charges are approximate average charges, and the
          actual costs may vary depending on the specific site requirements.
        </p>
      </div>
    </div>
  );
};

export default PriceBreakup;
