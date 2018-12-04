import React from "react";
import PropTypes from "prop-types";

import MatchModal from "./MatchModal";

function ModalController({ modalType, modalData }) {
  switch (modalType) {
    case "match":
      return <MatchModal modalData={modalData} />;
    default:
      return null;
  }
}
ModalController.propTypes = {
  modalType: PropTypes.string.isRequired,
  modalData: PropTypes.object
};
export default ModalController;
