import React from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";
import ModalContainerStyle from "./ModalContainerStyle";
import CloseModalButtonStyle from "./CloseModalButtonStyle";
function ModalContainer({
  showModal,
  modalData,
  modalType,
  toggleModal,
  openModalPosition,
  isLiked
}) {
  //opens modal depending on ModalType

  return !showModal ? null : (
    <ModalContainerStyle
      yPosition={openModalPosition > 0 ? openModalPosition + "px" : 0}
    >
      <CloseModalButtonStyle onClick={toggleModal} role="button">
        X
      </CloseModalButtonStyle>
      <Modal modalType={modalType} modalData={modalData} />
    </ModalContainerStyle>
  );
}

ModalContainer.propTypes = {
  showModal: PropTypes.bool.isRequired,
  modalData: PropTypes.object,
  modalType: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  openModalPosition: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ModalContainer;
