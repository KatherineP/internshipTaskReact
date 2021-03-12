import React from 'react';
import './header.css';

const Header = () => {
  const users = [
    'Kate Prokofieva',
    'Alex Prokofiev',
    'Peter Smolic',
    'Hana Carpenter',
  ];

  const listOfUsers = users.map((user) => {
    return (
      <option key={user} value={user}>
        {user}
      </option>
    );
  });

  return (
    <div className="d-flex justify-content-between">
      <h1>Calendar</h1>
      <div className="d-flex">
        <div className="mr-3">
          <select className="custom-select users-filter">
            <option value="selected">All members</option>
            {listOfUsers}
          </select>
        </div>
        <div>
          <button type="button" className="btn btn-secondary new-event">
            New Event +
          </button>
        </div>
      </div>
    </div>
  );
};

export { Header };
