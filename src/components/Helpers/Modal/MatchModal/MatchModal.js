import React from "react";
import PropTypes from "prop-types";

import MatchModalStyle from "./MatchModalStyle";
import { ImgWithStatusText } from "../../Helpers";

function MatchModal({ modalData }) {
  const {
    location: address,
    name,
    pricePerMonth,
    thumbnail,
    yPosition
  } = modalData;
  return (
    <MatchModalStyle yPosition={yPosition}>
      <ImgWithStatusText imgSrc={thumbnail} altText="stock house" />
      <MatchModalStyle.Data>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Rent:</strong> ${pricePerMonth} / month
        </p>
      </MatchModalStyle.Data>
    </MatchModalStyle>
  );
}

MatchModal.propTypes = {
  modalData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    pricePerMonth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    location: PropTypes.string
  }).isRequired
};

export default MatchModal;
