import AiTest2Page1 from "@/components/ContactUs/AiAssistant/AiTest2/AiTest2Page1/page";
import AiTest2Page2 from "@/components/ContactUs/AiAssistant/AiTest2/AiTest2Page2/page";
import Ai2Test1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest2Mobile/Ai2Test1M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiTest2 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiTest2Page1 />
            <AiTest2Page2 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Ai2Test1M />
            </main>
        </div>
        </>
    )
}