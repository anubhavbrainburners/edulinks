import AiTest4Page1 from "@/components/ContactUs/AiAssistant/AiTest4/AiTest4Page1/page";
import AiTest4Page2 from "@/components/ContactUs/AiAssistant/AiTest4/AiTest4Page2/page";
import Ai4Test1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTest4Mobile/Ai4Test1M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiTest4 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiTest4Page1 />
            <AiTest4Page2 />
            <Footer />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Ai4Test1M />
            </main>
        </div>
        </>
    )
}