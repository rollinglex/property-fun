import styled from "styled-components";
import { colors } from "../variables";

const { whitePrimary } = colors;
export default styled.div`
  width: 20%;
  min-width: 18rem;
  background-color: ${whitePrimary};
  box-shadow: 0px 1px 2px 1px #dcdcdc;
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem;
  padding-top: 0.5rem;
  box-sizing: border-box;
  div.card-data {
    padding: 0.5rem;
  }

  @media (max-width: 1450px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;
