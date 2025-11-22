import Mc5Page0 from "@/components/Career/TopCareer2/MainCareer5/Mc5Page0/page";
import Mc5Page1 from "@/components/Career/TopCareer2/MainCareer5/Mc5Page1/page";
import Mc5Page2 from "@/components/Career/TopCareer2/MainCareer5/Mc5Page2/page";
import MC5Page4 from "@/components/Career/TopCareer2/MainCareer5/Mc5Page4/page";
import McM2page from "@/components/CareerMobile/TopCareer2Mobile/MainCareer5Mobile/McM2page/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CareerCan6 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <MC5Page4/>
            <Mc5Page0/>
            <Mc5Page1/>
            <Mc5Page2/>
        <Footer/>
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <McM2page />
            </main>
        </div>
        </>
    )
}
