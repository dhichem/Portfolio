import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, HeaderFour, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {
        projects.map(({ title, description, image, tags, source, visit, id }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>
                {
                  tags.length != 0 ?
                    <HeaderFour>Technologies used</HeaderFour> :
                    null
                }
              </TitleContent>
              <TagList>
                {
                  tags.map((tag, i) => (
                    <Tag key="i">{tag}</Tag>
                  ))
                }
              </TagList>
            </div>

            <UtilityList>
              {
                tags.length != 0 ? <>
                  <ExternalLinks href={source}>Source code</ExternalLinks>
                  <ExternalLinks href={visit}>Live preview</ExternalLinks> </> :
                  null
              }
            </UtilityList>
          </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
);

export default Projects;