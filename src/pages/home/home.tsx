import useMediaQuery from "@/hooks/useMediaQuery";
import HomeFooter from "./home-footer/home-footer";
import HomeMain from "./home-main/home-main";
import HomeHeader from "./home-header/home-header";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      <HomeHeader isMobile={isMobile} />
      <HomeMain isMobile={isMobile} />
      <HomeFooter />
    </>
  );
}
