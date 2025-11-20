import Mc1Page0 from "@/components/Career/TopCareer6/MainCareer1/Mc1Page0/page";
import Mc1Page1 from "@/components/Career/TopCareer6/MainCareer1/Mc1Page1/page";
import Mc1Page2 from "@/components/Career/TopCareer6/MainCareer1/Mc1Page2/page";
import MC1Page4 from "@/components/Career/TopCareer6/MainCareer1/Mc1Page4/page";
import McM6page from "@/components/CareerMobile/TopCareer6Mobile/MainCareer1Mobile/McM6page/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CareerUSA2 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
        <MC1Page4/>
        
        <Mc1Page0/>
        <Mc1Page1/>
        <Mc1Page2/>
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