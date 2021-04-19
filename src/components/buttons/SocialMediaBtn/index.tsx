import React from "react";
import styled from "styled-components";
import * as constants from "components/contants";
import { squeezeAnimation } from "components/animations";

export interface SocialMediaBtnProps {
  name: string;
}

const Container = styled.div`
  width: 35px;
  height: 35px;
`;

const Button = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  transition: 300ms;

  &:hover {
    animation: ${squeezeAnimation} 300ms ease-in-out;
  }

  & * {
    width: 100%;
    height: 100%;
    color: rgb(var(--primary));
  }
`;

const SocialMediaBtn = ({ name }: SocialMediaBtnProps) => {
  const medias = constants.SOCIAL_MEDIA;
  const socialMedia = medias.find((social) => social.name === name);
  let Logo;
  let link = "";

  if (socialMedia && socialMedia.logo) {
    Logo = socialMedia.logo;
  }

  if (socialMedia && socialMedia.link) {
    link = socialMedia.link;
  }

  return (
    <Container>
      <Button href={link}>{Logo ? Logo : null}</Button>
    </Container>
  );
};

export default SocialMediaBtn;
