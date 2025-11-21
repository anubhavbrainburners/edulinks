// // app/page.tsx
// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { IoCheckmarkCircle } from "react-icons/io5";
// import { FaArrowRightLong } from "react-icons/fa6";

// export default function Ai4Q3() {
//   const router = useRouter();
//   const [progress, setProgress] = useState(67);
//   const options = ["Easy", "Medium", "Hard"];
//   const [selected, setSelected] = useState<number | null>(null);

//   const handleSelect = (idx: number) => {
//     setSelected((prev) => (prev === idx ? null : idx));
//     setProgress(selected === idx ? 67 : 100);
//   };

//   const handleNext = () => {
//     router.push("/contactus/aiassistant/aitest4"); // 👈 change this path to your next page
//   };

//   return (
//     <main
//       className="min-h-screen w-full antialiased overflow-hidden"
//       style={{
//         backgroundColor: "#DFFFFF",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Left fixed panel */}
//       <aside
//         className="hidden md:flex flex-col ml-30"
//         style={{
//           width: "50vw",
//           position: "fixed",
//           left: 0,
//           top: 0,
//           bottom: 0,
//         }}
//       >
//         <div className="flex-0 mt-25">
//           <div className="w-full max-w-[300px]">
//             <Image
//               src="/images/ai4q1Img.png"
//               alt="career illustration"
//               width={1020}
//               height={220}
//               style={{ objectFit: "contain" }}
//             />
//           </div>
//         </div>

//         <div className="mt-16 max-w-[550px]">
//           <h1 className="text-4xl font-bold mb-6 text-[#545454]">
//             English Test
//           </h1>
//           <p className="text-base leading-tight font-medium text-[#545454]">
//             Select Your English Proficiency Test.
//           </p>

//           <div className="mt-8 max-w-[420px]">
//             <div className="h-3 rounded-full bg-white/60 overflow-hidden">
//               <div
//                 className="h-full rounded-full"
//                 style={{
//                   width: `${progress}%`,
//                   backgroundColor: "#37D7D9",
//                 }}
//               />
//             </div>
//             <div className="flex items-center justify-between text-xs mt-2 font-medium">
//               <span>
//                 “You’re Doing Great — Let’s Complete Your Career Match!”
//                 <br /> Or Simply
//               </span>
//               <span className="-mt-4">{progress}%</span>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Right scrollable form */}
//       <section
//         className="pt-6 pb-12 mr-8"
//         style={{
//           marginLeft: "54vw",
//           minHeight: "100vh",
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         <div className="max-w-[650px] mx-aut0 text-[#545454]">
//           <div className="bg-white rounded-4xl shadow-lg px-8 pt-10 pb-10">
//             <div className="px-4">
//               <h2 className="text-2xl font-semibold mb-3">
//                 Test_Name Difficulty
//               </h2>
//               <p className="text-lg font-medium mb-12">
//                 We Will Generate Listening Question Based On Your Difficulty
//                 Choice.
//               </p>
//             </div>

//             <form className="space-y-4" aria-label="Education background">
//               {options.map((opt, idx) => {
//                 const isChecked = selected === idx;

//                 const textColor =
//                   opt === "Easy"
//                     ? "#4CAF50"
//                     : opt === "Medium"
//                       ? "#FFD700"
//                       : "#FF4C4C";

//                 return (
//                   <label
//                     key={opt}
//                     onClick={() => handleSelect(idx)}
//                     className="flex items-center justify-between w-full border border-[#37D7D9] rounded-xl px-5 py-3 cursor-pointer transition-all"
//                   >
//                     <div
//                       className="text-lg font-semibold"
//                       style={{ color: textColor }}
//                     >
//                       {opt}
//                     </div>

//                     <div className="flex-shrink-0 flex items-center justify-center h-9 w-9">
//                       {isChecked ? (
//                         <IoCheckmarkCircle
//                           className="text-[#37D7D9]"
//                           style={{ width: "100%", height: "100%" }}
//                         />
//                       ) : (
//                         <div className="h-9 w-9 rounded-full border border-[#37D7D9]" />
//                       )}
//                     </div>
//                   </label>
//                 );
//               })}

//               {/* ✅ Next Button with router.push */}
//               <div className="flex justify-end mt-8">
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   disabled={selected === null}
//                   className={`flex items-center gap-3 text-xl font-black rounded-full px-6 py-2 shadow-md transition
//                     ${selected !== null
//                       ? "bg-[#37D7D9] text-white hover:cursor-pointer hover:opacity-90"
//                       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     }
//                   `}
//                 >
//                   Next <FaArrowRightLong />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

