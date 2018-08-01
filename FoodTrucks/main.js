const getData = () => {
  const http = require('http');
  const request = require('request');
  const filter = require('./filterParameters');
  const displaySorted = require('./displaySorted');
  let str = '';

  callback = (res) => {

    res.on('data', (chunk) => {
      str += chunk;
    });

    res.on('end', () => {
      const filteredTrucks = filter(JSON.parse(str));
      const firstTenFoodTrucks = displaySorted(filteredTrucks, 0, 10);

      console.log(firstTenFoodTrucks);
    });

  };

  const req = http.request('http://data.sfgov.org/resource/bbb8-hzi6.json', callback).end();
};

getData();
