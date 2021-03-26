import React from "react";
import styled, { keyframes } from 'styled-components';

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(1rem);
    opacity: 1;
  }
`;

const NotificationContainer = styled.div`
  width: 90%;
  background-color: rgb(var(--surface));
  color: rgb(var(--success));
  padding: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  font-weight: bold;
  position: fixed;
  top: 2rem;
  left: 5%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: 1px 1px 1px rgb(var(--shadow));
  animation: ${slideDownAnimation} 1s ease-in-out forwards;
`;

interface TextProps {
  error: boolean;
}

const Text = styled.p<TextProps>`
  color: ${props => props.error ? "rgb(var(--error))" : null} 
`;

export interface GenericNotificationProps {
  text: string;
  error?: boolean;
  actions?: any; // Need to find out how to change this to allow single button, multiple button or a list of button ? That extends a components or type actionable
}

const GenericNotification = ({ text, error = false, actions }: GenericNotificationProps) => {
  return (
    <NotificationContainer>
      <Text error={error}>
        {text}
      </Text>
      {actions}
    </NotificationContainer>
  );
}

export default GenericNotification;