import {
  ON_EVENT_DELETE,
  CLOSE_POPUP,
  GET_PARTICIPANT_FROM_FILTER,
  GET_AUTH_USER,
  LOGIN,
  SHOW_NEW_EVENT_FORM,
  CHECK_DUPLICATE,
} from './types';

const showDeleteConfirmation = (event) => ({
  type: ON_EVENT_DELETE,
  event,
});

const closePopup = () => ({
  type: CLOSE_POPUP,
});

const getParticipantFromFilter = (user) => ({
  type: GET_PARTICIPANT_FROM_FILTER,
  user,
});

const getAuthUser = (user) => ({
  type: GET_AUTH_USER,
  user,
});

const login = () => ({
  type: LOGIN,
});

const showNewEventForm = () => ({
  type: SHOW_NEW_EVENT_FORM,
});

const isEventDuplicate = (event) => ({
  type: CHECK_DUPLICATE,
  event,
});

export {
  showDeleteConfirmation,
  closePopup,
  getParticipantFromFilter,
  getAuthUser,
  login,
  showNewEventForm,
  isEventDuplicate,
};
