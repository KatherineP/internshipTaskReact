import React from 'react';
import './app.css';
import { Header, CalendarTable, Login, NewEventPage } from '../index';
import { useSelector } from 'react-redux';

const App = () => {
  const showCalendar = useSelector((state) => state.showCalendar);
  const showEventForm = useSelector((state) => state.showEventForm);
  const isEventDuplicate = useSelector((state) => state.isEventDuplicate);
  return (
    <div className="container">
      {showCalendar && (
        <div className="container-calendar">
          <Login />
          <Header />
          <CalendarTable />
        </div>
      )}
      {showEventForm && (
        <div className="container-newEvent">
          {isEventDuplicate && (
            <div className="alert alert-event alert-danger" role="alert">
              Failed to create an event. Time slot is already booked.
            </div>
          )}
          <NewEventPage />
        </div>
      )}
    </div>
  );
};

export default App;
