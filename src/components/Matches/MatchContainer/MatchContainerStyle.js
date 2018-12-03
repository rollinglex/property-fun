import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80vw;

  background-color: #fafafa;
  position: relative;
  left: 50%;
  top: 0;
  transform: translate(-50%, -40%);
  box-sizing: border-box;
  padding: 1rem 0;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 -30px 20px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(rgba(244, 249, 254, 0), #f4f9fe);
  border-bottom: 5px solid #f4f9fe;
  align-items: center;
  @media (max-width: 1200px) {
    transform: translate(-50%, -20%);
  }
  @media (max-width: 768px) {
    transform: translate(-50%, -10%);
  }
  @media (max-width: 500px) {
    transform: translate(-50%, 0%);
  }
  header {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin: 0.5rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    p {
      margin: 0;
    }
  }
`;
