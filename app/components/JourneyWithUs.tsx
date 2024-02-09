import React from 'react';
import CalendarIcon from '@icons/calendar.svg';
import Design from '@icons/Design.svg';
import Consultation from '@icons/Consultaion.svg';
import Maintenance from '@icons/Maintenance.svg';
import CustomerVisit from '@icons/Location.svg';
import Financing from '@icons/Financing.svg';
import Installation from '@icons/Installation.svg';

const journeyData = [
  {
    headerBgColor: 'from-rose-400 to-red-400',
    headerText: 'Consultation',
    bodyText:
      'We understand your electricity consumption and system requirements',
    timeLine: '',
    icon: <Consultation />,
  },
  {
    headerBgColor: 'from-cyan-200 to-teal-300',
    headerText: 'Customer Visit',
    bodyText:
      'Every house is unique.We carry through feasibility study starting from shadow analysis till interconnection point',
    timeLine: '0-1 weeks',
    icon: <CustomerVisit />,
  },
  {
    headerBgColor: 'from-sky-300 to-blue-400',
    headerText: 'Design',
    bodyText:
      'We create detailed 3D design of a robust, durable, beautiful solar power plant.',
    timeLine: '1-2 weeks',
    icon: <Design />,
  },
  {
    headerBgColor: 'from-green-300 to-green-400',
    headerText: 'Financing',
    bodyText:
      'All necessary the permissions and attractive financing options, we facilitate your journey.',
    timeLine: '2-3 weeks',
    icon: <Financing />,
  },
  {
    headerBgColor: 'from-fuchsia-400 to-fuchsia-600',
    headerText: 'Installation',
    bodyText:
      'Our skilled workmen install and commission your plant with 50+ quality checks.',
    timeLine: '3-4 weeks',
    icon: <Installation />,
  },
  {
    headerBgColor: 'from-violet-400 to-violet-500',
    headerText: 'Operations and Maintence ',
    bodyText:
      'Our service support experts are just a call or a tap away on the app! We are actively monitoring and ensuring the health of your plant 24*7',
    timeLine: '25+ years',
    icon: <Maintenance />,
  },
];
const JourneyWithUs = () => {
  return (
    <div className="my-16 relative">
      <div className="relative">
        <div className="w-full h-[22px] bg-slate-800 flex items-center">
          <div className="w-full h-0 border border-dashed border-white"></div>
        </div>
        <div className="h-[200px] w-full bg-white"></div>
      </div>
      <div className="flex overflow-scroll w-full no-scrollbar absolute -top-2.5">
        {journeyData.map((data, index) => (
          <div key={index} className="min-w-full px-16 flex flex-col gap-y-3">
            <div className="flex justify-center items-center">
              <div className="w-[45px] h-[45px] relative">
                <div
                  className={`w-[45px] h-[45px] left-0 top-0 absolute bg-gradient-to-b rounded-full ${data.headerBgColor}`}
                />
                <div className="w-[33.75px] h-[33.75px] left-[5.62px] top-[5.62px] absolute bg-white rounded-full shadow flex justify-center items-center">
                  {data.icon}
                </div>
              </div>
            </div>

            <div>
              <div
                className={`${data.headerBgColor} px-[13px] py-4 bg-gradient-to-r rounded-tl-lg rounded-tr-lg justify-center items-center text-center text-white text-base font-medium font-archivo`}
              >
                {data.headerText}
              </div>
              <div className="px-2 py-5 rounded-bl-lg rounded-br-lg border-l border-r border-b border-gray-200 flex-col justify-between items-center inline-flex h-40 w-full">
                <p className="text-center text-black text-xs font-light leading-[18px]">
                  {data.bodyText}
                </p>
                <div className="flex items-end gap-x-1">
                  <CalendarIcon
                    className={`${data.timeLine ? 'block' : 'hidden'}`}
                  />
                  <p className="text-brand-grey-600 text-[13px] leading-3">
                    {data.timeLine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyWithUs;
