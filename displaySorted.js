const displaySorted = (filteredTrucks, indexStart, indexEnd) => {

  let tenFoodTrucks = filteredTrucks.slice(indexStart, indexEnd).map(trucks => {
      return trucks.applicant + ": " + trucks.location + ": " + trucks.start24 + "-" + trucks.end24
  });

  return tenFoodTrucks.sort();

};

module.exports = displaySorted;
