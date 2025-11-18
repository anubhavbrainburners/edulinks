import AiQ1 from "@/components/ContactUs/AiAssistant/AiTest/Ques/AiQ1/page";
import AiQ1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/QuesM/AiQ1M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiQ () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiQ1 />
        </div>
        <div className="pt-21 block md:hidden">
            <Mheader />
            <main>
                <AiQ1M />
            </main>
        </div>
        </>
    )
}