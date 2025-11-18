import TC6Page0 from "@/components/Career/TopCareer6/TC6Page0/page";
import TC6Page1 from "@/components/Career/TopCareer6/TC6Page1/page";
import TC6Page2 from "@/components/Career/TopCareer6/TC6Page2/page";
import Tc6Mpage0 from "@/components/CareerMobile/TopCareer6Mobile/Tc6Mpage0/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function TopCareer6 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TC6Page0 />
            <TC6Page1 />
            <TC6Page2 />
            <Footer />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <Tc6Mpage0 />
            </main>
        </div>
        </>
    )
}