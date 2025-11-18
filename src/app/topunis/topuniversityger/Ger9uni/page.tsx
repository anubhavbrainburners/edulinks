import Footer from "@/components/footer/page";
import TU90 from "@/components/TopUnis/TopUniversityGer/TopUni9Ger/TU90/page";
import TU91 from "@/components/TopUnis/TopUniversityGer/TopUni9Ger/TU91/page";
import TU92 from "@/components/TopUnis/TopUniversityGer/TopUni9Ger/TU92/page";
import TU93 from "@/components/TopUnis/TopUniversityGer/TopUni9Ger/TU93/page";
import TU94 from "@/components/TopUnis/TopUniversityGer/TopUni9Ger/TU94/page";
import TU95 from "@/components/TopUnis/TopUniversityGer/TopUni9Ger/TU95/page";
import TU96 from "@/components/TopUnis/TopUniversityGer/TopUni9Ger/TU96/page";
import TU97 from "@/components/TopUnis/TopUniversityGer/TopUni9Ger/TU97/page";


export default function Ger9Uni() {
    return (
        <>
        <div className="pt-21">
          <TU90 />
          <TU91 />
          <TU92/>
          <TU93/>
          <TU94/>
          <TU95/>
          <TU96/>
          <TU97/>

            <Footer />
        </div>
        </>
    )
}