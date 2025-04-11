import MainHeader from "../Components/Home/MainHeader";
import MainBanner from "../Components/Home/MainBanner";
import MainInfoCard from "../Components/Home/MainInfoCard";
import MainFooter from "../Components/Home/MainFooter";
import mainImg from "../assets/main.png";
import footerImg from "../assets/footer.png";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <MainBanner
        title={"일상의 모든 물건을"}
        title2={" 거래해보세요"}
        buttonText="구경하러 가기"
        image={mainImg}
        showButton={true}
        height="340px"
        margintop="70px"
      />
      <MainInfoCard />
      <div className="hidden pc:block h-[138px] bg-[#FCFCFC]"></div>
      <MainBanner
        title={"믿을 수 있는"}
        title2={"판다마켓 중고거래"}
        buttonText="구경하러 가기"
        image={footerImg}
        showButton={false}
        height="397px"
      />
      <MainFooter />
    </>
  );
};

export default HomePage;
