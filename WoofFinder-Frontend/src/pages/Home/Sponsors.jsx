import React from "react";
import fundacionLogo from "../../assets/images/fundacionLogo.jpg";
import sponsor1 from "../../assets/images/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor2.jpg";
import sponsor3 from "../../assets/images/sponsor3.jpg";
import sponsor4 from "../../assets/images/sponsor4.png";
import sponsor5 from "../../assets/images/sponsor5.jpg";

export default function Sponsors({ sponsors }) {
  return (
    <div className="Sponsors" ref={sponsors} id="sponsors">
      <h1 className="sponsorTitle">Patrocinadores</h1>
      <div className="sponsorImg">
        <img src={fundacionLogo} alt="picture" />
        <img src={sponsor1} alt="picture" />
        <img src={sponsor2} alt="picture" />
        <img src={sponsor3} alt="picture" />
        <img src={sponsor4} alt="picture" />
        <img src={sponsor5} alt="picture" />
      </div>
    </div>
  );
}
