import Footer from "@/components/footer/page";
import TU100 from "@/components/TopUnis/TopUniversityCan/TopUni10Can/TU100/page";
import TU101 from "@/components/TopUnis/TopUniversityCan/TopUni10Can/TU101/page";
import TU102 from "@/components/TopUnis/TopUniversityCan/TopUni10Can/TU102/page";
import TU103 from "@/components/TopUnis/TopUniversityCan/TopUni10Can/TU103/page";
import TU104 from "@/components/TopUnis/TopUniversityCan/TopUni10Can/TU104/page";
import TU105 from "@/components/TopUnis/TopUniversityCan/TopUni10Can/TU105/page";
import TU106 from "@/components/TopUnis/TopUniversityCan/TopUni10Can/TU106/page";
import TU107 from "@/components/TopUnis/TopUniversityCan/TopUni10Can/TU107/page";

export default function Can10Uni() {
    return (
        <>
        <div className="pt-21">
          <TU100 />
          <TU101 />
          <TU102/>
          <TU103/>
          <TU104/>
          <TU105/>
          <TU106/>
          <TU107/>

            <Footer />
        </div>
        </>
    )
}