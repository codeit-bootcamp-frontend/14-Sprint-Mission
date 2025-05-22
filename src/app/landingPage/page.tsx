import Footer from "@/components/Footer";
import HotItem from "@/components/HotItem";
import LandingBottomComponent from "@/components/LandingBottomComponent";
import LandingExploreSection from "@/components/LandingExploreSection";
import LandingPageHeader from "@/components/LandingPageHeader";
import LandingRegisterComponent from "@/components/LandingRegisterComponent";
import LandingSearchComponent from "@/components/LandingSearchComponent";

export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center my-[9.5px]">
        <LandingPageHeader />
      </div>

      <main>
        <LandingExploreSection />

        <HotItem />
        <LandingSearchComponent />
        <LandingRegisterComponent />

        <LandingBottomComponent />
      </main>

      <Footer />
    </div>
  );
}
