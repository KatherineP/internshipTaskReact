import { LOAD_EVENTS, DELETE_EVENT, POST_NEW_EVENT } from './types';
import swagger from '../services';

const loadAllEvents = () => {
  return async (dispatch) => {
    const events = await swagger.getAllEvents();
    dispatch({
      type: LOAD_EVENTS,
      events,
    });
  };
};

const deleteEvent = (id) => {
  return async (dispatch) => {
    await swagger.deleteEvent(id);
    dispatch({
      type: DELETE_EVENT,
      id,
    });
  };
};

const postNewEvent = (event) => {
  return async (dispatch) => {
    await swagger.postNewEvent(event);
    dispatch({
      type: POST_NEW_EVENT,
    });
  };
};

export { loadAllEvents, deleteEvent, postNewEvent };
