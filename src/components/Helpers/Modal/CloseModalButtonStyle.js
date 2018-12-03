import styled from "styled-components";

export default styled.span`
  height: 2rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  color: #989;
  font-size: 2rem;
  opacity: 0.7;
  transform: scale(0.8);
  transition: transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  :hover {
    opacity: 1;
    transform: scale(1);
  }
`;
