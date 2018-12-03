import styled from "styled-components";
import { colors } from "../../styles/variables";

const { backgroundPrimary } = colors;

export default styled.div`
  background-color: ${backgroundPrimary};
  height: 100%;
  width: 100%;
  padding: 0 0 0rem;
  overflow-y: auto;
  overflow-x: hidden;
  > img {
    width: 100vw;
  }
`;
