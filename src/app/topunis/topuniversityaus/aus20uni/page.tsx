import Footer from "@/components/footer/page";
import TU201 from "@/components/TopUnis/TopUniversityAus/TopUni20Aus/TU201/page";
import TU202 from "@/components/TopUnis/TopUniversityAus/TopUni20Aus/TU202/page";
import TU203 from "@/components/TopUnis/TopUniversityAus/TopUni20Aus/TU203/page";
import TU204 from "@/components/TopUnis/TopUniversityAus/TopUni20Aus/TU204/page";
import TU205 from "@/components/TopUnis/TopUniversityAus/TopUni20Aus/TU205/page";
import TU206 from "@/components/TopUnis/TopUniversityAus/TopUni20Aus/TU206/page";
import TU207 from "@/components/TopUnis/TopUniversityAus/TopUni20Aus/TU207/page";
import TU208 from "@/components/TopUnis/TopUniversityAus/TopUni20Aus/TU208/page";

export default function Aus20Uni () {
    return (
        <div className="pt-21">
            <TU201 />
            <TU202 />
            <TU203 />
            <TU204 />
            <TU205 />
            <TU206 />
            <TU207 />
            <TU208 />
            <Footer />
        </div>
    )
}