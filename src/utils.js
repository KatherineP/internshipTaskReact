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

export { filterEvents };
