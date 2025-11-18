import AiTest5Page from "@/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page";
import AiTest5pageM from "@/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiTest5 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiTest5Page />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <AiTest5pageM />
            </main>
        </div>
        </>
    )
}