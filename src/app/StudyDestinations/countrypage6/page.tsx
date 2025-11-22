import Page6_0 from "@/components/CountryPage6/Page6_0/page";
import Page6_1 from "@/components/CountryPage6/Page6_1/page";
import Page6_2 from "@/components/CountryPage6/Page6_2/page";
import Page6_3 from "@/components/CountryPage6/Page6_3/page";
import Page6_4 from "@/components/CountryPage6/Page6_4/page";
import Page6_5 from "@/components/CountryPage6/Page6_5/page";
import Page6_6 from "@/components/CountryPage6/Page6_6/page";
import Page6_7 from "@/components/CountryPage6/Page6_7/page";
import Page6_0M from "@/components/CountryPageMobile6/Page6_0M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CountryPage6 () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Page6_0 />
            <Page6_1 />
            <Page6_2 />
            <Page6_3 />
            <Page6_4 />
            <Page6_5 />
            <Page6_6 />
            <Page6_7 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Page6_0M />
            </main>
        </div>
        </>
    )
}
