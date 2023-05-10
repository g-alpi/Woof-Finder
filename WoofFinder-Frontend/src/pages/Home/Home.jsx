import Fotter from "../../components/Fotter";
import InsertPet from "../../components/InsertPet";
import AboutUs from "./AboutUs";
import HomePageHeader from "./HomePageHeader";
import Sponsors from "./sponsors";

export default function Home() {
  return (
    <div>
      <HomePageHeader />
      <InsertPet />
      <AboutUs />
      <Sponsors />
      <Fotter />
    </div>
  );
}
