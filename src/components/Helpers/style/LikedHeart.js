import styled from "styled-components";

import { colors } from "../../../styles/variables";

const { likedPrimary, likedSecondary } = colors;
export const NotLikedHeart = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: black;
  color: white;
  border-bottom-left-radius: 7px;
  transform: rotate(0deg) scale(0.8);
  transition: transform 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  ::after,
  ::before {
    content: "";
    height: 1rem;
    width: 1rem;
    background-color: black;
    border-radius: 50%;
  }
  ::after {
    position: absolute;
  }
  ::before {
    position: absolute;
  }
  &:hover {
    transform: rotate(45deg) scale(1.2);
    background-color: ${likedSecondary};
    border-bottom-left-radius: 0px;
    border-top-right-radius: 0px;
    cursor: pointer;
  }
  &:hover::before {
    left: -0.5rem;
    background-color: ${likedSecondary};
  }
  &:hover::after {
    top: -0.5rem;
    background-color: ${likedSecondary};
  }
`;

export const LikedHeart = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${likedPrimary};
  transform: rotate(45deg) scale(1.2);
  ::after,
  ::before {
    content: "";
    height: 1rem;
    width: 1rem;
    background-color: ${likedPrimary};
    border-radius: 50%;
  }
  ::after {
    position: absolute;
    left: -0.5rem;
  }
  ::before {
    position: absolute;
    top: -0.5rem;
  }
`;
