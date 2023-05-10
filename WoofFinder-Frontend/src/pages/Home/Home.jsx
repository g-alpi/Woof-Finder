import { useEffect, useState } from "react";
import Fotter from "../../components/Fotter";
import AboutUs from "./AboutUs";
import HomePageHeader from "./HomePageHeader";
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
