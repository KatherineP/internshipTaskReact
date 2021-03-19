import {
  LOAD_EVENTS,
  ON_EVENT_DELETE,
  DELETE_EVENT,
  CLOSE_POPUP,
  GET_PARTICIPANT_FROM_FILTER,
  GET_AUTH_USER,
  LOGIN,
  POST_NEW_EVENT,
  SHOW_NEW_EVENT_FORM,
  CHECK_DUPLICATE,
} from './types';
import { users } from '../config';

const initState = {
  events: [],
  isAdmin: false,
  authUser: 'Kate Prokofieva',
  filterValue: 'All members',
  showEventForm: false,
  showCalendar: true,
  showErrorMessage: false,
  showDeletePopUp: false,
  showLoginPopUp: true,
  isEventDuplicate: false,
  newEvent: null,
  deletedEvent: {},
};

const deleteEvent = (state, id) => {
  const { events } = state;
  const index = events.findIndex((event) => event.id === id);
  const copyOfEventsArr = [...events];
  copyOfEventsArr.splice(index, 1);
  return {
    ...state,
    events: copyOfEventsArr,
    showDeletePopUp: false,
  };
};

const showConfirmation = (state, event) => {
  return {
    ...state,
    showDeletePopUp: true,
    deletedEvent: event,
  };
};

const login = (state) => {
  const { authUser } = state;
  const user = users.find((user) => user.name === authUser);
  return {
    ...state,
    isAdmin: user.isAdmin,
    showLoginPopUp: false,
  };
};

const isEventDuplicate = (state, event) => {
  const { events } = state;
  const isEventDuplicate = events.find(
    (e) => e.day === event.day && e.time === event.time
  );
  if (isEventDuplicate === undefined) {
    return {
      ...state,
      newEvent: event,
      isEventDuplicate: false,
    };
  } else {
    return {
      ...state,
      isEventDuplicate: true,
    };
  }
};

export function calendarReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_EVENTS:
      return { ...state, events: action.events };
    case ON_EVENT_DELETE:
      return showConfirmation(state, action.event);
    case DELETE_EVENT:
      return deleteEvent(state, action.id);
    case CLOSE_POPUP:
      return {
        ...state,
        showDeletePopUp: false,
        showEventForm: false,
        showCalendar: true,
      };
    case GET_PARTICIPANT_FROM_FILTER:
      return { ...state, filterValue: action.user };
    case GET_AUTH_USER:
      return { ...state, authUser: action.user };
    case LOGIN:
      return login(state);
    case POST_NEW_EVENT:
      return {
        ...state,
        showEventForm: false,
        showCalendar: true,
        isEventDuplicate: false,
        newEvent: null,
      };
    case SHOW_NEW_EVENT_FORM:
      return { ...state, showEventForm: true, showCalendar: false };
    case CHECK_DUPLICATE:
      return isEventDuplicate(state, action.event);
    default:
      return state;
  }
}

export default calendarReducer;
