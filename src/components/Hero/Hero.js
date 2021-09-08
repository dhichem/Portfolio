import React, { useState } from 'react';

import { Section, SectionText, SectionTitle, SectionTitleSecondary } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';
import { Img } from '../Projects/ProjectsStyles';
import { AiFillCopy } from 'react-icons/ai';


const Hero = (props) => {
  const [email, setEmail] = useState("hichem.dimassi@esprit.tn");
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I am hichem.
        </SectionTitle>
        <SectionTitleSecondary>
          I'm a Web/mobile developper.
        </SectionTitleSecondary>
        <Button onClick={() => { setEmail("Email Copied!"); setTimeout(() => { setEmail("hichem.dimassi@esprit.tn"); }, 1500); navigator.clipboard.writeText('hichem.dimassi@esprit.tn') }}>{email}<AiFillCopy size="3rem" style={{ marginLeft: "10px" }} /></Button>
      </LeftSection>
      <RightSection>
        <Img src="/images/macFinal.png" />
      </RightSection>
    </Section>
  )
};

export default Hero;