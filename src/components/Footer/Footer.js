import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Full name</LinkTitle>
          <a href="/images/vueTracker.png" download>
            <LinkItem>hichem dimassi</LinkItem>
          </a>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+216 20 49 49 38">+216 20 49 49 38</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hichem.dimassi@gmail.com">hichem.dimassi@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <Slogan>I'm open for internship opportunities!</Slogan>

      <SocialIconsContainer>
        <CompanyContainer>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/dhichem">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/hichem-dimassi-b86922186">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.codewars.com/users/dhichem">
            <AiFillCodepenCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>


      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
