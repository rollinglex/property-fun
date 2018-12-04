import styled from "styled-components";
import { colors } from "../../../../styles/variables";

const { whitePrimary, blackPrimary } = colors;
const MatchModal = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  align-self: center;
  justify-content: space-around;
  background-color: ${whitePrimary};
  color: ${blackPrimary};
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    height: 90%;
    font-size: 0.8rem;
  }

  @media (max-width: 490px) {
    flex-direction: column;
    height: 90%;
    font-size: 0.6rem;
  }

  img {
    transform: scale(1.2);
  }
`;

const MatchModalDataStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

MatchModal.Data = MatchModalDataStyle;

export default MatchModal;
