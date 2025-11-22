import Mc5Page0 from "@/components/Career/TopCareer1/MainCareer5/Mc5Page0/page";
import Mc5Page1 from "@/components/Career/TopCareer1/MainCareer5/Mc5Page1/page";
import Mc5Page2 from "@/components/Career/TopCareer1/MainCareer5/Mc5Page2/page";
import MC5Page4 from "@/components/Career/TopCareer1/MainCareer5/Mc5Page4/Page";
import McMpage from "@/components/CareerMobile/TopCareer1Mobile/MainCareer5Mobile/McMpage/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CareerAus6(){
return(
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
                <McMpage />
            </main>
        </div>
        </>
    )
}
