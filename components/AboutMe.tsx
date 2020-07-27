import React from "react";
import Link from "next/link";

const AboutMe: React.FC = () => (
  <div className="AboutMe--container">
    <div className="AboutMe--block">
      <p>👋 My name is Nasr and I work as a software engineer.</p>

      <br />
      <p>
        I am always excited to meet and learn from new people. If you'd like to
        get in touch, please email me at{" "}
        <span className="AboutMe--email"></span>
      </p>

      <br />
      <p>
        Currently, I am interested in a bunch of different topics ranging from:
      </p>
      <ul className="AboutMe--interests">
        <li>
          <a href="https://www.google.com/search?ei=9UkeX8eaLquxytMPu42p8A0&q=joseph+campbell+the+hero+with+a+thousand+faces&gs_ssp=eJzj4tTP1Tcwqog3yjNg9NLLyi9OLchQSE7MLUhKzclRKMlIVchILcpXKM8syVBIBPLzS4sT81IU0hKTU4sBSZoUfg&oq=joseph+campbell+the+hero+with+a+t&gs_lcp=CgZwc3ktYWIQAxgBMgIIADICCC4yAggAMgIIADICCAAyAggAMgIIADIGCAAQFhAeMgYIABAWEB46CgguELEDEEMQkwI6BQgAELEDOgcIABCxAxBDOgQILhBDOgQIABBDOgUILhCTAjoECAAQCjoECC4QClDbBljSF2CSI2gAcAB4AIABvAWIAbAUkgEKMTAuNS4yLjYtMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab">
            Psychology / Story Telling{" "}
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/151848.Probability_Theory">
            Probability
          </a>
        </li>
        <li>Learning how to Salsa</li>
        <li>Learning how to do a handstand</li>
        <li>and of course some Software stuff as well!</li>
      </ul>
    </div>
  </div>
);

export default AboutMe;
