import React from "react";
import { PageStyle, HeroImgStyle } from "./ResultsStyle";
import MatchesContainer from "../../components/Matches/MatchContainer/MatchContainer";
import samplePhoto from "../../resources/img/stock.jpeg";

function Results() {
  return (
    <PageStyle>
      <HeroImgStyle
        src={samplePhoto}
        alt="female soldier in uniform lying on floor with two daughters"
      />
      <MatchesContainer />
    </PageStyle>
  );
}

export default Results;
