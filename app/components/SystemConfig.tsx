import React from 'react';

const configs = [
  {
    key: 'capacity',
    title: 'Capacity',
    subtext: '',
    metric: '3.3 kWp',
  },
  {
    key: 'structure',
    title: 'Structure',
    subtext: '',
    metric: 'High-rise',
  },
  {
    key: 'phase',
    title: 'Phase',
    subtext: '',
    metric: '1 Phase',
  },
  {
    key: 'noOfPanels',
    title: 'No. of panels',
    subtext: '',
    metric: '9 nos.',
  },
];

type Props = {
  capacity: number | string;
  structure: string;
  phase: string;
  noOfPanels: string;
};

const SystemConfig = (props: Props) => {
  const metricsArray = configs.map((val) => {
    return { ...val, metric: props[val.key as keyof Props] };
  });
  return (
    <div className="mt-9 mb-16">
      <div className="flex justify-center">
        <h2 className="heading-gradient mb-3 mt-9 px-4 text-center max-w-[70%]">
          Your system configuration
        </h2>
      </div>

      <div className="flex gap-x-2 overflow-scroll w-full no-scrollbar px-4">
        {metricsArray.map((val, index) => {
          return (
            <div
              key={index}
              className="min-w-32 h-28 px-4 py-2 rounded-[10px] border border-zinc-300 border-opacity-90 flex flex-col justify-between items-start"
            >
              <span className="text-brand-grey-500 text-base leading-snug">
                {val.title}
              </span>
              <div className="flex flex-col">
                <span className="text-brand-grey-400 text-xs leading-tight">
                  {val.subtext}
                </span>
                <span className="text-black text-xl font-medium">
                  {val.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SystemConfig;
