import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  min-width: 360px;
  width: 65%;
  /* height: 90%; */
  background-image: linear-gradient(120deg, #bee2f3, #e9fcff);
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: ${props => props.yPosition};
  transform: translate(-50%, -20%);
  z-index: 10;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 400px) {
    transform: translate(-50%, -10%);
  }
`;

export default ModalContainer;
