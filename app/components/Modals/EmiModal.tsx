import { formatNumberToPrice } from '@utils/price-calc';
import { LOAN_OPTIONS } from '../../actions/types';

type Props = {
  loanOptions: Array<LOAN_OPTIONS> | undefined;
};

const EmiModal = (props: Props) => {
  const convertToFixedDecimalNumber = (number: string) =>
    parseFloat(number.replace(/,/g, '')).toFixed(2);

  return (
    <div className="flex flex-col gap-y-3 mt-3 justify-center">
      <h4 className="text-3xl font-semibold font-archivo text-center">
        EMI options
      </h4>
      <div className="flex justify-center">
        <p className="text-center text-sm text-brand-grey-600 font-medium font-archivo max-w-72">
          Available EMI options for order value <br />
          {props?.loanOptions &&
            formatNumberToPrice(
              parseInt(
                convertToFixedDecimalNumber(
                  props.loanOptions[0].data[0].order_value
                )
              )
            )}
        </p>
      </div>

      {props.loanOptions?.map((loanData) => {
        return loanData.data.map((loan, index) => {
          return (
            <div
              key={index}
              className="rounded-[10px] border border-zinc-300 border-opacity-90 flex flex-col p-3"
            >
              <div className="flex justify-between items-center">
                <p className="text-xl font-medium">₹{loan.emi}/ mo.</p>
                <p className="text-sm font-medium text-brand-green-500">
                  {loan.tenure} months
                </p>
              </div>
              <p className="text-base text-brand-grey-600 mb-2 mt-1">
                ₹{convertToFixedDecimalNumber(loan.down_payment_amount)} down
                payment
              </p>
              <div className="text-sm text-brand-grey-500 flex flex-col gap-y-1">
                <div className="flex justify-between items-center">
                  <p>Loan amount</p>
                  <p>₹{loan.order_value}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Down payment</p>
                  <p>
                    ₹{convertToFixedDecimalNumber(loan.down_payment_amount)}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Total interest</p>
                  <p>
                    ₹
                    {convertToFixedDecimalNumber(
                      loan.interest_total.toString()
                    )}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Total cost (with interest)</p>
                  <p>₹{loan.order_value}</p>
                </div>
              </div>
            </div>
          );
        });
      })}
      <p className="text-center text-sm text-brand-grey-500">
        Loan eligibility and sanctions are based on customer’s credit worthiness
        and lender’s discretions. Processing fee is applicable for all all
        sanctioned cases.
      </p>
      <p className="text-center text-base font-medium text-brand-blue-600">
        To apply for a loan, contact your authorized Fenice Energy partner.
      </p>
    </div>
  );
};

export default EmiModal;
