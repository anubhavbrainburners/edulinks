"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Mheader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const refs = {
    destinations: useRef<HTMLDivElement>(null),
    counseling: useRef<HTMLDivElement>(null),
    universities: useRef<HTMLDivElement>(null),
    careers: useRef<HTMLDivElement>(null),
  };

  const toggleDropdown = (name: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const getDropdownStyle = (name: string) => {
    const contentHeight =
      refs[name as keyof typeof refs].current?.scrollHeight || 0;
    return {
      maxHeight: openDropdown === name ? `${contentHeight}px` : "0px",
      transition: "max-height 0.4s ease-in-out",
    };
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white px-10 py-6 flex items-center justify-between z-[10] md:hidden">
      <div className="flex items-center space-x-2">
        <img src="/images/eduLogo.png" alt="EduLinks Logo" className="h-9 ml-25" />
      </div>

      <button
        className="text-2xl text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">

          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-teal-600">
            Home
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-teal-600">
            About us
          </Link>

          {/* Study Destinations Dropdown */}
          <div className="max-w-full text-center">
            <div className="flex items-center justify-between max-w-full px-0">
              <Link
                href="/StudyDestinations"
                onClick={() => setMenuOpen(false)}
                className="text-left max-w-full hover:text-teal-600"
              >
                Study Destinations
              </Link>

              <button
                className="ml-2"
                onClick={(e) => toggleDropdown("destinations", e)}
              >
                <FaChevronDown
                  className={`text-xs transform transition-transform ${
                    openDropdown === "destinations" ? "rotate-180 text-[#37D7D9]" : ""
                  }`}
                />
              </button>
            </div>

            <div
              id="destinations-dropdown"
              ref={refs.destinations}
              style={getDropdownStyle("destinations")}
              className="overflow-hidden bg-gray-50"
            >
              <div className="flex flex-col space-y-1 py-2">
                <Link href="/StudyDestinations/countrypage1" onClick={() => setMenuOpen(false)}>Australia</Link>
                <Link href="/StudyDestinations/countrypage3" onClick={() => setMenuOpen(false)}>Canada</Link>
                <Link href="/StudyDestinations/countrypage6" onClick={() => setMenuOpen(false)}>Germany</Link>
                <Link href="/StudyDestinations/countrypage2" onClick={() => setMenuOpen(false)}>New Zealand</Link>
                <Link href="/StudyDestinations/countrypage4" onClick={() => setMenuOpen(false)}>UK</Link>
                <Link href="/StudyDestinations/countrypage5" onClick={() => setMenuOpen(false)}>USA</Link>
              </div>
            </div>
          </div>

          {/* Counseling Dropdown */}
          <div className="max-w-full text-center">
            <div className="flex items-center justify-between max-w-full px-30">
              <Link
                href="/ourservices"
                onClick={() => setMenuOpen(false)}
                className="text-left max-w-full hover:text-teal-600"
              >
                Services
              </Link>

              <button
                className="ml-2"
                onClick={(e) => toggleDropdown("counseling", e)}
              >
                <FaChevronDown
                  className={`text-xs transform transition-transform ${
                    openDropdown === "counseling" ? "rotate-180 text-[#37D7D9]" : ""
                  }`}
                />
              </button>
            </div>

            <div
              id="counseling-dropdown"
              ref={refs.counseling}
              style={getDropdownStyle("counseling")}
              className="overflow-hidden bg-gray-50"
            >
              <div className="flex flex-col space-y-1 py-2">
                <Link href="/ourservices/services" onClick={() => setMenuOpen(false)}>AI-Powered Test</Link>
                <Link href="/ourservices/services1" onClick={() => setMenuOpen(false)}>English Language Assessment</Link>
                <Link href="/ourservices/services2" onClick={() => setMenuOpen(false)}>Community Hub</Link>
                <Link href="/ourservices/services3" onClick={() => setMenuOpen(false)}>AI Guidance & Counselor Support</Link>
              </div>
            </div>
          </div>

          {/* Top Universities Dropdown */}
          <div className="max-w-full text-center">
            <div className="flex items-center justify-between max-w-full px-30">
              Top Universities
              <button
                className="ml-2"
                onClick={(e) => toggleDropdown("universities", e)}
              >
                <FaChevronDown
                  className={`text-xs transform transition-transform ${
                    openDropdown === "universities" ? "rotate-180 text-[#37D7D9]" : ""
                  }`}
                />
              </button>
            </div>

            <div
              id="universities-dropdown"
              ref={refs.universities}
              style={getDropdownStyle("universities")}
              className="overflow-hidden bg-gray-50"
            >
              <div className="flex flex-col space-y-1 py-2">
                <Link href="/topunis/topuniversityaus" onClick={() => setMenuOpen(false)}>Australia</Link>
                <Link href="/topunis/topuniversitycan" onClick={() => setMenuOpen(false)}>Canada</Link>
                <Link href="/topunis/topuniversityger" onClick={() => setMenuOpen(false)}>Germany</Link>
                <Link href="/topunis/topuniversitynz" onClick={() => setMenuOpen(false)}>New Zealand</Link>
                <Link href="/topunis/topuniversityuk" onClick={() => setMenuOpen(false)}>UK</Link>
                <Link href="/topunis/topuniversityusa" onClick={() => setMenuOpen(false)}>USA</Link>
              </div>
            </div>
          </div>

          {/* Careers Dropdown */}
          <div className="max-w-full text-center">
            <div className="flex items-center justify-between max-w-full px-40">
              Careers
              <button
                className="ml-2"
                onClick={(e) => toggleDropdown("careers", e)}
              >
                <FaChevronDown
                  className={`text-xs transform transition-transform ${
                    openDropdown === "careers" ? "rotate-180 text-[#37D7D9]" : ""
                  }`}
                />
              </button>
            </div>

            <div
              id="careers-dropdown"
              ref={refs.careers}
              style={getDropdownStyle("careers")}
              className="overflow-hidden bg-gray-50"
            >
              <div className="flex flex-col space-y-1 py-2">
                <Link href="/maincareer/topcareer1" onClick={() => setMenuOpen(false)}>Australia</Link>
                <Link href="/maincareer/topcareer2" onClick={() => setMenuOpen(false)}>Canada</Link>
                <Link href="/maincareer/topcareer3" onClick={() => setMenuOpen(false)}>Germany</Link>
                <Link href="/maincareer/topcareer4" onClick={() => setMenuOpen(false)}>New Zealand</Link>
                <Link href="/maincareer/topcareer5" onClick={() => setMenuOpen(false)}>UK</Link>
                <Link href="/maincareer/topcareer6" onClick={() => setMenuOpen(false)}>USA</Link>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <Link
            href="/contactus/aiassistant"
            onClick={() => setMenuOpen(false)}
            className="border border-[#37D7D9] text-[#37D7D9] text-sm px-4 py-2 rounded-full hover:bg-teal-50 transition"
          >
            Edulink AI Assistant
          </Link>

          <Link
            href="/contactus"
            onClick={() => setMenuOpen(false)}
            className="bg-[#37D7D9] text-sm text-white px-4 py-2 rounded-full hover:bg-[#00B7C1] transition"
          >
            Register / Sign In
          </Link>
        </div>
      )}
    </header>
  );
}

export default Mheader;
