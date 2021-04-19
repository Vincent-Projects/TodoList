import { keyframes } from "styled-components";

export const squeezeAnimation = keyframes`
  0%,
  50%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-15deg);
  }
`;
