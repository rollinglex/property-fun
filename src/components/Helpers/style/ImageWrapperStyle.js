import styled from "styled-components";
import { colors } from "../../../styles/variables";

const { grayPrimary } = colors;

const ImageWrapper = styled.div`
  min-height: 9rem;
  max-width: 200px;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  color: ${grayPrimary};
`;

export default ImageWrapper;
