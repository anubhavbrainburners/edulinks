"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type Message = {
  id: string;
  text: string;
  from: "bot" | "user";
};

export default function AiTest5pageM() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "bot-init-1",
      text:
        "Hi Manan👋 I'm your personal assistant ready to guide you to all things related to student visas, scholarships, top courses, and universities for six amazing countries. Let's start exploring your future! Where do you want to begin?",
      from: "bot",
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // ✅ Append user message -> simulate bot reply
  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, // ✅ fixed template literal
      text,
      from: "user",
    };

    setMessages((prev) => [...prev, userMsg]);

    // ✅ Simulated bot reply
    setTimeout(() => {
      const botMsg: Message = {
        id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, // ✅ fixed
        text:
          "Great! I can help with programs, fees, and visas. What level are you aiming for?",
        from: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  }

  // ✅ Send from input
  function sendFromInput() {
    const value = inputRef.current?.value ?? "";
    if (!value.trim()) return;
    sendMessage(value);
    if (inputRef.current) inputRef.current.value = "";
  }

  // ✅ Auto-scroll to bottom when messages change
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  function handleBack() {
    router.back();
  }

  return (
    <div className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header */}
      <div className="relative bg-[#DFFFFF]">
        <header className="px-4 pb-5 pt-5 relative">
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="absolute left-4 pt-1.5 flex items-center justify-center text-[#545454]"
          >
            <FaArrowLeft className="text-lg" />
          </button>

          <div className="flex items-center justify-center">
            <h1 className="text-lg font-bold text-[#545454]">
              Chat With Edulinks AI Assistant
            </h1>
          </div>
        </header>
      </div>

      {/* Chat Area */}
      <main
        ref={scrollContainerRef}
        className="flex-1 px-4 overflow-y-auto"
        style={{ paddingBottom: 160 }}
      >
        <div className="max-w-full mx-auto flex flex-col space-y-8">
          <div className="flex flex-col gap-8">
            {messages.map((m) =>
              m.from === "bot" ? (
                <div key={m.id} className="flex items-start gap-3">
                  {/* Bot Avatar */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <Image src="/images/aitest5Img.svg" alt="robot" width={22} height={22} />
                    </div>
                  </div>

                  {/* Bot Message */}
                  <div className="bg-white rounded-xl p-4 shadow-md max-w-[85%]">
                    <p className="font-bold text-sm leading-6 text-[#545454]">
                      {m.text}
                    </p>
                  </div>
                </div>
              ) : (
                <div key={m.id} className="flex items-center justify-end gap-3">
                  <div className="bg-[#37D7D9] text-white font-bold px-4 py-2 rounded-lg shadow-md max-w-[65%] text-sm break-words">
                    {m.text}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="font-bold text-[#545454] text-sm">M</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </main>

      {/* Input Bar */}
      <div className="fixed left-0 right-0 bottom-4 px-4">
        <div className="max-w-full mx-auto">
          <div className="bg-white rounded-full flex items-center shadow-lg overflow-hidden">
            <input
              ref={inputRef}
              placeholder="Type Your Message........."
              className="flex-1 px-4 py-3 text-base font-semibold placeholder-[#545454] outline-none rounded-full"
              style={{ color: "#545454" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendFromInput();
              }}
              aria-label="Type your message"
            />
            <button
              onClick={sendFromInput}
              aria-label="send"
              className="w-12 h-12 flex items-center justify-center mr-2"
            >
              <Image src="/images/aitest5Img2.svg" alt="send" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
