import React from 'react';
import './header.css';
import { UserDropdown } from '../index';
import {
  getParticipantFromFilter,
  showNewEventForm,
} from '../../store/actionCreators';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin);
  return (
    <div className="d-flex justify-content-between">
      <h1>Calendar</h1>
      <div className="d-flex">
        <div className="mr-3">
          <select
            className="custom-select users-filter"
            onChange={(e) => {
              dispatch(getParticipantFromFilter(e.target.value));
            }}
          >
            <option value="All members">All members</option>
            <UserDropdown />
          </select>
        </div>
        <div>
          {isAdmin && (
            <button
              type="button"
              className="btn btn-secondary new-event"
              onClick={() => dispatch(showNewEventForm())}
            >
              New Event +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { Header };
