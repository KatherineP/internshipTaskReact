import React from 'react';
import './newEventPage.css';
import { UserDropdown } from '../index';
import { time, daysOfWeek } from '../../config';

const NewEventPage = () => {
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
          />
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
          >
            <UserDropdown />
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="day" className="col-sm-2 col-form-label">
          Day:
        </label>
        <div className="col-sm-10">
          <select id="day" className="form-control" required>
            <option value="">Choose...</option>
            {daysOfWeek.map((day) => (
              <option value={day.value} key={day.value}>
                {day.fullDay}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="time" className="col-sm-2 col-form-label">
          Time:
        </label>
        <div className="col-sm-10">
          <select id="time" className="form-control" required>
            <option value="">Choose...</option>
            {time.map((time) => (
              <option value="10" key={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button id="cancel" type="reset" className="btn btn-secondary mr-3">
          Cancel
        </button>
        <button id="create" type="submit" className="btn btn-secondary">
          Create
        </button>
      </div>
    </form>
  );
};

export { NewEventPage };
