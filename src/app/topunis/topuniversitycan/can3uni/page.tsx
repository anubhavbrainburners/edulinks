import Footer from "@/components/footer/page";

import TU30 from "@/components/TopUnis/TopUniversityCan/TopUni3Can/TU30/page";
import TU31 from "@/components/TopUnis/TopUniversityCan/TopUni3Can/TU31/page";
import TU32 from "@/components/TopUnis/TopUniversityCan/TopUni3Can/TU32/page";
import TU33 from "@/components/TopUnis/TopUniversityCan/TopUni3Can/TU33/page";
import TU34 from "@/components/TopUnis/TopUniversityCan/TopUni3Can/TU34/page";
import TU35 from "@/components/TopUnis/TopUniversityCan/TopUni3Can/TU35/page";
import TU36 from "@/components/TopUnis/TopUniversityCan/TopUni3Can/TU36/page";
import TU37 from "@/components/TopUnis/TopUniversityCan/TopUni3Can/TU37/page";

export default function Can3Uni() {
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