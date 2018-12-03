import styled from "styled-components";
import { colors } from "../../styles/variables";
import HeroImg from "./HeroImg";

const { backgroundPrimary } = colors;

export const PageStyle = styled.div`
  background-color: ${backgroundPrimary};
  height: 100%;
  width: 100%;
  padding: 0 0 0rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const HeroImgStyle = HeroImg;
