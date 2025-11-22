import type { ReactNode } from "react";

import AiTest2Page1 from "@/components/ContactUs/AiAssistant/AiTest2/AiTest2Page1/page";
import AiTest2Page2 from "@/components/ContactUs/AiAssistant/AiTest2/AiTest2Page2/page";
import Ai2Q1 from "@/components/ContactUs/AiAssistant/AiTest2/Ques2/Ai2Q1/page";
import Ai2Q2 from "@/components/ContactUs/AiAssistant/AiTest2/Ques2/Ai2Q2/page";
import Ai2Test1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest2Mobile/Ai2Test1M/page";
import Ai2Q1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest2Mobile/Ques2M/Ai2Q1M/page";
import Ai2Q2M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest2Mobile/Ques2M/Ai2Q2M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

const VISA_QUERY_STEPS = [
  "intro",
  "preferred-destination",
  "application-status",
] as const;
type VisaQueryStep = (typeof VISA_QUERY_STEPS)[number];

type StepContent = {
  desktop: ReactNode;
  mobile: ReactNode;
};

const STEP_VIEWS: Record<VisaQueryStep, StepContent> = {
  intro: {
    desktop: (
      <>
        <AiTest2Page1 />
        <AiTest2Page2 />
        <Footer />
      </>
    ),
    mobile: <Ai2Test1M />,
  },
  "preferred-destination": {
    desktop: <Ai2Q1 />,
    mobile: <Ai2Q1M />,
  },
  "application-status": {
    desktop: <Ai2Q2 />,
    mobile: <Ai2Q2M />,
  },
};

const isVisaStep = (value: string | undefined): value is VisaQueryStep =>
  value !== undefined && (VISA_QUERY_STEPS as readonly string[]).includes(value);

type VisaQueryPageProps = {
  searchParams?: {
    step?: string;
  };
};

export default function VisaQuery({ searchParams }: VisaQueryPageProps) {
  const step = searchParams?.step;
  const activeStep = isVisaStep(step) ? step : "intro";
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
