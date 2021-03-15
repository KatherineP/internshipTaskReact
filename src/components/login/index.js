import React, { useState } from 'react';
import { UserDropdown } from '../index';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Login = ({ getAuthUser }) => {
  const [show, setShow] = useState(true);
  const [selectValue, setSelectValue] = useState('Kate Prokofieva');
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Please authorize</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            className="custom-select auth-select"
            onChange={(e) => setSelectValue(() => e.target.value)}
          >
            <UserDropdown />
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              getAuthUser(selectValue);
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { Login };
