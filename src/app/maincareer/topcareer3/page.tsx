import TC3Page0 from "@/components/Career/TopCareer3/TC3Page0/page";
import TC3Page1 from "@/components/Career/TopCareer3/TC3Page1/page";
import TC3Page2 from "@/components/Career/TopCareer3/TC3Page2/page";
import Tc3Mpage0 from "@/components/CareerMobile/TopCareer3Mobile/Tc3Mpage0/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function TopCareer3 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TC3Page0 />
            <TC3Page1 />
            <TC3Page2 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Tc3Mpage0 />
            </main>
        </div>
        </>
    )
}
