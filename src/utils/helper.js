function compare(timeString1, timeString2) {
  let arrivalTime = new Date(timeString1);
  let departureTime = new Date(timeString2);

  return arrivalTime.getTime() > departureTime.getTime();
}

module.exports = {
  compare,
};
