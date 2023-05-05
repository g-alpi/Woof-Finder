import Fotter from "../../components/Fotter";
import AboutUs from "./AboutUs";
import Sponsors from "./sponsors";
import HomePageHeader from "./HomePageHeader";

export default function Home() {

  return (
    <div>
      <HomePageHeader />
      <AboutUs />
      <Sponsors/>
      <Fotter />
    </div>
  );
}
