import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import TuNz1 from "@/components/TopUnis/TopUniversityNz/TuNz1/page";
import TuNz2 from "@/components/TopUnis/TopUniversityNz/TuNz2/page";
import TuNz3 from "@/components/TopUnis/TopUniversityNz/TuNz3/page";
import TuNz4 from "@/components/TopUnis/TopUniversityNz/TuNz4/page";
import TuNz1M from "@/components/TopUniversityMobile/TopUniversityNzMobile/TuNz1M/page";

export default function TopUniversityNz () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TuNz1 />
            <TuNz2 />
            <TuNz3 />
            <TuNz4 />
            <Footer />
        </div>
        <div className="block md:hidden">
            <Mheader />
            <main className="pt-21">
                <TuNz1M />
            </main>
        </div>
        </>
    )
}