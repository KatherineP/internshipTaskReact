import React, { useState, useEffect } from 'react';
import './newEventPage.css';
import { UserDropdown } from '../index';
import { time, daysOfWeek } from '../../config';
import { useSelector, useDispatch } from 'react-redux';
import { postNewEvent } from '../../store/middleware';
import { isEventDuplicate, closePopup } from '../../store/actionCreators';
import calendarReducer from '../../store/reducers';

const NewEventPage = () => {
  const dispatch = useDispatch();
  const newEvent = useSelector((state) => state.newEvent);

  const [event, setEvent] = useState({});
  const [eventTextError, setEventTextError] = useState(false);
  const [eventParticipantsError, setEventParticipantsError] = useState(false);
  const [eventDayError, setEventDayError] = useState(false);
  const [eventTimeError, setEventTimeError] = useState(false);

  const handleSubmit = (e) => {
    const hasText = event.hasOwnProperty('eventText');
    const hasParticipants = event.hasOwnProperty('participants');
    const hasDay = event.hasOwnProperty('day');
    const hasTime = event.hasOwnProperty('time');
    e.preventDefault();
    if (!hasText) {
      setEventTextError(true);
    } else if (!hasParticipants) {
      setEventParticipantsError(true);
    } else if (!hasDay) {
      setEventDayError(true);
    } else if (!hasTime) {
      setEventTimeError(true);
    }
    if (hasText && hasParticipants && hasDay && hasTime) {
      dispatch(isEventDuplicate(event));
    }
  };

  useEffect(() => {
    if (newEvent) {
      dispatch(postNewEvent(event));
    }
  }, [dispatch, newEvent, event]);

  const handleChangeEventText = (e) => {
    if (e.target.value) {
      setEvent({
        ...event,
        eventText: e.target.value,
      });
      setEventTextError(false);
    }
  };

  const handleChangeEventParticipants = (e) => {
    const arr = Array.from(e.target.selectedOptions, (option) => option.value);
    if (arr) {
      setEvent({
        ...event,
        participants: arr,
      });
      setEventParticipantsError(false);
    }
  };

  const handleChangeEventTime = (e) => {
    if (e.target.value.match('^[0-9]{2}$')) {
      setEvent({
        ...event,
        time: e.target.value,
      });
      setEventTimeError(false);
    }
  };

  const handleChangeEventDay = (e) => {
    if (e.target.value.match('[a-z]{3}')) {
      setEvent({
        ...event,
        day: e.target.value,
      });
      setEventDayError(false);
    }
  };

  return (
    <form id="form">
      <div className="form-group row">
        <label htmlFor="inputNameEvent" className="col-sm-2 col-form-label">
          Name of the event:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputNameEvent"
            placeholder="Name of the event:"
            required
            onChange={handleChangeEventText}
          />
          {eventTextError && (
            <p className="error">Please fill in the text of the event</p>
          )}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="participants" className="col-sm-2 col-form-label">
          Participants:
        </label>
        <div className="col-sm-10">
          <p className="multiselect-tip">
            Use 'cmd + click' to select multiple participants:
          </p>
          <select
            id="participants"
            size="2"
            className="form-control"
            multiple
            required
            onChange={handleChangeEventParticipants}
          >
            <UserDropdown />
          </select>
          {eventParticipantsError && (
            <p className="error">Please select participants</p>
          )}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="day" className="col-sm-2 col-form-label">
          Day:
        </label>
        <div className="col-sm-10">
          <select
            id="day"
            className="form-control"
            required
            onChange={handleChangeEventDay}
          >
            <option value="">Choose...</option>
            {daysOfWeek.map((day) => (
              <option value={day.value} key={day.value}>
                {day.fullDay}
              </option>
            ))}
          </select>
          {eventDayError && <p className="error">Please select day</p>}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="time" className="col-sm-2 col-form-label">
          Time:
        </label>
        <div className="col-sm-10">
          <select
            id="time"
            className="form-control"
            required
            onChange={handleChangeEventTime}
          >
            <option value="">Choose...</option>
            {time.map((time) => (
              <option value={time.value} key={time.value}>
                {time.fullTime}
              </option>
            ))}
          </select>
          {eventTimeError && <p className="error">Please select time</p>}
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          id="cancel"
          type="reset"
          className="btn btn-secondary mr-3"
          onClick={() => dispatch(closePopup())}
        >
          Cancel
        </button>
        <button
          id="create"
          type="submit"
          className="btn btn-secondary"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export { NewEventPage };
