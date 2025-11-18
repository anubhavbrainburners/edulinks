import Footer from "@/components/footer/page";
import TU80 from "@/components/TopUnis/TopUniversityGer/TopUni8Ger/TU80/page";
import TU81 from "@/components/TopUnis/TopUniversityGer/TopUni8Ger/TU81/page";
import TU82 from "@/components/TopUnis/TopUniversityGer/TopUni8Ger/TU82/page";
import TU83 from "@/components/TopUnis/TopUniversityGer/TopUni8Ger/TU83/page";
import TU84 from "@/components/TopUnis/TopUniversityGer/TopUni8Ger/TU84/page";
import TU85 from "@/components/TopUnis/TopUniversityGer/TopUni8Ger/TU85/page";
import TU86 from "@/components/TopUnis/TopUniversityGer/TopUni8Ger/TU86/page";
import TU87 from "@/components/TopUnis/TopUniversityGer/TopUni8Ger/TU87/page";


export default function Ger8Uni() {
    return (
        <>
        <div className="pt-21">
          <TU80 />
          <TU81 />
          <TU82/>
          <TU83/>
          <TU84/>
          <TU85/>
          <TU86/>
          <TU87/>

            <Footer />
        </div>
        </>
    )
}