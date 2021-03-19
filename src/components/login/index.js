import React from 'react';
import { UserDropdown } from '../index';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthUser, login } from '../../store/actionCreators';

const Login = () => {
  const dispatch = useDispatch();
  const showLoginPopUp = useSelector((state) => state.showLoginPopUp);

  return (
    <div>
      <Modal show={showLoginPopUp} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>Please authorize</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            className="custom-select auth-select"
            onChange={(e) => {
              dispatch(getAuthUser(e.target.value));
            }}
          >
            <UserDropdown />
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(login());
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
