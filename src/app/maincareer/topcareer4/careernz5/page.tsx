import Mc4Page0 from "@/components/Career/TopCareer4/MainCareer4/Mc4Page0/page";
import Mc4Page1 from "@/components/Career/TopCareer4/MainCareer4/Mc4Page1/page";
import Mc4Page2 from "@/components/Career/TopCareer4/MainCareer4/Mc4Page2/page";
import MC4Page4 from "@/components/Career/TopCareer4/MainCareer4/Mc4Page4/page";
import McM4page from "@/components/CareerMobile/TopCareer4Mobile/MainCareer4Mobile/McM4page/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Careernz5 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
                <MC4Page4/>
                        <Mc4Page0/>
              <Mc4Page1/>
                        <Mc4Page2/>
        <Footer/>
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <McM4page />
            </main>
        </div>
        </>
    )
}
