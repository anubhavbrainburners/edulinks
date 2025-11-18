import Footer from "@/components/footer/page";
import TU30 from "@/components/TopUnis/TopUniversityGer/TopUni3Ger/TU30/page";
import TU31 from "@/components/TopUnis/TopUniversityGer/TopUni3Ger/TU31/page";
import TU32 from "@/components/TopUnis/TopUniversityGer/TopUni3Ger/TU32/page";
import TU33 from "@/components/TopUnis/TopUniversityGer/TopUni3Ger/TU33/page";
import TU34 from "@/components/TopUnis/TopUniversityGer/TopUni3Ger/TU34/page";
import TU35 from "@/components/TopUnis/TopUniversityGer/TopUni3Ger/TU35/page";
import TU36 from "@/components/TopUnis/TopUniversityGer/TopUni3Ger/TU36/page";
import TU37 from "@/components/TopUnis/TopUniversityGer/TopUni3Ger/TU37/page";



export default function Ger3Uni() {
    return (
        <>
        <div className="pt-21">
          <TU30 />
          <TU31 />
          <TU32/>
          <TU33/>
          <TU34/>
          <TU35/>
          <TU36/>
          <TU37/>

            <Footer />
        </div>
        </>
    )
}