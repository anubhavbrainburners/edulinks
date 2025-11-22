import McPage0 from "@/components/Career/TopCareer3/MainCareer/McPage0/page";
import McPage1 from "@/components/Career/TopCareer3/MainCareer/McPage1/page";
import McPage2 from "@/components/Career/TopCareer3/MainCareer/Mcpage2/page";
import MCPage4 from "@/components/Career/TopCareer3/MainCareer/McPage4/page";
import McM3page from "@/components/CareerMobile/TopCareer3Mobile/MainCareerMobile/McM3page/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CareerGer () {
    return (
        <>
        <div className="pt-21 hidden md:block">
        <MCPage4/>
        <McPage0/>
        <McPage1/>
        <McPage2/>
        <Footer/>
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <McM3page />
            </main>
        </div>
        </>
    )
}
