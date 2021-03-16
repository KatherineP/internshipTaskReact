import React, { useState, useEffect } from 'react';
import './app.css';
import {
  Header,
  CalendarTable,
  Login,
  UserContext,
  NewEventPage,
} from '../index';
import swagger from '../../services';
import { users } from '../../config';

const App = () => {
  const [user, setUser] = useState('Kate Prokofieva');
  const [loginStatus, setLoginStatus] = useState(false);
  const [eventsFromServer, setEventsFromServer] = useState([]);
  const [filteredUser, setFilteredUser] = useState('All members');
  const [showNewEventForm, setShowNewEventForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const events = await swagger.getAllEvents();
        setEventsFromServer(events);
      } catch (e) {
        return Promise.reject(e);
      }
    }
    fetchEvents();
  }, []);
  const getAuthUser = (authUser) => {
    const user = users.find((user) => user.name === authUser);
    setUser(user);
    setLoginStatus(true);
  };

  const getNewEvent = (newEvent) => {
    const index = eventsFromServer.find(
      (eventFromCalendar) =>
        eventFromCalendar.day === newEvent.day &&
        eventFromCalendar.time === newEvent.time
    );
    if (index === undefined) {
      swagger.postNewEvent(newEvent).then((event) => {
        const newObjEvent = { ...newEvent, id: event.id };
        setEventsFromServer((prev) => [...prev, newObjEvent]);
      });

      setShowNewEventForm(false);
    } else {
      setErrorMessage(true);
    }
  };

  const getFilteredUser = (userName) => {
    setFilteredUser(userName);
  };

  const openNewEventForm = () => {
    setShowNewEventForm(true);
  };

  const filterEvents = (allEvents, userName) => {
    if (userName === 'All members') {
      return allEvents;
    } else {
      const filteredEvents = allEvents.filter(({ participants }) =>
        participants.includes(userName)
      );
      return filteredEvents;
    }
  };

  const onCancelNewEvent = () => {
    setShowNewEventForm(false);
  };

  const deleteById = async (eventId) => {
    try {
      await swagger.deleteEvent(eventId);
      const index = eventsFromServer.findIndex((event) => event.id === eventId);
      const copyOfEventsArr = [...eventsFromServer];
      copyOfEventsArr.splice(index, 1);
      setEventsFromServer(copyOfEventsArr);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  if (showNewEventForm) {
    return (
      <div className="container">
        <div className="container-newEvent">
          {errorMessage && (
            <div className="alert alert-event alert-danger" role="alert">
              Failed to create an event. Time slot is already booked.
            </div>
          )}
          <NewEventPage
            getNewEvent={getNewEvent}
            eventsFromServer={eventsFromServer}
            onCancelNewEvent={onCancelNewEvent}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <UserContext.Provider value={user}>
        <div className="container-calendar">
          {!loginStatus && <Login getAuthUser={getAuthUser} />}
          <Header
            getFilteredUser={getFilteredUser}
            openNewEventForm={openNewEventForm}
          />
          <CalendarTable
            eventsFromServer={filterEvents(eventsFromServer, filteredUser)}
            deleteById={deleteById}
          />
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
