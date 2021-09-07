import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitleSecondary } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';
import { Img } from '../Projects/ProjectsStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I am hichem.
      </SectionTitle>
      <SectionTitleSecondary>
        I'm a Web/mobile developper.
      </SectionTitleSecondary>
      <Button onClick={() => window.location = "https://"}>Read more about me</Button>
    </LeftSection>
    <RightSection>
      <Img src="/images/macFinal.png" />
    </RightSection>
  </Section>
);

export default Hero;