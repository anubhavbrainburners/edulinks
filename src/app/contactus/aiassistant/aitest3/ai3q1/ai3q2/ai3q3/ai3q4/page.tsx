import Ai3Q4 from "@/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q4/page";
import Ai3Q4M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q4M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai3Q44 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai3Q4 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai3Q4M />
            </main>
        </div>
        </>
    )
}