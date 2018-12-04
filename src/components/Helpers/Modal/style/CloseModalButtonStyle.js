import styled from "styled-components";
import { colors } from "../../../../styles/variables";

const { blackPrimary } = colors;
export default styled.span`
  height: 2rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  color: ${blackPrimary};
  font-size: 2rem;
  opacity: 0.7;
  transform: scale(0.6);
  transition: transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  :hover {
    opacity: 0.8;
    transform: scale(1);
  }
`;
