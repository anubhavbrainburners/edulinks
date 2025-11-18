import Ai3Q3 from "@/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q3/page";
import Ai3Q3M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q3M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai3Q33 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai3Q3 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai3Q3M />
            </main>
        </div>
        </>
    )
}