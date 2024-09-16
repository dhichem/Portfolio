import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const date = new Date();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Full name</LinkTitle>
          <a>
            <LinkItem>hichem dimassi</LinkItem>
          </a>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+21620494938">+216 20 49 49 38</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hichem.dimassi@gmail.com">hichem.dimassi@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          © {date.getFullYear()} Hichem Dimassi
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/dhichem">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/hichem-dimassi-b86922186">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://leetcode.com/u/Gurgling_Falcon/">
            <AiFillCodepenCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>


      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
