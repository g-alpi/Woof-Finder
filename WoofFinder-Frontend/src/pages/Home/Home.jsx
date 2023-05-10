import { useRef } from "react";
import Fotter from "../../components/Fotter";
import InsertPet from "../../components/InsertPet";
import AboutUs from "./AboutUs";
import HomePageHeader from "./HomePageHeader";
import Sponsors from "./sponsors";

export default function Home() {
  const aboutUs = useRef(null);

  const scrollToAboutUs = () => {
    aboutUs.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const sponsors = useRef(null);

  const scrollToSponsors = () => {
    sponsors.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div>
      <HomePageHeader
        scrollToAboutUs={scrollToAboutUs}
        scrollToSponsors={scrollToSponsors}
      />
      <InsertPet />
      <AboutUs aboutUs={aboutUs} />
      <Sponsors sponsors={sponsors} />
      <Fotter />
    </div>
  );
}
