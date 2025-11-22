import Mc2Page0 from "@/components/Career/TopCareer6/MainCareer2/Mc2Page0/page";
import Mc2Page1 from "@/components/Career/TopCareer6/MainCareer2/Mc2Page1/page";
import Mc2Page2 from "@/components/Career/TopCareer6/MainCareer2/Mc2Page2/page";
import MC2Page4 from "@/components/Career/TopCareer6/MainCareer2/Mc2Page4/page";
import McM6page from "@/components/CareerMobile/TopCareer6Mobile/MainCareer2Mobile/McM6page/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CareerUSA3 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
        <MC2Page4/>
        <Mc2Page0/>
        <Mc2Page1/>
        <Mc2Page2/>
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
