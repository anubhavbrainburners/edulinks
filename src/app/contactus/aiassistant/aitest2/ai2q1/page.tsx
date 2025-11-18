import Ai2Q1 from "@/components/ContactUs/AiAssistant/AiTest2/Ques2/Ai2Q1/page";
import Ai2Q1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest2Mobile/Ques2M/Ai2Q1M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai2Q11 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai2Q1 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai2Q1M />
            </main>
        </div>
        </>
    )
}