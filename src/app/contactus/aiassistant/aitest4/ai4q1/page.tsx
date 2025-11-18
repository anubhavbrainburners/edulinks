import Ai4Q1 from "@/components/ContactUs/AiAssistant/AiTest4/Ques4/Ai4Q1/page";
import Ai4Q1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest4Mobile/Ques4M/Ai4Q1M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai4Q11 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai4Q1 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai4Q1M />
            </main>
        </div>
        </>
    )
}