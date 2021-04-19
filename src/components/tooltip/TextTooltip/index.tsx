import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ToolTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  width: fit-content;
  max-height: 13rem;
  max-width: 30rem;
  background-color: rgb(var(--bg-24dp));
  box-shadow: 1px 1px 1px rgb(var(--shadow));

  &:after {
    position: absolute;
    content: "";
    width: 0px;
    height: 0px;
    top: -20px;
    left: calc(50% - 10px);
    border: 10px;
    border-color: rgb(var(--bg-24dp));
    border-style: solid;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    transform: translateX(
      ${(props: { transform: number }) => props.transform}px
    );
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.3rem;
`;

const Content = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.45rem;
    background-color: rgba(var(--primary), 0.6);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(var(--primary));
    border-radius: 5px;
  }

  &:hover {
    overflow: auto;
  }
`;

interface TextToolTipProps {
  text: string;
  content: React.ReactChildren;
  Component: any;
}

const TextTooltip = ({ text, content, Component }: TextToolTipProps) => {
  const [transform, setTransform] = useState(0);
  const tooltip = useRef<HTMLDivElement>(null);
  const tooltipArrow = useRef<HTMLDivElement>(null);

  const computeScreenValidity = () => {
    if (tooltip && tooltip.current && tooltipArrow && tooltipArrow.current) {
      const tooltipRect = tooltip.current.getBoundingClientRect();

      if (tooltipRect.x < 0) {
        const xDiff = 0 - tooltipRect.x;
        tooltip.current.style.transform = `translateX(calc(${xDiff}px + 1rem))`;
        setTransform(0 - xDiff);
      }

      console.log(tooltipRect.y, window.screen.availHeight);

      /* if (tooltipRect.y < 0) {
        
      } */
    }
  };

  useEffect(() => {
    computeScreenValidity();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
        transform: "translateX(100px)",
      }}
    >
      <Component />
      <div
        ref={tooltip}
        style={{
          position: "absolute",
          top: "calc(100% + 15px)",
          left: "calc(0px - 15rem + 50%)",
          width: "max-content",
          height: "max-content",
        }}
      >
        <ToolTipContainer ref={tooltipArrow} transform={transform}>
          <Title>{text}</Title>
          <Content>{content}</Content>
        </ToolTipContainer>
      </div>
    </div>
  );
};

export default TextTooltip;
