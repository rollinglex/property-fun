import React from "react";
import Wrapper from "./ResultsStyle";
import MatchesContainer from "../../components/Matches/MatchContainer";
import samplePhoto from "../../resources/img/stock.jpeg";

function Results() {
  return (
    <Wrapper>
      <img
        src={samplePhoto}
        alt="female soldier in uniform lying on floor with two daughters"
      />
      <MatchesContainer />
    </Wrapper>
  );
}

export default Results;
