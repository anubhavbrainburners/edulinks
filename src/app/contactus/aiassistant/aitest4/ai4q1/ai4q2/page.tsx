import Ai4Q2 from "@/components/ContactUs/AiAssistant/AiTest4/Ques4/Ai4Q2/page";
import Ai4Q2M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest4Mobile/Ques4M/Ai4Q2M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai4Q22 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai4Q2 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai4Q2M />
            </main>
        </div>
        </>
    )
}