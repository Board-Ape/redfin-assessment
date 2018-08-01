const filter = arr => {

  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentDayNumber = currentDate.getDay();
  let filteredTrucksArray = [];

  arr.filter(truck => {

    if (truck.start24.slice(0,2) < currentHour
        && truck.end24.slice(0,2) > currentHour
        && truck.dayorder == currentDayNumber) {
      filteredTrucksArray.push(truck)
    }

  });

  return filteredTrucksArray

};

module.exports = filter;
