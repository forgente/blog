import footerCss from "./footer.module.css";
import ActionCard from "../ActionCard";
import FossIcon from "./foss.svg";
import React from "react";
import SvgImage from "../SvgImage";

export const ActionFooter = () => (
  <div className={footerCss.cards}>
    <ActionCard
      icon={
        <SvgImage
          image={<FossIcon />}
          title="An icon showing wave propagation"
        />
      }
      svgBackgroundColor="#ffffff"
      title="Join our community"
      description="Forgente is open source. Star the repo on GitHub, and join our community on Discord!"
    >
      <a
        className={footerCss.card__link}
        href={'https://github.com/forgente/forgente'}
        rel="noopener noreferrer"
        target="_blank"
      >
        Go to GitHub&nbsp;&nbsp;&gt;
      </a>
      <a
        className={footerCss.card__link}
        href={'https://discord.gg/nsvJVRbfg'}
        rel="noopener noreferrer"
        target="_blank"
      >
        Join Discord&nbsp;&nbsp;&gt;
      </a>
    </ActionCard>
  </div>
)
