import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, HeaderFour, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <section nopadding id="projects">
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
                <HeaderFour>Technologies used</HeaderFour>
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
              <ExternalLinks href={source}>Source code(github)</ExternalLinks>
              <ExternalLinks>Live preview</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))
      }
    </GridContainer>
  </section>
);

export default Projects;