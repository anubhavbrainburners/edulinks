import AiQ4 from "@/components/ContactUs/AiAssistant/AiTest/Ques/AiQ4/page";
import AiQ4M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/QuesM/AiQ4M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiQ44 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiQ4 />
        </div>
        <div className="pt-21 block md:hidden">
            <Mheader />
            <main>
                <AiQ4M />
            </main>
        </div>
        </>
    )
}