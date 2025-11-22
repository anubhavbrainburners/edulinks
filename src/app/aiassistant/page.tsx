import AiMpage1 from "@/components/ContatUsMobile/AiAssistantMobile/AiMpage1/page";
import AiMpage2 from "@/components/ContatUsMobile/AiAssistantMobile/AiMpage2/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import AllTestCards from "@/components/test-cards/page";

export default function AiAssistant() {
    return (
        <>
            <div className="pt-30 hidden md:block">
                {/* <AiPage1 /> */}
                <AllTestCards />
                <Footer />
            </div>
            <div className="block md:hidden overflow-x-hidden">
                <Mheader />
                <main className="pt-21">
                    <AiMpage2 />
                </main>
            </div>
        </>
    )
}
