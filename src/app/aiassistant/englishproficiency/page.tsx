import type { ReactNode } from "react";

import AiTest4Page1 from "@/components/ContactUs/AiAssistant/AiTest4/AiTest4Page1/page";
import AiTest4Page2 from "@/components/ContactUs/AiAssistant/AiTest4/AiTest4Page2/page";
import Ai4Q1 from "@/components/ContactUs/AiAssistant/AiTest4/Ques4/Ai4Q1/page";
import Ai4Q2 from "@/components/ContactUs/AiAssistant/AiTest4/Ques4/Ai4Q2/page";
import Ai4Q3 from "@/components/ContactUs/AiAssistant/AiTest4/Ques4/Ai4Q3/page";
import Ai4Test1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest4Mobile/Ai4Test1M/page";
import Ai4Q1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest4Mobile/Ques4M/Ai4Q1M/page";
import Ai4Q2M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest4Mobile/Ques4M/Ai4Q2M/page";
import Ai4Q3M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest4Mobile/Ques4M/Ai4Q3M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

const ENGLISH_STEPS = [
  "intro",
  "test-selection",
  "skill-focus",
  "confidence-level",
] as const;
type EnglishProficiencyStep = (typeof ENGLISH_STEPS)[number];

type StepContent = {
  desktop: ReactNode;
  mobile: ReactNode;
};

const STEP_VIEWS: Record<EnglishProficiencyStep, StepContent> = {
  intro: {
    desktop: (
      <>
        <AiTest4Page1 />
        <AiTest4Page2 />
        <Footer />
      </>
    ),
    mobile: <Ai4Test1M />,
  },
  "test-selection": {
    desktop: <Ai4Q1 />,
    mobile: <Ai4Q1M />,
  },
  "skill-focus": {
    desktop: <Ai4Q2 />,
    mobile: <Ai4Q2M />,
  },
  "confidence-level": {
    desktop: <Ai4Q3 />,
    mobile: <Ai4Q3M />,
  },
};

const isEnglishStep = (
  value: string | undefined,
): value is EnglishProficiencyStep =>
  value !== undefined && (ENGLISH_STEPS as readonly string[]).includes(value);

type EnglishProficiencyPageProps = {
  searchParams?: {
    step?: string;
  };
};

export default function EnglishProficiency({
  searchParams,
}: EnglishProficiencyPageProps) {
  const step = searchParams?.step;
  const activeStep = isEnglishStep(step) ? step : "intro";
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
