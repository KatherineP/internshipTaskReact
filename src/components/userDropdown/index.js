import React from 'react';

const UserDropdown = () => {
  const users = [
    'Kate Prokofieva',
    'Alex Prokofiev',
    'Peter Smolic',
    'Hana Carpenter',
  ];

  const usersList = users.map((user) => {
    return (
      <option key={user} value={user}>
        {user}
      </option>
    );
  });
  return <>{usersList}</>;
};

export { UserDropdown };