export default function Ai4Q3() {
  const router = useRouter();

  const [progress, setProgress] = useState(67);
  const [selected, setSelected] = useState<number | null>(null);

  const options = ["Easy", "Medium", "Hard"];

  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Load previous selections from localStorage
  useEffect(() => {
    const test = localStorage.getItem("selectedTest");
    const section = localStorage.getItem("selectedSection");

    setSelectedTest(test);
    setSelectedSection(section);
  }, []);

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setProgress(idx !== null ? 100 : 67);
  };

  const handleNext = async () => {
    if (selected === null) return;

    const difficulty = options[selected];

    if (!selectedTest || !selectedSection) {
      alert("Invalid flow: Missing test or section.");
      return;
    }

    localStorage.setItem("selectedDifficulty", difficulty);

    try {
      const res = await axios.post("/api/generate-questions", {
        testType: selectedTest,
        section: selectedSection,
        difficulty,
        count: 10,
      });

      let questionsArray = [];

      // Match ALL possible shapes (same logic as your React version)
      if (
        res.data?.success &&
        res.data?.data &&
        Array.isArray(res.data.data.questions)
      ) {
        questionsArray = res.data.data.questions;
      } else if (res.data?.success && Array.isArray(res.data.questions)) {
        questionsArray = res.data.questions;
      } else if (
        res.data?.success &&
        res.data.testSession &&
        Array.isArray(res.data.testSession.questions)
      ) {
        questionsArray = res.data.testSession.questions;
      } else if (Array.isArray(res.data)) {
        questionsArray = res.data;
      }

      if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
        alert("Failed to generate questions");
        return;
      }

      // Save normalized array
      localStorage.setItem(
        "generatedQuestions",
        JSON.stringify(questionsArray)
      );

      // Navigate
      router.push("/contactus/aiassistant/aitest4");
    } catch (error) {
      console.error("Error generating questions:", error);
      alert("Error generating test questions.");
    }
  };

  return (
    <main
      className="min-h-screen w-full antialiased overflow-hidden"
      style={{
        backgroundColor: "#DFFFFF",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Left fixed illustration section */}
      <aside
        className="hidden md:flex flex-col ml-30"
        style={{
          width: "50vw",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="flex-0 mt-25">
          <div className="w-full max-w-[300px]">
            <Image
              src="/images/ai4q1Img.png"
              alt="career illustration"
              width={1020}
              height={220}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="mt-16 max-w-[550px]">
          <h1 className="text-4xl font-bold mb-6 text-[#545454]">
            English Test
          </h1>
          <p className="text-base leading-tight font-medium text-[#545454]">
            Select Your English Proficiency Test.
          </p>

          <div className="mt-8 max-w-[420px]">
            <div className="h-3 rounded-full bg-white/60 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  backgroundColor: "#37D7D9",
                }}
              />
            </div>
            <div className="flex items-center justify-between text-xs mt-2 font-medium">
              <span>
                “You’re Doing Great — Let’s Complete Your Career Match!”
                <br /> Or Simply
              </span>
              <span className="-mt-4">{progress}%</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Difficulty Options */}
      <section
        className="pt-6 pb-12 mr-8"
        style={{
          marginLeft: "54vw",
          minHeight: "100vh",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="max-w-[650px] mx-aut0 text-[#545454]">
          <div className="bg-white rounded-4xl shadow-lg px-8 pt-10 pb-10">
            <div className="px-4">
              <h2 className="text-2xl font-semibold mb-3">
                Test Difficulty
              </h2>
              <p className="text-lg font-medium mb-12">
                We will generate questions based on your difficulty choice.
              </p>
            </div>

            <form className="space-y-4" aria-label="Difficulty selection">
              {options.map((opt, idx) => {
                const isChecked = selected === idx;

                const textColor =
                  opt === "Easy"
                    ? "#4CAF50"
                    : opt === "Medium"
                      ? "#FFD700"
                      : "#FF4C4C";

                return (
                  <label
                    key={opt}
                    onClick={() => handleSelect(idx)}
                    className="flex items-center justify-between w-full border border-[#37D7D9] rounded-xl px-5 py-3 cursor-pointer transition-all"
                  >
                    <div
                      className="text-lg font-semibold"
                      style={{ color: textColor }}
                    >
                      {opt}
                    </div>

                    <div className="flex-shrink-0 flex items-center justify-center h-9 w-9">
                      {isChecked ? (
                        <IoCheckmarkCircle
                          className="text-[#37D7D9]"
                          style={{ width: "100%", height: "100%" }}
                        />
                      ) : (
                        <div className="h-9 w-9 rounded-full border border-[#37D7D9]" />
                      )}
                    </div>
                  </label>
                );
              })}

              {/* Next Button */}
              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selected === null}
                  className={`flex items-center gap-3 text-xl font-black rounded-full px-6 py-2 shadow-md transition
                    ${selected !== null
                      ? "bg-[#37D7D9] text-white hover:opacity-90"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  Next <FaArrowRightLong />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

