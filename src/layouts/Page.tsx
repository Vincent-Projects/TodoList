import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

interface PageProps {
  children: React.ReactChildren;
  className?: string;
}

const Page = ({ children, className, ...otherProps }: PageProps) => {
  return (
    <PageContainer className={className} {...otherProps}>
      {children}
    </PageContainer>
  );
};

export default Page;
