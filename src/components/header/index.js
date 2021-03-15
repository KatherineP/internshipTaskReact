import React, { useContext } from 'react';
import './header.css';
import { UserDropdown } from '../index';
import { UserContext } from '../index';

const Header = ({ getFilteredUser, openNewEventForm }) => {
  const authUser = useContext(UserContext);

  return (
    <div className="d-flex justify-content-between">
      <h1>Calendar</h1>
      <div className="d-flex">
        <div className="mr-3">
          <select
            className="custom-select users-filter"
            onChange={(e) => {
              getFilteredUser(e.target.value);
            }}
          >
            <option value="All members">All members</option>
            <UserDropdown />
          </select>
        </div>
        <div>
          {authUser.isAdmin && (
            <button
              type="button"
              className="btn btn-secondary new-event"
              onClick={() => openNewEventForm()}
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
