import Ai4Q3 from "@/components/ContactUs/AiAssistant/AiTest4/Ques4/Ai4Q3/page";
import Ai4Q3M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest4Mobile/Ques4M/Ai4Q3M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai4Q33 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai4Q3 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai4Q3M />
            </main>
        </div>
        </>
    )
}