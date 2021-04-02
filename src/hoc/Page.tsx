import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(var(--bg-1dp));
  box-shadow: inset 0px 1px 1px rgb(var(--shadow));
  
  @media only screen and (min-width: 786px) {
    box-shadow: inset 1px 0px 1px rgb(var(--shadow));
  }
`;

interface PageProps {
  children: React.ReactChildren,
  className?: string
}

const Page = ({ children, className, ...otherProps }: PageProps) => {
  return (
    <PageContainer className={className} {...otherProps}>
      {children}
    </PageContainer>
  );
};

export default Page;