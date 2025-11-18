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
             About Hospitality & Tourism in the <br/>USA
            </h1>

            <p className="text-lg lg:text-xl leading-normal text-[#000000] max-w-3xl mt-8">
             The United States is a global leader in hospitality, travel, and <br/>event management education. From luxury hotel<br/> management to tourism entrepreneurship, U.S. universities<br/> offer hands-on learning, global exposure, and internships in <br/>some of the world’s top destinations and brands. Graduates<br/> go on to lead careers in hotels, airlines, tourism boards, and <br/>event management companies worldwide.
            </p>
            <button
            className="bg-[#37D7D9] text-white text-xl font-black rounded-full px-10 py-2 mt-14 shadow-xl cursor-pointer"
          >
            See More
          </button>
          </div>

          {/* RIGHT: Illustration */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 -mt-1 ">
            <div className="w-94 md:w-75 max-w-[700px]">
              <Image
                src="/images/mc4ukpage0Img1.png"
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
            src="/images/mc4usapage0Img2.png"
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
