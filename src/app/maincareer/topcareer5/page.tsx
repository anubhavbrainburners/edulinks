import TC5Page0 from "@/components/Career/TopCareer5/TC5Page0/page";
import TC5Page1 from "@/components/Career/TopCareer5/TC5Page1/page";
import TC5Page2 from "@/components/Career/TopCareer5/TC5Page2/page";
import Tc5Mpage0 from "@/components/CareerMobile/TopCareer5Mobile/Tc5Mpage0/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function TopCareer5 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TC5Page0 />
            <TC5Page1 />
            <TC5Page2 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Tc5Mpage0 />
            </main>
        </div>
        </>
    )
}