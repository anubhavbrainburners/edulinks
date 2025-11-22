import type { ReactNode } from "react";

import AiTest1 from "@/components/ContactUs/AiAssistant/AiTest/AiTest1/page";
import AiTest2 from "@/components/ContactUs/AiAssistant/AiTest/AiTest2/page";
import AiQ1 from "@/components/ContactUs/AiAssistant/AiTest/Ques/AiQ1/page";
import AiQ2 from "@/components/ContactUs/AiAssistant/AiTest/Ques/AiQ2/page";
import AiQ3 from "@/components/ContactUs/AiAssistant/AiTest/Ques/AiQ3/page";
import AiQ4 from "@/components/ContactUs/AiAssistant/AiTest/Ques/AiQ4/page";
import AiTest1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/AiTest1M/page";
import AiQ1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/QuesM/AiQ1M/page";
import AiQ2M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/QuesM/AiQ2M/page";
import AiQ3M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/QuesM/AiQ3M/page";
import AiQ4M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/QuesM/AiQ4M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

const UNIVERSITY_STEPS = [
  "intro",
  "study-destination",
  "education-background",
  "interest-areas",
  "work-style",
] as const;
type UniversityCourseStep = (typeof UNIVERSITY_STEPS)[number];

type StepContent = {
  desktop: ReactNode;
  mobile: ReactNode;
};

const STEP_VIEWS: Record<UniversityCourseStep, StepContent> = {
  intro: {
    desktop: (
      <>
        <AiTest1 />
        <AiTest2 />
        <Footer />
      </>
    ),
    mobile: <AiTest1M />,
  },
  "study-destination": {
    desktop: <AiQ1 />,
    mobile: <AiQ1M />,
  },
  "education-background": {
    desktop: <AiQ2 />,
    mobile: <AiQ2M />,
  },
  "interest-areas": {
    desktop: <AiQ3 />,
    mobile: <AiQ3M />,
  },
  "work-style": {
    desktop: <AiQ4 />,
    mobile: <AiQ4M />,
  },
};

const isUniversityStep = (
  value: string | undefined,
): value is UniversityCourseStep =>
  value !== undefined && (UNIVERSITY_STEPS as readonly string[]).includes(value);

type UniversityCoursePageProps = {
  searchParams?: {
    step?: string;
  };
};

export default function UniversityCourse({
  searchParams,
}: UniversityCoursePageProps) {
  const step = searchParams?.step;
  const activeStep = isUniversityStep(step) ? step : "intro";
  const content = STEP_VIEWS[activeStep];

  return (
    <>
      <div className="pt-21 hidden md:block">{content.desktop}</div>
      <div className="block md:hidden overflow-x-hidden">
        <Mheader />
        <main className="pt-21">{content.mobile}</main>
      </div>
    </>
  );
}
