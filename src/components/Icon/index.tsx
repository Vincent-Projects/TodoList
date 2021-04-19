import React from "react";
import { ICONS } from "components/contants";
import styled from "styled-components";

export interface IconProps {
  iconName: string;
}

const Container = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  color: rgb(${(props) => props.theme.onBg});
`;

const Icon = ({ iconName }: IconProps) => {
  const icon = ICONS.find((icon) => icon.name === iconName);
  let IconImg;

  if (icon) {
    IconImg = icon.img;
  }

  return <Container>{IconImg ? IconImg : null}</Container>;
};

export default Icon;
