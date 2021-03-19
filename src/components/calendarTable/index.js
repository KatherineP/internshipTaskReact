import React, { useEffect } from 'react';
import './calendarTable.css';
import { TableCell, ConfirmPopup } from '../index';
import { loadAllEvents } from '../../store/middleware';
import { useSelector, useDispatch } from 'react-redux';
import { daysOfWeek, time } from '../../config';
import { filterEvents } from '../../utils';

const CalendarTable = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const confirmationPopup = useSelector((state) => state.showDeletePopUp);
  const filteredUser = useSelector((state) => state.filterValue);

  useEffect(() => {
    dispatch(loadAllEvents());
  }, [dispatch]);

  const rows = time.map((time) => (
    <tr key={time.value}>
      <th scope="row">{time.fullTime}</th>
      {daysOfWeek.map((day) => (
        <TableCell
          time={time.value}
          day={day.value}
          events={filterEvents(events, filteredUser)}
          key={`${day.value}${time.value}`}
        />
      ))}
    </tr>
  ));

  return (
    <div>
      {confirmationPopup && (
        <ConfirmPopup confirmationPopup={confirmationPopup} />
      )}
      <table className="table table-bordered text-center">
        <thead className="table-secondary">
          <tr>
            <th scope="col" key="name">
              Name
            </th>
            {daysOfWeek.map((col) => (
              <th scope="col" key={col.fullDay}>
                {col.fullDay}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
export { CalendarTable };
