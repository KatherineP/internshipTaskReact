import React from 'react';
import './tableCell.css';
import { useSelector, useDispatch } from 'react-redux';
import { showDeleteConfirmation } from '../../store/actionCreators';

const TableCell = ({ time, day, events }) => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin);

  const event = events.find(
    (event) => event.day === day && event.time === time
  );

  if (event === undefined) return <td></td>;

  return (
    <td className="event">
      <div>
        {event.eventText}
        {isAdmin && (
          <button
            type="button"
            aria-label="Close"
            className="close"
            onClick={() => dispatch(showDeleteConfirmation(event))}
          >
            <span className="delete-event">&times;</span>
          </button>
        )}
      </div>
    </td>
  );
};

export { TableCell };
