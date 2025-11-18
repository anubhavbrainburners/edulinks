// app/overview-career/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Overview - Study in Australia",
  description: "Overview and reasons to choose a career in Australia",
};

export default function Mc4Page0 () {
  return (
    <main className="min-h-screen bg-white py-20 ">
      {/* ===== Overview Section ===== */}
      <section className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: Text column */}
          <div className="lg:col-span-7 order-2 lg:order-1 lg:ml-50 mt-10">
            <h1 className="mb-6 leading-15 text-3xl lg:text-4xl font-bold text-[#545454]">
             About Renewable Energy & <br/>Sustainability in Germany
            </h1>

            <p className="text-lg lg:text-xl leading-normal text-[#000000] max-w-3xl mt-8">
             Germany is a global pioneer in renewable energy and <br/>sustainable development. With its ambitious Energiewende <br/>
             (energy transition) policy, the country is investing heavily in <br/>clean power, smart infrastructure, and environmental<br/>
              technology. Universities combine cutting-edge research <br/>with practical learning to prepare students for careers that <br/>
              drive a greener future.
            </p>
            <button
            className="bg-[#37D7D9] text-white text-xl font-black rounded-full px-10 py-2 mt-14 shadow-xl cursor-pointer"
          >
            See More
          </button>
          </div>

          {/* RIGHT: Illustration */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 -mt-1 ">
            <div className="w-94 md:w-120 max-w-[700px]">
              <Image
                src="/images/mc4gerpage0Img1.png"
                alt="illustration of professional holding tools"
                width={2000}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Section ===== */}
      <section className="mx-auto max-w-screen-xl text-center mt-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
          Popular Specialisations
        </h1>

        <div className="flex justify-center mt-16">
          <Image
            src="/images/mc4gerpage0Img2.png"
            alt="Why Study Business in Australia"
            width={2000}
            height={400}
            className="w-full max-w-[1080px] h-auto"
            priority
          />
        </div>
      </section>
    </main>
  );
}
