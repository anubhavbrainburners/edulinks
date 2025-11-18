import Footer from "@/components/footer/page";
import TU100 from "@/components/TopUnis/TopUniversityGer/TopUni10Ger/TU100/page";
import TU101 from "@/components/TopUnis/TopUniversityGer/TopUni10Ger/TU101/page";
import TU102 from "@/components/TopUnis/TopUniversityGer/TopUni10Ger/TU102/page";
import TU103 from "@/components/TopUnis/TopUniversityGer/TopUni10Ger/TU103/page";
import TU104 from "@/components/TopUnis/TopUniversityGer/TopUni10Ger/TU104/page";
import TU105 from "@/components/TopUnis/TopUniversityGer/TopUni10Ger/TU105/page";
import TU106 from "@/components/TopUnis/TopUniversityGer/TopUni10Ger/TU106/page";
import TU107 from "@/components/TopUnis/TopUniversityGer/TopUni10Ger/TU107/page";


export default function Ger10Uni() {
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