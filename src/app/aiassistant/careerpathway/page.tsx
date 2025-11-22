'use client';
import type { ReactNode } from "react";

import AiTest3Page1 from "@/components/ContactUs/AiAssistant/AiTest3/AiTest3Page1/page";
import AiTest3Page2 from "@/components/ContactUs/AiAssistant/AiTest3/AiTest3Page2/page";
import Ai3Q1 from "@/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q1/page";
import Ai3Q2 from "@/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page";
import Ai3Q3 from "@/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q3/page";
import Ai3Q4 from "@/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q4/page";
import Ai3Test1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ai3Test1M/page";
import Ai3Q1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q1M/page";
import Ai3Q2M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page";
import Ai3Q3M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q3M/page";
import Ai3Q4M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q4M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

const CAREER_STEPS = [
  "intro",
  "career-destination",
  "career-education",
  "career-interests",
  "career-work-style",
] as const;
type CareerPathwayStep = (typeof CAREER_STEPS)[number];

type StepContent = {
  desktop: ReactNode;
  mobile: ReactNode;
};

const STEP_VIEWS: Record<CareerPathwayStep, StepContent> = {
  intro: {
    desktop: (
      <>
        <AiTest3Page1 />
        <AiTest3Page2 />
        <Footer />
      </>
    ),
    mobile: <Ai3Test1M />,
  },
  "career-destination": {
    desktop: <Ai3Q1 />,
    mobile: <Ai3Q1M />,
  },
  "career-education": {
    desktop: <Ai3Q2 />,
    mobile: <Ai3Q2M />,
  },
  "career-interests": {
    desktop: <Ai3Q3 />,
    mobile: <Ai3Q3M />,
  },
  "career-work-style": {
    desktop: <Ai3Q4 />,
    mobile: <Ai3Q4M />,
  },
};

const isCareerStep = (
  value: string | undefined,
): value is CareerPathwayStep =>
  value !== undefined && (CAREER_STEPS as readonly string[]).includes(value);

type CareerPathwayPageProps = {
  searchParams?: {
    step?: string;
  };
};

export default function CareerPathway({ searchParams }: CareerPathwayPageProps) {
  const step = searchParams?.step;
  const activeStep = isCareerStep(step) ? step : "intro";
  const content = STEP_VIEWS[activeStep];

  return (
    <>
      <div className="pt-21 hidden md:block">{content.desktop}</div>
      <div className="block md:hidden">
        <Mheader />
        <main className="pt-21">{content.mobile}</main>
      </div>
    </>
  );
}
