import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import TuGer1 from "@/components/TopUnis/TopUniversityGer/TuGer1/page";
import TuGer2 from "@/components/TopUnis/TopUniversityGer/TuGer2/page";
import TuGer3 from "@/components/TopUnis/TopUniversityGer/TuGer3/page";
import TUGer4 from "@/components/TopUnis/TopUniversityGer/TuGer4/page";
import TuGer1M from "../../../components/TopUniversityMobile/TopUniversityGerMobile/TuGer1M/page";

export default function TopUniversityGer () {
    return (
        <>
    <div className="pt-21 hidden md:block">
        <TuGer1 />
        <TuGer2 />
        <TuGer3 />
        <TUGer4 />
        <Footer />
    </div>
    <div className="block md:hidden overflow-x-hidden">
        <Mheader />
        <main className="pt-21">
            <TuGer1M />
        </main>
    </div>
    </>
    )
}