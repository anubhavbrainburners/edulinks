import Footer from "@/components/footer/page";
import TU200 from "@/components/TopUnis/TopUniversityGer/TopUni20Ger/TU200/page";
import TU201 from "@/components/TopUnis/TopUniversityGer/TopUni20Ger/TU201/page";
import TU202 from "@/components/TopUnis/TopUniversityGer/TopUni20Ger/TU202/page";
import TU203 from "@/components/TopUnis/TopUniversityGer/TopUni20Ger/TU203/page";
import TU204 from "@/components/TopUnis/TopUniversityGer/TopUni20Ger/TU204/page";
import TU205 from "@/components/TopUnis/TopUniversityGer/TopUni20Ger/TU205/page";
import TU206 from "@/components/TopUnis/TopUniversityGer/TopUni20Ger/TU206/page";
import TU207 from "@/components/TopUnis/TopUniversityGer/TopUni20Ger/TU207/page";

export default function Ger20Uni() {
    return (
        <>
        <div className="pt-21">
          <TU200 />
          <TU201 />
          <TU202/>
          <TU203/>
          <TU204/>
          <TU205/>
          <TU206/>
          <TU207/>

            <Footer />
        </div>
        </>
    )
}