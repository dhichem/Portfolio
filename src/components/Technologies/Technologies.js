import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section nopadding id="tech">
    <SectionDivider />

    <SectionTitle main>Technologies</SectionTitle>

    <SectionText>
      dslkjpzdiejf zk pzo jzo jzeoj oej^zoejêzovj       pojpojzeoj po jzpeojpeoj
      efpizepfjzpej
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS <br />
            React.js <br />
            Vue.js <br />
            Next.js
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
