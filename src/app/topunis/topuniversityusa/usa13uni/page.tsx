import Footer from "@/components/footer/page";
import TU130 from "@/components/TopUnis/TopUniversityUsa/TopUni13Usa/TU130/page";
import TU131 from "@/components/TopUnis/TopUniversityUsa/TopUni13Usa/TU131/page";
import TU132 from "@/components/TopUnis/TopUniversityUsa/TopUni13Usa/TU132/page";
import TU133 from "@/components/TopUnis/TopUniversityUsa/TopUni13Usa/TU133/page";
import TU134 from "@/components/TopUnis/TopUniversityUsa/TopUni13Usa/TU134/page";
import TU135 from "@/components/TopUnis/TopUniversityUsa/TopUni13Usa/TU135/page";
import TU136 from "@/components/TopUnis/TopUniversityUsa/TopUni13Usa/TU136/page";
import TU137 from "@/components/TopUnis/TopUniversityUsa/TopUni13Usa/TU137/page";

export default function Usa13Uni() {
    return (
        <>
        <div className="pt-21">
          <TU130 />
          <TU131 />
          <TU132/>
          <TU133/>
          <TU134/>
          <TU135/>
          <TU136/>
          <TU137/>

            <Footer />
        </div>
        </>
    )
}