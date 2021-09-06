import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I am hichem.
      </SectionTitle>
      <SectionText>
        I'm a Fullstack developper.
      </SectionText>
      <Button onClick={() => window.location = "https://"}>Read more about me</Button>
    </LeftSection>
  </Section>
);

export default Hero;