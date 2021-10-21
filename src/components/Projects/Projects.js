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
        projects.map(({ title, description, image, tags, source, visit, id, type }) => (
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
                type === "view&code" ? <>
                  <ExternalLinks href={source} target="_blank" rel="noreferrer noopener">Source code</ExternalLinks>
                  <ExternalLinks href={visit} target="_blank" rel="noreferrer noopener">Live preview</ExternalLinks> </>

                  : type === "noview" ?
                    <ExternalLinks href={source} target="_blank" rel="noreferrer noopener">Source code</ExternalLinks>

                    : type === "nocode" ?
                      <ExternalLinks href={visit} target="_blank" rel="noreferrer noopener">Live preview</ExternalLinks>

                      : type === "code&video" ? <>
                        <ExternalLinks href={source} target="_blank" rel="noreferrer noopener">Source code</ExternalLinks>
                        <ExternalLinks href={visit} target="_blank" rel="noreferrer noopener">check out video</ExternalLinks> </>

                        :
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