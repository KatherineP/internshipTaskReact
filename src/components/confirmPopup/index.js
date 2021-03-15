import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmPopup = ({ eventTitle, eventId, deleteById }) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Please authorize</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Are you sure you want to delete "${eventTitle}" event?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            No
          </Button>
          <Button variant="secondary" onClick={() => deleteById(eventId)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { ConfirmPopup };
