import React, { useContext, useState } from 'react';
import './tableCell.css';
import { UserContext } from '../index';
import { ConfirmPopup } from '../index';

const TableCell = ({ className, time, eventsFromServer, deleteById }) => {
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const authUser = useContext(UserContext);
  const cellClass = `${className}${time}`;
  const event = eventsFromServer.find(
    (event) => cellClass === `cell-${event.day}-${event.time}`
  );
  const showConfirmationPopup = () => {
    setConfirmationPopup(!confirmationPopup);
  };

  if (event !== undefined) {
    return (
      <td className={`${cellClass} event`}>
        <div id={cellClass}>
          {event.eventText}
          {authUser.isAdmin && (
            <button
              type="button"
              id="delete-event"
              className="close"
              aria-label="Close"
              onClick={() => {
                showConfirmationPopup();
              }}
            >
              <span className="delete-event">&times;</span>
            </button>
          )}
          {confirmationPopup && (
            <ConfirmPopup
              eventTitle={event.eventText}
              eventId={event.id}
              deleteById={deleteById}
            />
          )}
        </div>
      </td>
    );
  } else {
    return <td className={cellClass}></td>;
  }
};

export { TableCell };
