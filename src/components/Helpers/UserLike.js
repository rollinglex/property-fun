import React from "react";
import PropTypes from "prop-types";

import { UserLikeStyle } from "../../styles/Helpers";
import { NotLikedHeartStyle, LikedHeartStyle } from "../../styles/Helpers";

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
        <NotLikedHeartStyle onClick={e => toggleLikeHandler(e, targetId)} />
      ) : (
        <LikedHeartStyle onClick={e => toggleLikeHandler(e, targetId)} />
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
