import React from "react";
import PropTypes from "prop-types";

import { CardStyle } from "../../styles/Cards";
import { UserLike } from "../Helpers";
import { ImgWithStatusText } from "../Helpers";
import noImage from "../../resources/img/no-image.png";

function Match(props) {
  const { property, toggleModal, isLiked, toggleLikeHandler } = props;
  const { id, name, thumbnail, pricePerMonth, location } = property;
  return (
    <CardStyle onClick={event => toggleModal(event, property)}>
      {thumbnail ? (
        <ImgWithStatusText imgSrc={thumbnail} altText="stock house" />
      ) : (
        <img src={noImage} alt="no file placeholder" />
      )}
      <div className="card-data">
        <UserLike
          isLiked={isLiked}
          targetId={id}
          toggleLikeHandler={toggleLikeHandler}
          left="90%"
          top="1.1rem"
        />
        <p>
          <strong>${pricePerMonth} / month</strong>
        </p>
        <p>
          <strong>{name}</strong>
        </p>
        <p>{location}</p>
      </div>
    </CardStyle>
  );
}

Match.proptypes = {
  toggleLikeHandler: PropTypes.func,
  toggleModal: PropTypes.func,
  isLiked: PropTypes.bool,
  property: PropTypes.object.isRequired
};

export default Match;
