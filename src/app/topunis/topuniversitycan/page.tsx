import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import TuCan1 from "@/components/TopUnis/TopUniversityCan/TuCan1/page";
import TuCan2 from "@/components/TopUnis/TopUniversityCan/TuCan2/page";
import TuCan3 from "@/components/TopUnis/TopUniversityCan/TuCan3/page";
import TuCan4 from "@/components/TopUnis/TopUniversityCan/TuCan4/page";
import TuCan1M from "@/components/TopUniversityMobile/TopUniverityCanMobile/TuCan1M/page";

export default function TopUniversityCan() {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TuCan1 />
            <TuCan2 />
            <TuCan3 />
            <TuCan4 />
            <Footer />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <TuCan1M />
            </main>
        </div>
        </>
    )
}
