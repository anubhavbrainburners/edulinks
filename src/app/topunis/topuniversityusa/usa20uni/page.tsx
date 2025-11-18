import Footer from "@/components/footer/page";
import TU200 from "@/components/TopUnis/TopUniversityUsa/TopUni20Usa/TU200/page";
import TU201 from "@/components/TopUnis/TopUniversityUsa/TopUni20Usa/TU201/page";
import TU202 from "@/components/TopUnis/TopUniversityUsa/TopUni20Usa/TU202/page";
import TU203 from "@/components/TopUnis/TopUniversityUsa/TopUni20Usa/TU203/page";
import TU204 from "@/components/TopUnis/TopUniversityUsa/TopUni20Usa/TU204/page";
import TU205 from "@/components/TopUnis/TopUniversityUsa/TopUni20Usa/TU205/page";
import TU206 from "@/components/TopUnis/TopUniversityUsa/TopUni20Usa/TU206/page";
import TU207 from "@/components/TopUnis/TopUniversityUsa/TopUni20Usa/TU207/page";


export default function Usa20Uni() {
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