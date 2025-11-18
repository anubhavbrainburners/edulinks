import TC4Page0 from "@/components/Career/TopCareer4/TC4Page0/page";
import TC4Page1 from "@/components/Career/TopCareer4/TC4Page1/page";
import TC4Page2 from "@/components/Career/TopCareer4/TC4Page2/page";
import Tc4Mpage0 from "@/components/CareerMobile/TopCareer4Mobile/Tc4Mpage0/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function TopCareer () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TC4Page0 />
            <TC4Page1 />
            <TC4Page2 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Tc4Mpage0 />
            </main>
        </div>
        </>
    )
}