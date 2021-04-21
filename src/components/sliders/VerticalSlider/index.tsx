import styled from "styled-components";

const VerticalSlider = styled.div`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(${(props) => props.theme.primary}, 0.2);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(${(props) => props.theme.primary}, 0.9);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(${(props) => props.theme.primary}, 0.7);
  }
`;

export default VerticalSlider;
