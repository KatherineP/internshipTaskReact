import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import calendarReducer from './reducers';

const store = createStore(
  calendarReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
