import React, { useState } from "react";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleSecondary,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import Button2 from "../../styles/GlobalComponents/Button2";
import { LeftSection, RightSection } from "./HeroStyles";
import { Img } from "../Projects/ProjectsStyles";
import { AiFillCopy } from "react-icons/ai";
import Typical from "react-typical";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  const [email, setEmail] = useState("hichem.dimassi@gmail.com");
  const [action, setaction] = useState("Download CV");
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <Typewriter
            options={{
              delay: 40, // Typing delay (in milliseconds)
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("Hello, I am hichem.").start();
            }}
          />
        </SectionTitle>
        <SectionTitleSecondary>
        <Typewriter
            options={{
              delay: 50, // Typing delay (in milliseconds)
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1500)
              typewriter.typeString('A Passionate Software Engineer.').start();
            }}
          />
        </SectionTitleSecondary>
        <Button
          onClick={() => {
            setEmail("Email Copied!");
            setTimeout(() => {
              setEmail("hichem.dimassi@gmail.com");
            }, 1500);
            navigator.clipboard.writeText("hichem.dimassi@gmail.com");
          }}
        >
          {email}
          <AiFillCopy size="3rem" style={{ marginLeft: "10px" }} />
        </Button>
        <a href="/images/CV_Hichem_Dimassi.pdf" download>
          <Button2
            onClick={() => {
              setaction("Downloading...");
              setTimeout(() => {
                setaction("Download CV");
              }, 2500);
            }}
          >
            {action}
            <AiFillCopy size="3rem" style={{ marginLeft: "10px" }} />
          </Button2>
        </a>
      </LeftSection>
      <RightSection>
        <Img src="/images/macFinal.png" />
      </RightSection>
    </Section>
  );
};

export default Hero;
