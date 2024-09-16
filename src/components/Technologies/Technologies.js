import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section nopadding id="tech">
    <SectionDivider />

    <SectionTitle main>Technologies</SectionTitle>

    <SectionText>
      I've worked with a variety of technologies and framework in web/mobile development from frontend to backend.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS <br />
            JavaScript <br />
            React.js <br />
            Vue.js <br />
            Next.js <br />
            Nuxt.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Experience with databases <br />
            symfony <br />
            Laravel <br />
            Spring 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Mobile development</ListTitle>
          <ListParagraph>
            React Native <br />
            Flutter <br />
            Android Studio <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
