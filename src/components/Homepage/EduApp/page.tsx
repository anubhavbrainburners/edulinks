"use client";
import React from "react";
import Image from "next/image";
import img from "../../../../public/images/backlineImg.png";

const cards = [
  { src: "/images/cardImg1.svg", alt: "Career Pathway", pos: "keyframe-0" },
  { src: "/images/cardImg2.svg", alt: "Uni Shortlisting", pos: "keyframe-30" },
  { src: "/images/cardImg3.svg", alt: "Visa Query", pos: "keyframe-50" },
  { src: "/images/cardImg4.svg", alt: "Chat With Me", pos: "keyframe-70" },
];

const EduApp: React.FC = () => {
  return (
    <>
      <style>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: clamp(200px, 30vw, 450px);
          overflow: hidden;
        }

        .carousel-image {
          position: absolute;
          width: clamp(130px, 20vw, 250px);
          height: clamp(70px, 10vw, 120px);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* STATIC POSITIONS — NO ANIMATION */
        .keyframe-0 { left: 2%; top: 20%; opacity: 1; }
        .keyframe-30 { left: 25%; top: 30%; opacity: 1; }
        .keyframe-50 { left: 63%; top: 48%; opacity: 1; }
        .keyframe-70 { left: 82%; top: 17%; opacity: 1; }

        .overlay {
          position: absolute;
          width: clamp(1300px, 290vw, 1000px);
          height: auto;
          z-index: 10;
          pointer-events: none;
        }
        .overlay.bottom-center {
          top: -14%;
          left: 51%;
          transform: translateX(-50%);
        }

        .bottom-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(to top, white, transparent);
          z-index: 30;
          pointer-events: none;
        }
      `}</style>

      {/* Heading Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto mt-20 gap-6">
        <div className="space-y-4 text-center md:text-left">
          <h2
            className="text-3xl md:text-5xl text-black font-semibold tracking-tight"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Meet the Edulinks App
          </h2>
          <p
            className="text-black tracking-wide font-semibold text-base md:text-lg"
            style={{ fontFamily: "DM Sans" }}
          >
            Your AI study abroad assistant, always in your pocket.
          </p>
        </div>

        <div className="flex gap-4">
          <Image src="/images/googleImg.png" alt="Google Play" width={140} height={40} />
          <Image src="/images/appImg.png" alt="App Store" width={140} height={40} />
        </div>
      </div>

      {/* Carousel */}
      <div
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        className="carousel-container mb-40"
      >
        {/* Phone */}
        <Image
          src="/images/phoneImg.png"
          alt="Phone"
          width={2000}
          height={1500}
          className="overlay bottom-center"
        />

        {/* STATIC CARDS */}
        {cards.map((card, index) => (
          <div key={index} className={`carousel-image ${card.pos}`}>
            <Image src={card.src} alt={card.alt} fill style={{ objectFit: "contain" }} />
          </div>
        ))}

        <div className="bottom-gradient"></div>
      </div>
    </>
  );
};

export default EduApp;
