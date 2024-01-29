import Image from 'next/image';
import HeaderImage from '@images/header.png';
export default function Home() {
  return (
    <main className="mt-5">
      <div className="flex justify-center mb-5">
        <div className="bg-brand-blue-100 w-fit py-2.5 px-5 rounded-[32px] flex justify-center items-center gap-x-2">
          <span className="wave text-2xl">👋</span>
          <span className="text-sm font-archivo">Rakesh ji</span>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="max-w-80 heading--h1 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#00568D] to-[#5BB8F4]">
          Your rooftop solar plant proposal
        </h1>
        <Image alt="header-image" src={HeaderImage} className="w-full h-fit" />
      </div>
    </main>
  );
}
