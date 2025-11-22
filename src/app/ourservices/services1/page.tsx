import ExtraComponent from "@/components/ExtraComponent/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import Slide2Page0 from "@/components/OurServices/Services1/Slide2Page0/page";
import Slide2Page1 from "@/components/OurServices/Services1/Slide2Page1/page";
import Slide2Page2 from "@/components/OurServices/Services1/Slide2Page2/page";
import Slide2Page3 from "@/components/OurServices/Services1/Slide2Page3/page";
import Slide2_0M from "@/components/OurServicesMobile/Services2Mobile/Slide2_0M/page";

export default function Services () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Slide2Page0 />
            <Slide2Page1 />
            <Slide2Page2 />
            <Slide2Page3 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Slide2_0M />
            </main>
        </div>
        </>
    )
}
