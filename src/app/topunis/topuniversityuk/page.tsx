import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import TuUk1 from "@/components/TopUnis/TopUniversityUk/TuUk1/page";
import TuUk2 from "@/components/TopUnis/TopUniversityUk/TuUk2/page";
import TuUk3 from "@/components/TopUnis/TopUniversityUk/TuUk3/page";
import TuUk4 from "@/components/TopUnis/TopUniversityUk/TuUk4/page";
import TuUk1M from "@/components/TopUniversityMobile/TopUniversityUkMobile/TuUk1M/page";

export default function TopUniversityNz() {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TuUk1 />
            <TuUk2 />
            <TuUk3 />
            <TuUk4 />
            <Footer />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <TuUk1M />
            </main>
        </div>
        </>
    )
}