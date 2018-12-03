import React from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";
import Wrapper from "./style/ModalContainerStyle";
import CloseButton from "./style/CloseModalButtonStyle";
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
    <Wrapper yPosition={openModalPosition > 0 ? openModalPosition + "px" : 0}>
      <CloseButton onClick={toggleModal} role="button">
        X
      </CloseButton>
      <Modal modalType={modalType} modalData={modalData} />
    </Wrapper>
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
