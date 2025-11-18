import Ai3Q2 from "@/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page";
import Ai3Q2M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai3Q22 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai3Q2 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai3Q2M />
            </main>
        </div>
        </>
    )
}