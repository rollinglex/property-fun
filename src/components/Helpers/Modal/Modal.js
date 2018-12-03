import React from "react";
import PropTypes from "prop-types";

import MatchModal from "./MatchModal/MatchModal";

function Modal({ modalType, modalData }) {
  switch (modalType) {
    case "match":
      return <MatchModal modalData={modalData} />;
    default:
      return null;
  }
}
Modal.propTypes = {
  modalType: PropTypes.string.isRequired,
  modalData: PropTypes.object
};
export default Modal;
