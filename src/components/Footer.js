import React from "react";
import styled, { css } from "styled-components";
import { ColorPalette } from "../utils/colors";
import { ReactComponent as AppleIcon } from "../icons/apple.svg";
import { ReactComponent as GooglePlayIcon } from "../icons/google-play-store.svg";
import { ReactComponent as TwitterIcon } from "../icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagram.svg";

const FooterWrapper = styled.footer`
  padding: 7.4rem 3.5rem;
  background-color: ${ColorPalette.footerBackground};
  display: flex;
  justify-content: space-between;
  color: ${ColorPalette.gray.text};
  font-size: 1.25rem;
  line-height: 1.36;
  letter-spacing: 0;
`;

const FooterSection = styled.div`
  ${props =>
    props.wide &&
    css`
      width: 46rem;
    `}
`;

const FooterSectionTitle = styled.h5`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.37;
  letter-spacing: 0;
  color: ${ColorPalette.footerTitle};
`;

const FooterAppLink = styled.a`
  display: inline-flex;
  width: 5.35rem;
  height: 5.35rem;
  margin-right: 2.05rem;
  align-items: center;
  justify-content: center;
  background-color: ${ColorPalette.footerAppLink};
  border-radius: 50%;
  svg {
    height: 1.8rem;
    width: auto;
  }
  cursor: pointer;
`;

const FooterLink = styled.a`
  color: ${ColorPalette.footerLink};
  cursor: pointer;
`;

const SocialLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-right: 4.05rem;

  &:last-of-type {
    margin-right: 0;
  }

  svg {
    width: 1.95rem;
    height: 1.95rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.05rem;
`;

const DownloadSectionTitle = styled(FooterSectionTitle)`
  margin-bottom: 1.85rem;
`;

const ConnectSectionTitle = styled(FooterSectionTitle)`
  margin-bottom: 3.9rem;
`;

export const Footer = ({ ...props }) => (
  <FooterWrapper {...props}>
    <FooterSection>
      <DownloadSectionTitle>Download App</DownloadSectionTitle>
      <FooterAppLink>
        <AppleIcon />
      </FooterAppLink>
      <FooterAppLink>
        <GooglePlayIcon />
      </FooterAppLink>
    </FooterSection>
    <FooterSection wide>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur
      </p>
      <FooterLinks>
        <FooterLink>Lorem ipsum dolor sit</FooterLink>
        <FooterLink>Lorem ipsum dolor sit</FooterLink>
        <FooterLink>Lorem ipsum dolor sit</FooterLink>
      </FooterLinks>
    </FooterSection>
    <FooterSection>
      <ConnectSectionTitle>Connect with Us</ConnectSectionTitle>
      <SocialLink>
        <TwitterIcon />
      </SocialLink>
      <SocialLink>
        <FacebookIcon />
      </SocialLink>
      <SocialLink>
        <InstagramIcon />
      </SocialLink>
    </FooterSection>
  </FooterWrapper>
);
