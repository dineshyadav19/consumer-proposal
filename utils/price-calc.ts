// MSP = spp*1.15
// system_discount = MSP-System price
// add_on_msp  = add_on_spp*1.15
// add_on_discount = add_on_msp - add_on_price
// total_discount = system_discount + add_on_discount

export const formatNumberToPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);

function indianNumberStringToNumber(indianNumberString: string) {
  // Remove commas from the string
  const stringWithoutCommas = indianNumberString.replace(/,/g, '');

  // Parse the string as an integer
  const number = parseInt(stringWithoutCommas, 10);

  return number;
}

export const getPriceBreakupValues = ({
  spp,
  addOnSpp,
  systemPrice,
  addOnPrice,
}: {
  spp: string;
  addOnSpp: string;
  systemPrice: string;
  addOnPrice: string;
}) => {
  const sppStringToNum = indianNumberStringToNumber(spp);
  const systemPriceToNum = indianNumberStringToNumber(systemPrice);
  const addOnPriceToNum = indianNumberStringToNumber(addOnPrice);
  const addOnStringToNum = indianNumberStringToNumber(addOnSpp);

  const sppBeforeDiscount = sppStringToNum * 1.15; //msp
  const systemDiscount = sppBeforeDiscount - systemPriceToNum;
  const addOnBeforeDiscount = addOnStringToNum * 1.15;
  const addOnDiscount = addOnBeforeDiscount - addOnPriceToNum;
  const totalDiscount = systemDiscount + addOnDiscount;

  const msp = formatNumberToPrice(sppBeforeDiscount);
  const addOnMsp = formatNumberToPrice(addOnBeforeDiscount);
  const discount = totalDiscount > 1 ? formatNumberToPrice(totalDiscount) : 0;

  return {
    msp,
    addOnMsp,
    discount,
  };
};
