"use client";

import React, { useState } from "react";

type Item = { id: number; label: React.ReactNode };

const ITEMS: Item[] = [
  { id: 1, label: <>Faculty of Science and <br/>Engineering</> },
  { id: 2, label: <>Faculty of Business and <br/>Management</> },
  { id: 3, label: <>Faculty of Medicine and Health <br/>Sciences</> },
  { id: 4, label: <>Faculty of Humanities and<br/> Arts</> },
];

export default function TU24() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );

  return (
    <main >
      {/* Header */}
      <div className="text-center mt-20 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#545454]">
          Popular Courses
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-6 items-start">
          {/* LEFT - checkboxes */}
          <aside
            className="col-span-1 mt-20 px-18 pt-16 pb-70 w-[430px] sticky top-0 overflow-hidden"
            style={{ backgroundColor: "#DFFFFF" }}
          >
            <div className="space-y-8">
              {ITEMS.map((it) => {
                const isChecked = selected.includes(it.id);
                return (
                  <div key={it.id} className="flex items-center gap-6">
                    {/* Checkbox */}
                    <label className="relative flex justify-center items-center cursor-pointer shrink-0 -ml-4 -mt-10">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={isChecked}
                        onChange={() => toggle(it.id)}
                      />
                      <span
                        className={`w-7 h-7 rounded-md border-2 transition-all flex items-center justify-center ${
                          isChecked
                            ? "border-transparent bg-[#37D7D9]"
                            : "bg-white border-white"
                        }`}
                        aria-hidden
                      >
                        <svg
                          className={`w-4 h-4 transform ${
                            isChecked
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-75"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    </label>

                    {/* Label + underline */}
                    <div className="flex-1">
                      <div className="text-lg leading-6 text-black font-medium">
                        {it.label}
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* RIGHT - content area */}
          <section className="col-span-4 mt-28 ml-50">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-4 items-center mb-8">
              <div /> {/* empty for program title */}
              <div className="text-base font-bold text-[#545454]">Duration</div>
              <div className="text-base font-bold text-[#545454]">
                Tuition Fee
              </div>
              <div className="text-base font-bold text-[#545454]">
                Requirement
              </div>
              <div className="text-base font-bold text-[#545454]">Intake</div>
            </div>

            <div className="space-y-8">
              {[...selected].sort((a, b) => a - b).map((id) => (
                <div key={id} className="space-y-10">
                  {/* -------- ID 1 -------- */}
                  {id === 1 && (
                    <>
                      {/* Bachelor */}
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Bachelor of Engineering
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          4 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          GBP 42,000/year
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          A-levels (Maths/Physics) + IELTS 7.0
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: October
                        </div>
                      </div>

                      {/* Master */}
                      <div className="grid grid-cols-5 gap-4 items-start mt-4">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            MPhil in Advanced Computer Science
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          1 Years (Full-Time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                           GBP 44,000/year
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Bachelor's in CS/Engineering + IELTS 7.0
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                           Intake: October
                        </div>
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </>
                  )}

                  {/* -------- ID 2 -------- */}
                  {id === 2 && (
                    <>
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            BA in Economics
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          3 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          GBP 38,000/year
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          A-levels/IB + IELTS 7.0
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: October
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 items-start mt-4">
                        <div className="col-span-1">
                          <h3 className="font-semibold">Master of Business Administration (Judge Business School)</h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          1 year (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                           GBP 66,000/year
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Bachelor's + GMAT + IELTS 7.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: September
                        </div>
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </>
                  )}

                  {/* -------- ID 3 -------- */}
                  {id === 3 && (
                    <>
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                             MB BChir (Medicine)
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          6 Years (Full-Time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          GBP 61,000/year
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                           A-levels (Biology/Chemistry) + IELTS 7.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: October
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 items-start mt-4">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            MPhil in Public Health
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          1 Years (Full-Time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          GBP 40,000/year
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          BBachelor's in Health + IELTS 7.0
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: October
                        </div>
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </>
                  )}

                  {/* -------- ID 4 -------- */}
                  {id === 4 && (
                    <>
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Bachelor of Law (LLB equivalent)
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          3 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          GBP 38,000/year
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          A-levels/IB + IELTS 7.0
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: October
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 items-start mt-4">
                        <div className="col-span-1">
                          <h3 className="font-semibold">MPhil in International Relations</h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          1 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          GBP 39,000/year
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Bachelor's + IELTS 7.0
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          October
                        </div>
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}