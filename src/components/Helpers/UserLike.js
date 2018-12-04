import React from "react";
import PropTypes from "prop-types";

import UserLikeStyle from "./style/UserLike";
import { NotLikedHeart, LikedHeart } from "./style/LikedHeart";

function UserLike({
  isLiked,
  targetId,
  toggleLikeHandler,
  left,
  right,
  top,
  bottom
}) {
  return (
    <UserLikeStyle left={left} right={right} top={top} bottom={bottom}>
      {!isLiked ? (
        <NotLikedHeart onClick={e => toggleLikeHandler(e, targetId)} />
      ) : (
        <LikedHeart onClick={e => toggleLikeHandler(e, targetId)} />
      )}
    </UserLikeStyle>
  );
}

UserLike.proptypes = {
  isLiked: PropTypes.bool.isRequired,
  toggleLikeHandler: PropTypes.func.isRequired,
  targetId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default UserLike;
