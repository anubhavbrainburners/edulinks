import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import TuUsa1 from "@/components/TopUnis/TopUniversityUsa/TuUsa1/page";
import TuUsa2 from "@/components/TopUnis/TopUniversityUsa/TuUsa2/page";
import TuUsa3 from "@/components/TopUnis/TopUniversityUsa/TuUsa3/page";
import TuUsa4 from "@/components/TopUnis/TopUniversityUsa/TuUsa4/page";
import TuUsa1M from "@/components/TopUniversityMobile/TopUniversityUsaMobile/TuUsa1M/page";

export default function TopUniversityUsa() {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TuUsa1 />
            <TuUsa2 />
            <TuUsa3 />
            <TuUsa4 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <TuUsa1M />
            </main>
        </div>
        </>
    )
}