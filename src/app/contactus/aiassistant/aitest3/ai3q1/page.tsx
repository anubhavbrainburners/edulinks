import Ai3Q1 from "@/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q1/page";
import Ai3Q1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q1M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai3Q11 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai3Q1 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai3Q1M />
            </main>
        </div>
        </>
    )
}