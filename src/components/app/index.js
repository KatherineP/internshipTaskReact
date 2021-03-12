import React from 'react';
import './app.css';
import { Header, CalendarTable } from '../index';

const App = () => {
  return (
    <div className="container">
      <div className="container-calendar">
        <Header />
        <CalendarTable />
      </div>
      <div className="container-newEvent hidden"></div>
    </div>
  );
};

export default App;
