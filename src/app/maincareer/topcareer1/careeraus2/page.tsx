import Mc1Page0 from "@/components/Career/TopCareer1/MainCareer1/Mc1Page0/page";
import Mc1Page1 from "@/components/Career/TopCareer1/MainCareer1/Mc1Page1/page";
import Mc1Page2 from "@/components/Career/TopCareer1/MainCareer1/Mc1Page2/page";
import MC1Page4 from "@/components/Career/TopCareer1/MainCareer1/Mc1Page4/Page";
import McMpage from "@/components/CareerMobile/TopCareer1Mobile/MainCareer1Mobile/McMpage/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CareerAus2 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
        <MC1Page4/>
        <Mc1Page0/>
        <Mc1Page1/>
        <Mc1Page2/>
        <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <McMpage />
            </main>
        </div>
        </>
    )
}
