import React from 'react';
import './calendarTable.css';
import { TableCell } from '../index';
import { time } from '../../config';

const CalendarTable = ({ eventsFromServer, deleteById }) => {
  const classes = [
    'cell-mon-',
    'cell-tue-',
    'cell-wed-',
    'cell-thu-',
    'cell-fri-',
  ];

  const rows = time.map((time) => (
    <tr key={time + Math.floor(Math.random() * 100)}>
      <th scope="row">{time}</th>
      {classes.map((className) => (
        <TableCell
          className={className}
          time={time.slice(0, 2)}
          key={className}
          eventsFromServer={eventsFromServer}
          deleteById={deleteById}
        />
      ))}
    </tr>
  ));

  return (
    <table className="table table-bordered text-center">
      <thead className="table-secondary">
        <tr>
          {['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((col) => (
            <th scope="col" key={col}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export { CalendarTable };
