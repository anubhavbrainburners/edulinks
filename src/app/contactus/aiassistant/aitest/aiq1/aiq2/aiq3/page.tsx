import AiQ3 from "@/components/ContactUs/AiAssistant/AiTest/Ques/AiQ3/page";
import AiQ3M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/QuesM/AiQ3M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiQ33 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiQ3 />
        </div>
        <div className="pt-21 block md:hidden">
            <Mheader />
            <main>
                <AiQ3M />
            </main>
        </div>
        </>
    )
}