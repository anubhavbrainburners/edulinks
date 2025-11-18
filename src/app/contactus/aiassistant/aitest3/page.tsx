import AiTest3Page1 from "@/components/ContactUs/AiAssistant/AiTest3/AiTest3Page1/page";
import AiTest3Page2 from "@/components/ContactUs/AiAssistant/AiTest3/AiTest3Page2/page";
import Ai3Test1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ai3Test1M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiTest3 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiTest3Page1 />
            <AiTest3Page2 />
            <Footer />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai3Test1M />
            </main>
        </div>
        </>
    )
}