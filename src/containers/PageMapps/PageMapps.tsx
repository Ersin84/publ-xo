import SectionHero from "components/SectionHero/SectionHero";
import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";


export interface PageMappsProps {
  className?: string;
}

const PageMapps: FC<PageMappsProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageMapps overflow-hidden relative ${className}`}
      data-nc-id="PageMapps"
    >
      <Helmet>
        <title>Mapps || Blog Magazine React Template</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Mapps."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create 
distinctive, world-class programmes and content which inform, educate 
and entertain millions of people in the around the world."
        />

        <SectionFounder />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionStatistic />
        </div>

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageMapps;


