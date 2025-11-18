import AiQ2 from "@/components/ContactUs/AiAssistant/AiTest/Ques/AiQ2/page";
import AiQ2M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/QuesM/AiQ2M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";


export default function AiQ22 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiQ2 />
        </div>
        <div className="pt-21 block md:hidden">
            <Mheader />
            <main>
                <AiQ2M />
            </main>
        </div>
        </>
    )
}