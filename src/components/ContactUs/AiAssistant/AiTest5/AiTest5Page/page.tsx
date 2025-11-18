"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Message = {
  id: string;
  text: string;
  from: "bot" | "user";
};

export default function AiTest5Page() {
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

  // Append user -> simulate bot reply after delay
  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      text,
      from: "user",
    };

    setMessages((prev) => [...prev, userMsg]);

    // Simulated bot reply
    setTimeout(() => {
      const botMsg: Message = {
        id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        text:
          "Great! I can help with programs, fees, and visas. What level are you aiming for?",
        from: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  }

  function sendFromInput() {
    const value = inputRef.current?.value ?? "";
    if (!value.trim()) return;
    sendMessage(value);
    if (inputRef.current) inputRef.current.value = "";
  }

  // Auto-scroll to bottom on message update
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src="/images/aitest5Img.svg" alt="robot" width={48} height={48} />
        </div>
        <h1 className="text-xl font-bold text-[#545454]">
          Chat With Edulinks AI Assistant
        </h1>
      </header>

      {/* Chat area */}
      <main
        ref={scrollContainerRef}
        className="flex-1 px-10 overflow-y-auto"
        style={{ paddingBottom: 180 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col space-y-10">
          {messages.map((m) =>
            m.from === "bot" ? (
              <div key={m.id} className="flex items-start gap-6">
                {/* Bot avatar */}
                <div className="flex-shrink-0 mt-2">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Image src="/images/aitest5Img.svg" alt="robot" width={30} height={30} />
                  </div>
                </div>

                {/* Bot bubble */}
                <div className="bg-white rounded-xl p-6 shadow-md max-w-[1000px]">
                  <p className="font-bold text-lg leading-7 text-[#545454]">
                    {m.text}
                  </p>
                </div>
              </div>
            ) : (
              <div key={m.id} className="flex items-center justify-end gap-4">
                <div className="bg-[#37D7D9] text-white font-bold px-6 py-3 rounded-lg shadow-md max-w-[420px] text-lg break-words">
                  {m.text}
                </div>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                  <span className="font-bold text-[#545454] text-lg">M</span>
                </div>
              </div>
            )
          )}
        </div>
      </main>

      {/* Input */}
      <div className="fixed left-0 right-0 bottom-8 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-full flex items-center shadow-lg overflow-hidden">
            <input
              ref={inputRef}
              placeholder="Type Your Message........."
              className="flex-1 px-8 py-5 text-lg font-semibold placeholder-[#545454] outline-none rounded-full"
              style={{ color: "#545454" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendFromInput();
              }}
            />
            <button
              onClick={sendFromInput}
              aria-label="send"
              className="w-20 h-16 flex items-center justify-center"
            >
              <Image src="/images/aitest5Img2.svg" alt="send" width={26} height={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
