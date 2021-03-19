import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvent } from '../../store/middleware';
import { closePopup } from '../../store/actionCreators';

const ConfirmPopup = ({ confirmationPopup }) => {
  const dispatch = useDispatch();
  const deletedEvent = useSelector((state) => state.deletedEvent);
  const { eventText, id } = deletedEvent;
  const handleClose = () => dispatch(closePopup());

  return (
    <div>
      <Modal
        show={confirmationPopup}
        onHide={handleClose}
        keyboard={false}
        centered
      >
        <Modal.Body>
          {`Are you sure you want to delete "${eventText}" event?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(closePopup())}>
            No
          </Button>
          <Button variant="secondary" onClick={() => dispatch(deleteEvent(id))}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { ConfirmPopup };
