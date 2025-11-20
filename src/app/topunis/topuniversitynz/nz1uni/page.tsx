import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import TU1 from "@/components/TopUnis/TopUniversityNz/TopUni1Nz/TU1/page";
import TU2 from "@/components/TopUnis/TopUniversityNz/TopUni1Nz/TU2/page";
import TU3 from "@/components/TopUnis/TopUniversityNz/TopUni1Nz/TU3/page";
import TU4 from "@/components/TopUnis/TopUniversityNz/TopUni1Nz/TU4/page";
import TU5 from "@/components/TopUnis/TopUniversityNz/TopUni1Nz/TU5/page";
import TU6 from "@/components/TopUnis/TopUniversityNz/TopUni1Nz/TU6/page";
import TU7 from "@/components/TopUnis/TopUniversityNz/TopUni1Nz/TU7/page";
import TU8 from "@/components/TopUnis/TopUniversityNz/TopUni1Nz/TU8/page";
import TU1M from "@/components/TopUniversityMobile/TopUniversityNzMobile/TopUni1NzM/TU1M/page";

export default function Nz1Uni () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TU1 />
            <TU2 />
            <TU3 />
            <TU4 />
            <TU5 />
            <TU6 />
            <TU7 />
            <TU8 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <TU1M />
            </main>
        </div>
        </>
    )
}