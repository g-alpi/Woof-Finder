import Fotter from "../../components/Fotter";
import InsertPet from "../../components/InsertPet";
import AboutUs from "./AboutUs";
import HomePageHeader from "./HomePageHeader";

export default function Home() {
  return (
    <div>
      <HomePageHeader />
      <InsertPet />
      <AboutUs />
      <Fotter />
    </div>
  );
}
