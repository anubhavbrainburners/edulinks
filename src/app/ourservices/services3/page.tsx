import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import Slide4Page0 from "@/components/OurServices/Services3/Slide4Page0/page";
import Slide4Page1 from "@/components/OurServices/Services3/Slide4Page1/page";
import Slide4Page2 from "@/components/OurServices/Services3/Slide4Page2/page";
import Slide4Page3 from "@/components/OurServices/Services3/Slide4Page3/page";
import Slide4_0M from "@/components/OurServicesMobile/Services4Mobile/Slide4_0M/page";

export default function Services3 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Slide4Page0 />
            <Slide4Page1 />
            <Slide4Page2 />
            <Slide4Page3 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Slide4_0M />
            </main>
        </div>
        </>
    )
}
