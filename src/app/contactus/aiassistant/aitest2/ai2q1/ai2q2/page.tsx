import Ai2Q2 from "@/components/ContactUs/AiAssistant/AiTest2/Ques2/Ai2Q2/page";
import Ai2Q2M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest2Mobile/Ques2M/Ai2Q2M/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Ai2Q22 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Ai2Q2 />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai2Q2M />
            </main>
        </div>
        </>
    )
}