import Mc3Page0 from "@/components/Career/TopCareer6/MainCareer3/Mc3Page0/page";
import Mc3Page1 from "@/components/Career/TopCareer6/MainCareer3/Mc3Page1/page";
import Mc3Page2 from "@/components/Career/TopCareer6/MainCareer3/Mc3Page2/page";
import MC3Page4 from "@/components/Career/TopCareer6/MainCareer3/Mc3Page4/page";
import McM6page from "@/components/CareerMobile/TopCareer6Mobile/MainCareer3Mobile/McM6page/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CareerUSA4 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
        <MC3Page4/>
        <Mc3Page0/>
        <Mc3Page1/>
        <Mc3Page2/>
        <Footer/>
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <McM6page />
            </main>
        </div>
        </>
    )
}
