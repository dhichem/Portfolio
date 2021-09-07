import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+216 20 49 49 38">+216 20 49 49 38</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hichem.dimassi@esprit.tn">hichem.dimassi@esprit.tn</LinkItem>
        </LinkColumn>
      </LinkList>

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
